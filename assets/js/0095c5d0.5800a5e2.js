"use strict";(self.webpackChunkmobile_dev_docs=self.webpackChunkmobile_dev_docs||[]).push([[2326],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,tags:["repository"],description:"Git Bash"},s="Git Bash",c={unversionedId:"repository/git-bash",id:"repository/git-bash",isDocsHomePage:!1,title:"Git Bash",description:"Git Bash",source:"@site/docs/repository/git-bash.md",sourceDirName:"repository",slug:"/repository/git-bash",permalink:"/docs/repository/git-bash",tags:[{label:"repository",permalink:"/docs/tags/repository"}],version:"current",lastUpdatedAt:1636454935,formattedLastUpdatedAt:"11/9/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["repository"],description:"Git Bash"},sidebar:"tutorialSidebar",previous:{title:"Branching",permalink:"/docs/repository/branching"},next:{title:"State Management",permalink:"/docs/design-pattern/state-management"}},p=[{value:"git log",id:"git-log",children:[],level:2},{value:"git rebase",id:"git-rebase",children:[{value:"rebase squash",id:"rebase-squash",children:[],level:3},{value:"rebase drop",id:"rebase-drop",children:[],level:3},{value:"rebase with conflict",id:"rebase-with-conflict",children:[],level:3}],level:2},{value:"git cherry-pick",id:"git-cherry-pick",children:[],level:2},{value:"git stash",id:"git-stash",children:[],level:2}],h={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-bash"},"Git Bash"),(0,o.kt)("p",null,"Git command line :"),(0,o.kt)("h2",{id:"git-log"},"git log"),(0,o.kt)("p",null,"To checking your log commit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git log -n [number] \n")),(0,o.kt)("p",null,"or use --oneline for simple logs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git log -n [number] --oneline\n")),(0,o.kt)("p",null,"number is how much you need to see commits line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"to checking 10 commits log.\n\ngit log -n 10 --oneline\n")),(0,o.kt)("h2",{id:"git-rebase"},"git rebase"),(0,o.kt)("p",null,"Reapply commits on top of another base tip."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase [branch base]\n")),(0,o.kt)("p",null,"How to use rebase squash or drop on your branch:"),(0,o.kt)("p",null,"Start it with the last commit you want to retain as-is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase -i HEAD~3 <rebase three commit from head>\n")),(0,o.kt)("p",null,"An editor will be fired up with all the commits in your current branch (ignoring merge commits), which come after the given commit. You can reorder the commits in this list to your heart\u2019s content, and you can remove them. The list looks more or less like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pick deadbee The oneline of this commit\npick fa1afe1 The oneline of the next commit\npick rasade4 The oneline of the next two commit\n")),(0,o.kt)("h3",{id:"rebase-squash"},"rebase squash"),(0,o.kt)("p",null,"Squashing multiple commits into one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pick deadbee The oneline of this commit\ns fa1afe1 The oneline of the next commit\ns rasade4 The oneline of the next two commit\n")),(0,o.kt)("h3",{id:"rebase-drop"},"rebase drop"),(0,o.kt)("p",null,'To drop a commit, replace the command "pick" with "drop", or just delete the matching line.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pick deadbee The oneline of this commit\nd fa1afe1 The oneline of the next commit [if this line commit that will be remove]\npick rasade4 The oneline of the next two commit\n")),(0,o.kt)("h3",{id:"rebase-with-conflict"},"rebase with conflict"),(0,o.kt)("p",null,"In case of conflict, git rebase will stop at the first problematic commit and leave conflict markers in the tree. You can use git diff to locate the markers (<<<<<<) and make edits to resolve the conflict. For each file you edit, you need to tell Git that the conflict has been resolved, typically this would be done with :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git add [filename]\n")),(0,o.kt)("p",null,"After resolving the conflict manually and updating the index with the desired resolution, you can continue the rebasing process with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase --continue\n")),(0,o.kt)("p",null,"Alternatively, you can undo the git rebase with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase --abort\n")),(0,o.kt)("p",null,"After done your rebase you need to force push your branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git push -f origin [your branch]\n")),(0,o.kt)("h2",{id:"git-cherry-pick"},"git cherry-pick"),(0,o.kt)("p",null,"Cherry picking in Git means to choose a commit from one branch and apply it onto another."),(0,o.kt)("p",null,"This is in contrast with other ways such as merge and rebase which normally apply many commits onto another branch."),(0,o.kt)("p",null,"Make sure you are on the branch you want to apply the commit to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git switch [target branch]\n")),(0,o.kt)("p",null,"Execute the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git cherry-pick [commit-hash]\n\nexc:\ngit cherry-pick deadbee\n\nmultiple commit hash:\ngit cherry-pick deadbee fa1afe1 (don't forget to add space between commit hash)\n\n")),(0,o.kt)("h2",{id:"git-stash"},"git stash"),(0,o.kt)("p",null,"Use git stash when you want to record the current state of the working directory and the index, but want to go back to a clean working directory."),(0,o.kt)("p",null,"How to stash changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash\n")),(0,o.kt)("p",null,"to checking how many stash you had:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash list\n")),(0,o.kt)("p",null,"result would be like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stash@{0}: WIP on submit: 6ebd0e2... Update git-stash documentation\nstash@{1}: On master: 9cc0589... Add git-stash\n")),(0,o.kt)("p",null,"to apply stash but keep stash log:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash apply stash@{0}\n")),(0,o.kt)("p",null,"to apply stash then remove from stash log:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash pop stash@{n}\n")),(0,o.kt)("p",null,"if you only have 1 stash you can use "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash pop\n")))}u.isMDXComponent=!0}}]);