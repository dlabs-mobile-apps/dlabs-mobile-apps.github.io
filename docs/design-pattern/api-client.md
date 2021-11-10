---
sidebar_position: 4
tags: 
 - design pattern
description: API Client
---

# API Client

Our http client using Dio, with options :
```js
BaseOptions(
  baseUrl: Constant.BASE_URL_API,
  connectTimeout: 15000,
  receiveTimeout: 15000,
  contentType: "application/json",
  responseType: ResponseType.json,
),
``` 

This configuration you can find at `lib/core/client/client.dart`

## Error Handling
We have error handling for dio client that can be found at  `lib/core/client/result.dart`, to use this handling you can see repository requirement.

## Repository Requirement
1. Every return response must using Result model that located in client folder :

    ```js
    static Future getPosts(int limit, int offset) async {
      debugPrint('--- DummyRepository @getPosts : ---');
      var endPoint = '/posts?_start=$offset&_limit=$limit';
      Response<String> response = await Client().dio.get(endPoint);

      return Result(
        ResultType.Success,
        'Get data list post success',
        data: postModelFromMap(response.data!),
      );
    }
    ```
2. Use Info model for key `"info"` below located at `lib/core/client/info.dart` to every response :
   
    ```json
    {
        "status": "error",
        "data": null,
        "info": {
            "id": "ERR_LOGIN_EMAIL_OR_PASSWORD_IS_WRONG",
            "message": "Incorrect username or password",
            "messageEn": null,
            "messageId": null,
            "field": "email",
            "redirect": null
        }
    }
    ```
    
    example :
    ```js
    class LoginResponse {
      LoginResponse({
        this.status,
        this.data,
        this.info,
      });

      String? status;
      LoginData? data;
      Info? info; // this global info

      .
      .
      .
    ```

3. Cacth error on bloc with `Result.fromError(e)` :
 
    ```js
    // bloc
    } catch (e) {
      var result = Result.fromError(e);
      emit(LoginError(
        statusCode: result.statusCode,
        message: result.message
      ));
    }
    ```

4. Catch error from status code 200 :
   
    ```js
    // bloc
    try {
      emit(LoginLoading());

      var data = LoginRequest(email: email!, password: password!);
      Result<LoginResponse> result = await LoginRepository.login(data);

      // error from status code 200
      if (result.data?.status == ResultType.Error.value) {
        emit(LoginError(
            message: result.data?.info?.message ?? Strings.unknownErrorMessage));
        return;
      }

      emit(LoginSuccess(data: result.data!.data!));
      await setSessionCurrentUser(result.data!.data!);
    } catch (e) {
      var result = Result.fromError(e);
      emit(LoginError(message: result.message));
    }
    ```