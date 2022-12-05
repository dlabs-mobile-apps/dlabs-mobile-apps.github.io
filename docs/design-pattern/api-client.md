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
  baseUrl: Environment().config.apiHost,
  connectTimeout: 15000,
  receiveTimeout: 15000,
  contentType: "application/json",
  responseType: ResponseType.json,
),
``` 

This configuration you can find at `lib/core/client/client.dart`

## Usage

```js
Client().dio.get(endpoint, ..... );
Client().dio.post(endpoint, ..... );
Client().dio.put(endpoint, ..... );
Client().dio.delete(endpoint,  ..... );
```

## Refresh Token

On dio client there are interceptor on request, on response and on error. Refresh token used in interceptor on error when `statusCode == 403` (based on api response).

## Error Handling
You can see full documentation about error handling [here](/docs/design-pattern/error-handling).
