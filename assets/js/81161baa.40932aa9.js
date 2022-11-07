"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[1485],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(o),m=n,b=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return o?r.createElement(b,l(l({ref:t},c),{},{components:o})):r.createElement(b,l({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2713:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={slug:"how-to-create-blog-post",title:"How to Create Blog Post",authors:"irufano",tags:["tutorial","blog"]},l=void 0,i={permalink:"/blog/how-to-create-blog-post",source:"@site/blog/2021-11-09-how-to-create-blog-post.mdx",title:"How to Create Blog Post",description:"Adding posts\u200b",date:"2021-11-09T00:00:00.000Z",formattedDate:"November 9, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"blog",permalink:"/blog/tags/blog"}],readingTime:.985,hasTruncateMarker:!0,authors:[{name:"M. Irfan Hidayat",title:"Software Engineer",url:"https://github.com/irufano",imageURL:"https://github.com/irufano.png",key:"irufano"}],frontMatter:{slug:"how-to-create-blog-post",title:"How to Create Blog Post",authors:"irufano",tags:["tutorial","blog"]},nextItem:{title:"How to Create Docs Page",permalink:"/blog/how-to-create-docs-page"}},s={authorsImageUrls:[void 0]},u=[{value:"Adding posts\u200b",id:"adding-posts",level:2},{value:"Global authors\u200b",id:"global-authors",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"adding-posts"},"Adding posts\u200b"),(0,n.kt)("p",null,"To publish in the blog, create a Markdown file within the blog directory."),(0,n.kt)("p",null,"For example, create a file at website/blog/2021-08-05-hello-blog.md"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="website/blog/2021-08-05-hello-blog.md"',title:'"website/blog/2021-08-05-hello-blog.md"'},"---\ntitle: Welcome Docusaurus v2\ndescription: This is my first post on Docusaurus 2.\nslug: welcome-docusaurus-v2\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [hello, docusaurus-v2]\nimage: https://i.imgur.com/mErPwqL.png\nhide_table_of_contents: false\n---\nWelcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).\n\n\x3c!--truncate--\x3e\n\nThis is my first post on Docusaurus 2.\n\nA whole bunch of exploration to follow.\n")),(0,n.kt)("h2",{id:"global-authors"},"Global authors\u200b"),(0,n.kt)("p",null,"For regular blog post authors, it can be tedious to maintain authors information inlined in each blog post."),(0,n.kt)("p",null,"It is possible declare those authors globally in a configuration file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="website/blog/authors.yml"',title:'"website/blog/authors.yml"'},"jmarcey:\n  name: Joel Marcey\n  title: Co-creator of Docusaurus 1\n  url: https://github.com/JoelMarcey\n  image_url: https://github.com/JoelMarcey.png\n\nslorber:\n  name: S\xe9bastien Lorber\n  title: Docusaurus maintainer\n  url: https://sebastienlorber.com\n  image_url: https://github.com/slorber.png\n")),(0,n.kt)("p",null,"In blog posts FrontMatter, you can reference the authors declared in the global configuration file:"),(0,n.kt)("p",null,"Single author :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors: jmarcey\n---\n")),(0,n.kt)("p",null,"Multi authors :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors: [jmarcey, slorber]\n---\n")))}p.isMDXComponent=!0}}]);