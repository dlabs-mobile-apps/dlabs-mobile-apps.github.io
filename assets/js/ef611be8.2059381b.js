"use strict";(self.webpackChunkmobile_dev_docs=self.webpackChunkmobile_dev_docs||[]).push([[2469],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"create-",title:"How to Create Docs Page",authors:["irufano"],tags:["docs","tutorial"]},c=void 0,s={permalink:"/blog/create-",source:"@site/blog/2021-11-09-how-to-create-docs-page.mdx",title:"How to Create Docs Page",description:"Create a Markdown file, greeting.md, and place it under the docs directory.",date:"2021-11-09T00:00:00.000Z",formattedDate:"November 9, 2021",tags:[{label:"docs",permalink:"/blog/tags/docs"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:1.22,truncated:!1,authors:[{name:"M. Irfan Hidayat",title:"Software Engineer",url:"https://github.com/irufano",imageURL:"https://github.com/irufano.png",key:"irufano"}],prevItem:{title:"How to Create Blog Post",permalink:"/blog/how-to-create-blog-post"},nextItem:{title:"Welcome to Blog",permalink:"/blog/welcome"}},u={authorsImageUrls:[void 0]},d=[{value:"Example",id:"example",children:[],level:2},{value:"Doc tags\u200b",id:"doc-tags",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a Markdown file, greeting.md, and place it under the docs directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"If you not define title system will take the head # of your md file to become title."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_position")," is menu order at sidebar. "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nsidebar_position: 1\n---\n\n# introduction \n\n## Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n### Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n### Only h2 and h3 will be in the toc by default.\n\nYou can configure the TOC heading levels either per-document or in the theme configuration.\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n### Custom id headers {#custom-id}\n\n")),(0,a.kt)("h2",{id:"doc-tags"},"Doc tags\u200b"),(0,a.kt)("p",null,"Optionally, you can add tags to your doc pages, which introduces another dimension of categorization in addition to the docs sidebar. Tags are passed in the front matter as a list of labels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nid: doc-with-tags\ntitle: A doc with tags\ntags:\n  - Demo\n  - Getting started\n---\n")))}m.isMDXComponent=!0}}]);