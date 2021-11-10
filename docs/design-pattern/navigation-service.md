---
sidebar_position: 3
tags: 
 - design pattern
description: Navigation Service
---

# Navigation Service

Our navigation service using dependency injection with get it (service locator).

```js
Future<void> setupLocator() async {
  // locator.registerLazySingleton<AudioPlayerService>(() => AudioPlayerService());
  locator
    ..registerLazySingleton<NavigationService>(() => NavigationService())
    .
    .
}
```

## Using Navigation Service

We can use navigation service everywhere because this navigation service no need context for navigate. To use navigation service define the locator first then call the method.

```js
NavigationService navigationService = locator<NavigationService>();


// then navigate
navigationService.pushReplacement(Routes.MAIN_PAGE);
```



## Page Requirement
  1.  Every class of page has one parameter only for clean code :
      
      ```js
      final dynamic data;
      ```

  2.  Also add arguments and RouteObserverService on route_manager.dart, example:
      ```js
      return MaterialPageRoute(
        builder: (context) => RouteObserverService(
          routeName: settings.name,
          child: LoginPage(
            data: settings.arguments,
          ),
        ),
      );

      ```

  3.  if want to navigate page that must contain parameter, create parameter model and navigate, then check on that page at initState. example:
      ```js
      // create parameter model and navigate
      MainPageParameter param = MainPageParameter(
            currentIndex: 0,
            expandAudioPanel: false,
          );

      navigationService.push(Routes.MAIN_PAGE, arguments: param);
      ```
      ```dart
      late MainPageParameter param;

      // check on page that contain parameter at initstate 
      @override
      void initState() {
        param = widget.data;
        _currentIndex = param.currentIndex ?? 0;
        _isPanelExpand = param.expandAudioPanel ?? false;

        super.initState();
      }
      ```