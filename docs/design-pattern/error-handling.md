---
sidebar_position: 4
tags: 
 - design pattern
description: Error Handling
---

# Error Handling

We have error handling for dio client and custom error that can be found at  `lib/core/client/result.dart`.

## Dio Client Error Handling
1. Every return response must using Result model that located in client folder :

    ```js
    static Future getPosts(int limit, int offset) async {
      debugPrint('--- DummyRepository @getPosts : ---');
      var endPoint = '/posts?_start=$offset&_limit=$limit';
      Response<String> response = await Client().dio.get(endPoint);

      return Result(
        ResultType.Success,
        response,
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
      var error = Result.fromError(e);
      emit(LoginError(
        statusCode: error.statusCode,
        message: error.message
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
        throw AppException(result.data?.info?.message, result.response);
      }

      emit(LoginSuccess());
      await setSessionCurrentUser(result.data!.data!);
    } catch (e) {
       var error = Result.fromError(e);
        emit(LoginError(
          statusCode: error.statusCode,
          message: error.message
          detailMessage: error.detailMessage
        ));
    }
    ```

  
## App Exception (Custom Error Handling)

This app exception is used for custom error to get message error only, usages:


```js
// add anywhere in your logic
throw AppException('Custom Error Message');

// with error code
throw AppException('Custom Error Message', ErrorCode.mobileOther.value);
```


This app exception can be used for dio client also for nested method on error api status code 200, example:

```js
// inside event bloc there are method more than 1
...
...
...
await getItems()
await getDetails()
...
...
...


// inside getItems 
Future getItems() {
...
...
...
  Result<Items> result = await ItemRepository.getItems();
  if (result.data?.status == ResultType.Error.value) {
    throw AppException(
      result.data?.info?.message, // message from api
      result.response, // put the response
    );
  }
...
...
...
}

// inside getItems 
Future getDetails() {
...
...
...
  Result<Details> result = await ItemRepository.getDetails();
  if (result.data?.status == ResultType.Error.value) {
    throw AppException(
      result.data?.info?.message, // message from api
      result.response, // put the response
    );
  }
...
...
...
}
```