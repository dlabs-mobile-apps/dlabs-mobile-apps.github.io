"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[8680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(b,a(a({ref:t},p),{},{components:n})):i.createElement(b,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,a[1]=r;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(7462),s=(n(7294),n(3905));const o={sidebar_position:2,title:"Unit Test",description:"Unit testing is a type of testing on an application where testing is focused on what is called a unit. Unit is the smallest part that builds up the application. The simplest examples of units when we talk about OOP (Object-Oriented Programming) are Class and Function. Unit testing will ensure that small components of an application run well and as expected."},a=void 0,r={unversionedId:"test/unit-test",id:"test/unit-test",title:"Unit Test",description:"Unit testing is a type of testing on an application where testing is focused on what is called a unit. Unit is the smallest part that builds up the application. The simplest examples of units when we talk about OOP (Object-Oriented Programming) are Class and Function. Unit testing will ensure that small components of an application run well and as expected.",source:"@site/docs/test/unit-test.md",sourceDirName:"test",slug:"/test/unit-test",permalink:"/docs/test/unit-test",draft:!1,tags:[],version:"current",lastUpdatedAt:1697011497,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Unit Test",description:"Unit testing is a type of testing on an application where testing is focused on what is called a unit. Unit is the smallest part that builds up the application. The simplest examples of units when we talk about OOP (Object-Oriented Programming) are Class and Function. Unit testing will ensure that small components of an application run well and as expected."},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/docs/test/"}},l={},c=[{value:"Bloc Test",id:"bloc-test",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Unit testing is a type of testing on an application where testing is focused on what is called a unit. Unit is the smallest part that builds up the application. The simplest examples of units when we talk about OOP (Object-Oriented Programming) are Class and Function. Unit testing will ensure that small components of an application run well and as expected."),(0,s.kt)("h2",{id:"bloc-test"},"Bloc Test"),(0,s.kt)("p",null,"example: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"blocTest(\n    'Initial bloc state, data length is 0',\n    build: () => MovieListBloc(mockRepository),\n    expect: () => [\n        // no state\n    ],\n    verify: (bloc) {\n        expect(bloc.movies.length, 0);\n    },\n);\n\n\nblocTest(\n    'Parsing JSON movie list, with null safety',\n    build: () => MovieListBloc(repository),\n    setUp: () async {\n        final file = File('test/movie_list/unit/movies.json');\n        final json = jsonDecode(await file.readAsString());\n\n        when(mockClient.get(\n            Endpoint.movieList,\n            queryParameters: {'size': 20, 'page': 1},\n        )).thenAnswer((realInvocation) async => Response(\n                statusCode: 200,\n                requestOptions: RequestOptions(),\n                data: json,\n            ));\n    },\n    act: (bloc) {\n        bloc.add(const GetMovies());\n    },\n    expect: () => [\n        isA<MovieListLoading>(),\n        isA<MovieListLoaded>(),\n    ],\n    verify: (bloc) async {\n        expect(\n            await repository.getMovies(size: 20, page: 1),\n            isA<Result<BaseResponse<List<MovieModel>>>>(),\n        );\n    },\n);\n\nblocTest(\n    'Get data movies initial, '\n    'size = 20, '\n    'page after success = 2, '\n    'data movies length = 20, ',\n    build: () => MovieListBloc(mockRepository),\n    act: (bloc) {\n        var result = Result(\n            Response(requestOptions: mockRequest),\n            data: BaseResponse(\n                status: 'success',\n                info: null,\n                data: List.generate(\n                bloc.size,\n                (index) => MovieModel(\n                    id: index,\n                    title: 'title',\n                    description: 'description',\n                    createdDate: DateTime.now(),\n                    poster: 'poster',\n                ),\n                )),\n        );\n\n        when(mockRepository.getMovies(size: bloc.size, page: bloc.page))\n            .thenAnswer((realInvocation) async => result);\n\n        bloc.add(const GetMovies());\n    },\n    expect: () => [\n        isA<MovieListLoading>(),\n        isA<MovieListLoaded>(),\n    ],\n    verify: (bloc) {\n        expect(bloc.size, 20);\n        expect(bloc.page, 2);\n        expect(bloc.movies.length, bloc.size);\n        verify(mockRepository.getMovies(size: bloc.size, page: 1)).called(1);\n    },\n);\n\n")))}u.isMDXComponent=!0}}]);