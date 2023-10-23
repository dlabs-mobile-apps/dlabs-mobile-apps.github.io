"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[4739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,p=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return n?a.createElement(p,s(s({ref:t},c),{},{components:n})):a.createElement(p,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,tags:["design pattern"],description:"State Management"},s="State Management",o={unversionedId:"design-pattern/state-management",id:"design-pattern/state-management",title:"State Management",description:"State Management",source:"@site/docs/design-pattern/state-management.mdx",sourceDirName:"design-pattern",slug:"/design-pattern/state-management",permalink:"/docs/design-pattern/state-management",draft:!1,tags:[{label:"design pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1698023259,formattedLastUpdatedAt:"Oct 23, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["design pattern"],description:"State Management"},sidebar:"tutorialSidebar",previous:{title:"Git Bash",permalink:"/docs/repository/git-bash"},next:{title:"Directory Structure",permalink:"/docs/design-pattern/directory-structure"}},l={},d=[{value:"BLoC",id:"bloc",level:2},{value:"State",id:"state",level:3},{value:"Event",id:"event",level:3},{value:"Bloc",id:"bloc-1",level:3},{value:"Handle State Changes on UI",id:"handle-state-changes-on-ui",level:2},{value:"BlocBuilder",id:"blocbuilder",level:3},{value:"BlocListener",id:"bloclistener",level:3},{value:"BlocConsumer",id:"blocconsumer",level:3}],c={toc:d};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-management"},"State Management"),(0,r.kt)("p",null,"Our project using BLoC state management, which created by Felix Angelov. You can see the documentation ",(0,r.kt)("a",{parentName:"p",href:"https://bloclibrary.dev"},"here"),". "),(0,r.kt)("h2",{id:"bloc"},"BLoC"),(0,r.kt)("p",null,"A Bloc is a more advanced class which relies on events to trigger state changes rather than functions. Bloc also extends BlocBase which means it has a similar public API as Cubit. However, rather than calling a function on a Bloc and directly emitting a new state, Blocs receive events and convert the incoming events into outgoing states."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus Plushie",src:n(7407).Z,width:"800",height:"201"})),(0,r.kt)("p",null,"There are 3 component on bloc state management, there are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"State"),(0,r.kt)("li",{parentName:"ol"},"Event"),(0,r.kt)("li",{parentName:"ol"},"Bloc")),(0,r.kt)("h3",{id:"state"},"State"),(0,r.kt)("p",null,"States represent the information to be processed by any widget. A widget changes itself based on the state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="login_state.dart"',title:'"login_state.dart"'},"abstract class LoginState extends Equatable {\n  const LoginState();\n\n  @override\n  List<Object> get props => [];\n}\n\nclass LoginInitial extends LoginState {}\n\nclass LoginLoading extends LoginState {}\n\nclass LoginSuccess extends LoginState {\n  final LoginData data;\n  final bool isFirstLogin;\n\n  LoginSuccess({required this.data, this.isFirstLogin = false});\n}\n\nclass LoginError extends LoginState {\n  final String? message;\n  final int? statusCode;\n\n  LoginError({this.message, this.statusCode});\n}\n\n")),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Events tell BLoC to do something. An event can be fired from anywhere, such as from a UI widget. External events, such as changes in network connectivity, changes in sensor readings, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="login_event.dart"',title:'"login_event.dart"'},"abstract class LoginEvent extends Equatable {\n  const LoginEvent();\n\n  @override\n  List<Object> get props => [];\n}\n\nclass EmailChanged extends LoginEvent {\n  final String? email;\n\n  EmailChanged({this.email});\n\n  @override\n  List<Object> get props => [email!];\n\n  @override\n  bool get stringify => true;\n}\n\nclass PasswordChanged extends LoginEvent {\n  final String? password;\n\n  PasswordChanged({this.password});\n\n  @override\n  List<Object> get props => [password!];\n\n  @override\n  bool get stringify => true;\n}\n\nclass Login extends LoginEvent {}\n\n")),(0,r.kt)("h3",{id:"bloc-1"},"Bloc"),(0,r.kt)("p",null,"BLoC is a man in the middle. All the business logic sits inside the BLoC file. It simply accepts events, performs the logic, and outputs the states."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="login_bloc"',title:'"login_bloc"'},"class LoginBloc extends Bloc<LoginEvent, LoginState> {\n  LoginBloc() : super(LoginInitial()) {\n    on<EmailChanged>(_mapEmail);\n    on<PasswordChanged>(_mapPassword);\n    on<Login>(_validation);\n  }\n\n  DeviceInfoService _deviceInfoService = locator<DeviceInfoService>();\n\n  String? email = '';\n  String? password = '';\n\n  String? errorEmail;\n\n  Future _mapEmail(\n    EmailChanged event,\n    Emitter<LoginState> emit,\n  ) async {\n    email = event.email!;\n  }\n\n  Future _mapPassword(\n    PasswordChanged event,\n    Emitter<LoginState> emit,\n  ) async {\n    password = event.password!;\n  }\n\n  Future _validation(\n    Login event,\n    Emitter<LoginState> emit,\n  ) async {\n    bool emailIsValid = isEmailValid(email!);\n\n    if (email!.isEmpty) {\n      errorEmail = Strings.emailEmpty;\n      emit(LoginError(message: errorEmail));\n      emit(LoginInitial());\n    } else if (password!.isEmpty) {\n      emit(LoginError(message: Strings.passwordEmpty));\n      emit(LoginInitial());\n    } else if (!emailIsValid) {\n      errorEmail = Strings.wrongEmailFormat;\n      emit(LoginError(message: Strings.wrongEmailFormat));\n    } else {\n      errorEmail = null;\n      await _login(event, emit);\n    }\n  }\n\n  Future _login(\n    Login event,\n    Emitter<LoginState> emit,\n  ) async {\n    try {\n      emit(LoginLoading());\n\n      var data = LoginRequest(email: email!, password: password!);\n      Result<LoginResponse> result = await AuthRepository.login(data);\n\n      if (result.data?.status == ResultType.Error.value) {\n        // error from status code 200\n        emit(LoginError(\n          message: result.data?.info?.message ?? Strings.unknownErrorMessage,\n        ));\n        return;\n      }\n      if (result.type == ResultType.Success) {\n        // set session\n        await setSessionCurrentUser(result.data!.data!);\n\n        // success login \n        print(result.message);\n        emit(LoginSuccess(\n          data: result.data!.data!,\n          isFirstLogin: result.data!.data!.paramData!.isFirstLogin!,\n        ));\n      }\n    } catch (e) {\n      var result = Result.fromError(e);\n      emit(LoginError(message: result.message));\n    }\n  }\n\n}\n\n")),(0,r.kt)("h2",{id:"handle-state-changes-on-ui"},"Handle State Changes on UI"),(0,r.kt)("p",null,"You can handle change of states using :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"BlocBuilder"),(0,r.kt)("li",{parentName:"ol"},"BlocListener"),(0,r.kt)("li",{parentName:"ol"},"BlocConsumer")),(0,r.kt)("h3",{id:"blocbuilder"},"BlocBuilder"),(0,r.kt)("p",null,"This is used when we want to draw a Widget based on what is the current State. In the following example a new \u201ctext\u201d gets drawn every time the state changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BlocBuilder(\n  bloc: _ordersBloc, \n  builder: (context, state) {\n    if (state is OrdersState.OrderCompleted) {\n      return Container(child: Text('Order Completed!'));\n    } else if (OrdersState.OrderInProgress) {\n      return Container(child: Text('In Progress'));\n    } else if (OrdersState.OrderRequested) {\n      return Container(child: Text('A customer placed an order!'));\n    } else {\n      return Container(child: Text('Waiting for an order'));\n    }\n  },\n);\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"builder (",(0,r.kt)("em",{parentName:"li"},"Required"),"): This method is most important, this returns the widget that we want to draw based on the current state. i.e. The state is \u201cOrderCompleted\u201d then it returns \u201cText(\u2018Order Completed!\u2019)\u201d"))),(0,r.kt)("h3",{id:"bloclistener"},"BlocListener"),(0,r.kt)("p",null,"This is just a listener not a builder (like the above), that means that its job is keep listening for new changes in the state and not to return a widget. Each time the state changes to a new state this listener will receive a notification that the state has changed and then you can trigger an action (e.g. Show pop up, show toast, send a notification, consume an endpoint, analytics, etc)."),(0,r.kt)("p",null,"So what gets draw in the screen doesn\u2019t depends of what we receive in the listener, i.e. it doesn\u2019t depend of the actual state (OrdersState), it reacts depending of the state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BlocListener(\n  bloc: _ordersBloc,\n  listener: (context, state) {\n    // Navigate to next screen\n    Navigator.of(context).pushNamed('OrderCompletedScreen');\n  },\n  child: Container(child: Text('Always draw this text!')),\n);\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"listener: This method is most important, it listens for new changes in the state and execute actions based on the received state. For example: API requests, call analytics stuff, etc."))),(0,r.kt)("h3",{id:"blocconsumer"},"BlocConsumer"),(0,r.kt)("p",null,"This is a mix between \u201cBlocListener\u201d and \u201cBlocBuilder\u201d. This is used when we want to draw something based on the current state and execute some actions depending on the new arriving states."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BlocConsumer(\n  bloc: _ordersBloc,\n  listener: (context, state) {\n    if (state is OrdersState.OrdersCompleted) {\n      // Navigate to next screen\n      Navigator.of(context).pushNamed('OrderCompletedScreen');\n    } else if (state is OrdersState.OrderRefunded) {\n      // Report to analytics\n      Analytics.reportRefunded(state.orderId);\n    }\n  },\n  builder: (context, state) {\n    if (state is OrdersState.OrderCompleted) {\n      return Container(child: Text('Order Served!'));\n    } else if (OrdersState.OrderInProgress) {\n      return Container(child: Text('In Progress'));\n    } else {\n      return Container(child: Text('No State'));\n    }\n  },\n);\n")))}g.isMDXComponent=!0},7407:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bloc_architecture_full-f7a49f7bc94d45c188363c835b031238.png"}}]);