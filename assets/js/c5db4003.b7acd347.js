"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[9379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4,tags:["design pattern"],description:"Error Handling"},s="Error Handling",i={unversionedId:"design-pattern/error-handling",id:"design-pattern/error-handling",title:"Error Handling",description:"Error Handling",source:"@site/docs/design-pattern/error-handling.md",sourceDirName:"design-pattern",slug:"/design-pattern/error-handling",permalink:"/docs/design-pattern/error-handling",draft:!1,tags:[{label:"design pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1670222773,formattedLastUpdatedAt:"Dec 5, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["design pattern"],description:"Error Handling"},sidebar:"tutorialSidebar",previous:{title:"API Client",permalink:"/docs/design-pattern/api-client"},next:{title:"App Link",permalink:"/docs/design-pattern/app-link"}},l={},p=[{value:"Dio Client Error Handling",id:"dio-client-error-handling",level:2},{value:"App Exception (Custom Error Handling)",id:"app-exception-custom-error-handling",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"We have error handling for dio client and custom error that can be found at  ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/core/client/result.dart"),"."),(0,a.kt)("h2",{id:"dio-client-error-handling"},"Dio Client Error Handling"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Every return response must using Result model that located in client folder :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"static Future getPosts(int limit, int offset) async {\n  debugPrint('--- DummyRepository @getPosts : ---');\n  var endPoint = '/posts?_start=$offset&_limit=$limit';\n  Response<String> response = await Client().dio.get(endPoint);\n\n  return Result(\n    ResultType.Success,\n    response,\n    'Get data list post success',\n    data: postModelFromMap(response.data!),\n  );\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use Info model for key ",(0,a.kt)("inlineCode",{parentName:"p"},'"info"')," below located at ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/core/client/info.dart")," to every response :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "error",\n    "data": null,\n    "info": {\n        "id": "ERR_LOGIN_EMAIL_OR_PASSWORD_IS_WRONG",\n        "message": "Incorrect username or password",\n        "messageEn": null,\n        "messageId": null,\n        "field": "email",\n        "redirect": null\n    }\n}\n')),(0,a.kt)("p",{parentName:"li"},"example :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class LoginResponse {\n  LoginResponse({\n    this.status,\n    this.data,\n    this.info,\n  });\n\n  String? status;\n  LoginData? data;\n  Info? info; // this global info\n\n  .\n  .\n  .\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cacth error on bloc with ",(0,a.kt)("inlineCode",{parentName:"p"},"Result.fromError(e)")," :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// bloc\n} catch (e) {\n  var error = Result.fromError(e);\n  emit(LoginError(\n    statusCode: error.statusCode,\n    message: error.message\n  ));\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Catch error from status code 200 :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// bloc\ntry {\n  emit(LoginLoading());\n\n  var data = LoginRequest(email: email!, password: password!);\n  Result<LoginResponse> result = await LoginRepository.login(data);\n\n  // error from status code 200\n  if (result.data?.status == ResultType.Error.value) {\n    throw AppException(result.data?.info?.message, result.response);\n  }\n\n  emit(LoginSuccess());\n  await setSessionCurrentUser(result.data!.data!);\n} catch (e) {\n   var error = Result.fromError(e);\n    emit(LoginError(\n      statusCode: error.statusCode,\n      message: error.message\n      detailMessage: error.detailMessage\n    ));\n}\n")))),(0,a.kt)("h2",{id:"app-exception-custom-error-handling"},"App Exception (Custom Error Handling)"),(0,a.kt)("p",null,"This app exception is used for custom error to get message error only, usages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// add anywhere in your logic\nthrow AppException('Custom Error Message');\n\n// with error code\nthrow AppException('Custom Error Message', ErrorCode.mobileOther.value);\n")),(0,a.kt)("p",null,"This app exception can be used for dio client also for nested method on error api status code 200, example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// inside event bloc there are method more than 1\n...\n...\n...\nawait getItems()\nawait getDetails()\n...\n...\n...\n\n\n// inside getItems \nFuture getItems() {\n...\n...\n...\n  Result<Items> result = await ItemRepository.getItems();\n  if (result.data?.status == ResultType.Error.value) {\n    throw AppException(\n      result.data?.info?.message, // message from api\n      result.response, // put the response\n    );\n  }\n...\n...\n...\n}\n\n// inside getItems \nFuture getDetails() {\n...\n...\n...\n  Result<Details> result = await ItemRepository.getDetails();\n  if (result.data?.status == ResultType.Error.value) {\n    throw AppException(\n      result.data?.info?.message, // message from api\n      result.response, // put the response\n    );\n  }\n...\n...\n...\n}\n")))}u.isMDXComponent=!0}}]);