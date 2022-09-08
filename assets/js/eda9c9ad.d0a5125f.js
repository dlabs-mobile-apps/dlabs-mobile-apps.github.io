"use strict";(self.webpackChunkmobile_dev_docs=self.webpackChunkmobile_dev_docs||[]).push([[8165],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,tags:["repository"],title:"GitFlow",description:"GitFlow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by [Vincent Driessen at nvie](https://nvie.com/posts/a-successful-git-branching-model). We use `GitFlow` as branching strategies for better manage multiple version of project."},s="GitFlow with Rebase Strategies",c={unversionedId:"repository/git-flow",id:"repository/git-flow",isDocsHomePage:!1,title:"GitFlow",description:"GitFlow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by [Vincent Driessen at nvie](https://nvie.com/posts/a-successful-git-branching-model). We use `GitFlow` as branching strategies for better manage multiple version of project.",source:"@site/docs/repository/git-flow.md",sourceDirName:"repository",slug:"/repository/git-flow",permalink:"/docs/repository/git-flow",tags:[{label:"repository",permalink:"/docs/tags/repository"}],version:"current",lastUpdatedAt:1662608404,formattedLastUpdatedAt:"9/8/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["repository"],title:"GitFlow",description:"GitFlow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by [Vincent Driessen at nvie](https://nvie.com/posts/a-successful-git-branching-model). We use `GitFlow` as branching strategies for better manage multiple version of project."},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Git Bash",permalink:"/docs/repository/git-bash"}},p=[{value:"Main Branchs",id:"main-branchs",children:[{value:"Production",id:"production",children:[],level:3},{value:"Staging",id:"staging",children:[],level:3},{value:"Development",id:"development",children:[],level:3}],level:2},{value:"Supporting Branches",id:"supporting-branches",children:[{value:"Feature branches",id:"feature-branches",children:[{value:"Creating a feature branch",id:"creating-a-feature-branch",children:[],level:4},{value:"Incorporating a finished feature on development",id:"incorporating-a-finished-feature-on-development",children:[],level:4}],level:3},{value:"Release branches",id:"release-branches",children:[{value:"Creating a beta release branch",id:"creating-a-beta-release-branch",children:[],level:4},{value:"Finishing a beta release branch",id:"finishing-a-beta-release-branch",children:[],level:4},{value:"Creating a production release branch",id:"creating-a-production-release-branch",children:[],level:4},{value:"Finishing a production release branch",id:"finishing-a-production-release-branch",children:[],level:4}],level:3},{value:"Hotfix branches",id:"hotfix-branches",children:[{value:"Creating a production hotfix  branch",id:"creating-a-production-hotfix--branch",children:[],level:4},{value:"Finishing a production hotfix branch",id:"finishing-a-production-hotfix-branch",children:[],level:4},{value:"Creating a staging hotfix  branch",id:"creating-a-staging-hotfix--branch",children:[],level:4},{value:"Finishing a staging hotfix branch",id:"finishing-a-staging-hotfix-branch",children:[],level:4}],level:3}],level:2},{value:"Git Bash",id:"git-bash",children:[],level:2}],u={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gitflow-with-rebase-strategies"},"GitFlow with Rebase Strategies"),(0,i.kt)("p",null,"GitFlow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by ",(0,i.kt)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model"},"Vincent Driessen at nvie"),". We use ",(0,i.kt)("inlineCode",{parentName:"p"},"GitFlow")," as branching strategies for better manage multiple version of project. We use GitFlow with rebase strategies instead of using merge because when use merge if the repo has a lot of commits it can be hard to read."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitFlow",src:n(9093).Z})),(0,i.kt)("h2",{id:"main-branchs"},"Main Branchs"),(0,i.kt)("p",null,"The main branch provided based on service url (",(0,i.kt)("em",{parentName:"p"},"API Service"),"). There are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Production (",(0,i.kt)("em",{parentName:"li"},"for production"),")"),(0,i.kt)("li",{parentName:"ol"},"staging (",(0,i.kt)("em",{parentName:"li"},"for uat/testing"),")"),(0,i.kt)("li",{parentName:"ol"},"development (",(0,i.kt)("em",{parentName:"li"},"for development"),")")),(0,i.kt)("h3",{id:"production"},"Production"),(0,i.kt)("p",null,"Production environment is an environment where the application is completely ready for use by end-users so that this environment must be guaranteed so that there are no major bugs that can cause large unwanted problems."),(0,i.kt)("h3",{id:"staging"},"Staging"),(0,i.kt)("p",null,"The staging environment is an environment where QA and the product owner will try out the application before it is released to end-users"),(0,i.kt)("h3",{id:"development"},"Development"),(0,i.kt)("p",null,"The development environment is an environment where application developers will experiment with applications that have been made before being tested by QA and end users. This way, developers can prevent bugs before the app is ready for use by other users."),(0,i.kt)("h2",{id:"supporting-branches"},"Supporting Branches"),(0,i.kt)("p",null,"Unlike the main branches, these branches always have a limited life time, since they will be removed eventually."),(0,i.kt)("p",null,"The different types of branches we may use are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Feature branches"),(0,i.kt)("li",{parentName:"ol"},"Release branches"),(0,i.kt)("li",{parentName:"ol"},"Hotfix branches")),(0,i.kt)("p",null,"Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets."),(0,i.kt)("h3",{id:"feature-branches"},"Feature branches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May branch off from:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"development\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Must merge back into:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"development\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Branch naming convention:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"feature-TicketNumber]\n\n# example:\nfeature-DY79\n")),(0,i.kt)("p",null,"Feature branches are used when developing a new feature which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known. No matter when the feature branch will be finished, it will always be merged back into the ",(0,i.kt)("b",null,"development")," branch."),(0,i.kt)("h4",{id:"creating-a-feature-branch"},"Creating a feature branch"),(0,i.kt)("p",null,"When starting work on a new feature, branch off from the develop branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ git checkout -b feature-[TicketNumber] development\n# Switched to a new branch "feature-[TicketNumber]"\n')),(0,i.kt)("h4",{id:"incorporating-a-finished-feature-on-development"},"Incorporating a finished feature on development"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"developer")," you can ",(0,i.kt)("inlineCode",{parentName:"p"},"direct to pull request")," on development branch and waiting for review."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewer")," finished features may be merged into the develop branch to definitely add them to the upcoming release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout development\n# Switched to branch 'development'\n\n$ git rebase feature-[TicketNumber]\n# use rebase instead of merge\n\n$ git branch -d feature-[TicketNumber]\n# Deleted branch feature-[TicketNumber] (was 05e9557).\n\n$ git push -f origin development\n")),(0,i.kt)("h3",{id:"release-branches"},"Release branches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May branch off from:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# BETA RELEASE\ndevelopment\n\n# PROD RELEASE\ndevelopment or staging\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Must merge back into:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# BETA RELEASE\ndevelopment & staging\n\n# PROD RELEASE\ndevelopment, staging & production\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Branch naming convention:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# beta release\nrelease-[betaFlag]-[versionNumber]-b[buildNumber]\n\n# prod release\nrelease-[versionNumber]-b[buildNumber]\n\n# example:\nrelease-beta-1.2.0-b79\nrelease-3.2.2-b107\n")),(0,i.kt)("h4",{id:"creating-a-beta-release-branch"},"Creating a beta release branch"),(0,i.kt)("p",null,"Beta release branches are created from the development branch. The version is based on major, minor or patch update for detail yo can see versioning ",(0,i.kt)("a",{parentName:"p",href:"/docs/releases/build-version"},"here"),". For example, say current version are 1.2.0 and we have patch update then we have decided that will become version 1.2.1, you can see comparison below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Update"),(0,i.kt)("th",{parentName:"tr",align:null},"Current Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Current Build Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Next version"),(0,i.kt)("th",{parentName:"tr",align:null},"Next Build Number (increment)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MAJOR"),(0,i.kt)("td",{parentName:"tr",align:null},"1.2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"37"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,i.kt)("td",{parentName:"tr",align:null},"38")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MINOR"),(0,i.kt)("td",{parentName:"tr",align:null},"1.2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"37"),(0,i.kt)("td",{parentName:"tr",align:null},"1.3.0"),(0,i.kt)("td",{parentName:"tr",align:null},"38")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,i.kt)("td",{parentName:"tr",align:null},"1.2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"37"),(0,i.kt)("td",{parentName:"tr",align:null},"1.2.1"),(0,i.kt)("td",{parentName:"tr",align:null},"38")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ git checkout -b release-beta-1.2.1 development\n# Switched to a new branch "release-beta-1.2.1"\n\n# modified your version on project and others config manually or using script then commit\n\n$ git commit -a -m "Beta LearningHub v1.2.1 b38"\n# comment must follow this pattern : "Beta [AppName] v[versionNumber] b[buildNumber]"\n')),(0,i.kt)("h4",{id:"finishing-a-beta-release-branch"},"Finishing a beta release branch"),(0,i.kt)("p",null,"Merge into staging first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout staging\n# Switched to branch 'staging'\n\n$ git rebase release-beta-1.2.1\n# use rebase instead of merge\n")),(0,i.kt)("p",null,"then merge into development :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout development\n# Switched to branch 'development'\n\n$ git rebase release-beta-1.2.1\n# use rebase instead of merge\n")),(0,i.kt)("p",null,"This step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit."),(0,i.kt)("p",null,"Now we are really done and the beta release branch may be removed, since we don\u2019t need it anymore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch -d release-beta-1.2.1\n# delete branch \n")),(0,i.kt)("h4",{id:"creating-a-production-release-branch"},"Creating a production release branch"),(0,i.kt)("p",null,"The different between production and beta is flag ",(0,i.kt)("inlineCode",{parentName:"p"},"beta"),". If you want release from staging then create branch based on staging branch else if you want release from development then create branch from development branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# FROM DEV\n$ git checkout -b release-1.2.1 development\n# Switched to a new branch "release-1.2.1"\n\n# FROM STAGING\n$ git checkout -b release-1.2.1 staging\n# Switched to a new branch "release-1.2.1"\n\n# modified your version on project and others config manually or using script then commit\n\n$ git commit -a -m "LearningHub v1.2.1 b38"\n# comment must follow this pattern : "[AppName] v[versionNumber] b[buildNumber]"\n')),(0,i.kt)("h4",{id:"finishing-a-production-release-branch"},"Finishing a production release branch"),(0,i.kt)("p",null,"Merge into production first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout production\n# Switched to branch 'production'\n\n$ git rebase release-1.2.1\n# use rebase instead of merge\n\n# add tag with following pattern : v[versionNumber]-b[buildNumber]\n$ git tag -a v1.2.1-b38\n")),(0,i.kt)("p",null,"then merge into staging:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# staging\n$ git checkout staging\n$ git rebase release-beta-1.2.1\n# use rebase instead of merge\n")),(0,i.kt)("p",null,"land last merge into development :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# development\n$ git checkout development\n$ git rebase release-beta-1.2.1\n# use rebase instead of merge\n")),(0,i.kt)("p",null,"These step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit."),(0,i.kt)("p",null,"Now we are really done and the prod release branch may be removed, since we don\u2019t need it anymore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch -d release-1.2.1\n# delete branch \n")),(0,i.kt)("h3",{id:"hotfix-branches"},"Hotfix branches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May branch off from:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"production or staging\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Must merge back into:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# from prod\nproduction & development\n\n#from staging\nstaging & development\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Branch naming convention:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# from prod\nhotfix-[nextVersionNumber]\n# from staging\nhotfix-beta-[nextVersionNumber]\n\n# example:\nhotfix-3.2.3\nhotfix-beta-3.2.3\n")),(0,i.kt)("p",null,"Maintenance or \u201chotfix\u201d branches are used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop. This is the only branch that should fork directly off of ",(0,i.kt)("inlineCode",{parentName:"p"},"production"),". As soon as the fix is complete, it should be merged into both ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"development"),", and main should be tagged with an updated version number."),(0,i.kt)("h4",{id:"creating-a-production-hotfix--branch"},"Creating a production hotfix  branch"),(0,i.kt)("p",null,"Hotfix branches are created from the ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," branch. For example, say version 1.2.1 is the current production release running live and causing troubles due to a severe bug so the next version is 1.2.2 because it is patch update. But changes on develop are yet unstable. We may then branch off a hotfix branch and start fixing the problem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ git checkout -b hotfix-1.2.2 production\n\n# modified your version on project and others config manually or using script then commit\n\n$ git commit -a -m "LearningHub v1.2.2 b39"\n# comment must follow this pattern : "[AppName] v[versionNumber] b[buildNumber]"\n')),(0,i.kt)("p",null,"Then, fix the bug and commit the fix in one or more separate commits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# example: \n$ git commit -a -m "Fixed severe production problem"\n')),(0,i.kt)("h4",{id:"finishing-a-production-hotfix-branch"},"Finishing a production hotfix branch"),(0,i.kt)("p",null,"Merge into production first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout production\n# Switched to branch 'production'\n\n$ git rebase hotfix-1.2.2\n# use rebase instead of merge\n\n# add tag with following pattern : v[versionNumber]-b[buildNumber]\n$ git tag -a v1.2.2-b39\n")),(0,i.kt)("p",null,"then merge into development :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout development\n# Switched to branch 'development'\n\n$ git rebase hotfix-1.2.2\n# use rebase instead of merge\n")),(0,i.kt)("p",null,"This step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit."),(0,i.kt)("p",null,"The one exception to the rule here is that, ",(0,i.kt)("inlineCode",{parentName:"p"},"when a production release branch currently exists, the hotfix changes need to be merged into that release branch"),", instead of development. Back-merging the bugfix into the release branch will eventually result in the bugfix being merged into development too."),(0,i.kt)("p",null,"Finally, remove the temporary branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch -d hotfix-1.2.2\n# delete branch \n")),(0,i.kt)("h4",{id:"creating-a-staging-hotfix--branch"},"Creating a staging hotfix  branch"),(0,i.kt)("p",null,"Hotfix branches are created from the ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," branch. For example, say version 1.2.1 is the current production release running live and causing troubles due to a severe bug so the next version is 1.2.2 because it is patch update. But changes on develop are yet unstable. We may then branch off a hotfix branch and start fixing the problem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ git checkout -b hotfix-beta-1.2.2 staging\n\n# modified your version on project and others config manually or using script then commit\n\n$ git commit -a -m "Beta LearningHub v1.2.2 b39"\n# comment must follow this pattern : "[AppName] v[versionNumber] b[buildNumber]"\n')),(0,i.kt)("p",null,"Then, fix the bug and commit the fix in one or more separate commits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# example: \n$ git commit -a -m "Fixed severe staging problem"\n')),(0,i.kt)("h4",{id:"finishing-a-staging-hotfix-branch"},"Finishing a staging hotfix branch"),(0,i.kt)("p",null,"Merge into staging first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout staging\n# Switched to branch 'staging'\n\n$ git rebase hotfix-beta-1.2.2\n# use rebase instead of merge\n\n# without tag\n")),(0,i.kt)("p",null,"then merge into development :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout development\n# Switched to branch 'development'\n\n$ git rebase hotfix-beta-1.2.2\n# use rebase instead of merge\n")),(0,i.kt)("p",null,"This step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit."),(0,i.kt)("p",null,"Finally, remove the temporary branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch -d hotfix-beta-1.2.2\n# delete branch \n")),(0,i.kt)("h2",{id:"git-bash"},"Git Bash"),(0,i.kt)("p",null,"There are some git operation that usually used to manage repository on mobile project, so that the repository is neater. You can see ",(0,i.kt)("a",{parentName:"p",href:"/docs/repository/git-bash"},"git bash here"),"."))}h.isMDXComponent=!0},9093:function(e,t,n){t.Z=n.p+"assets/images/gitflow-25c6e7814e5e7b59056f39032f17991a.png"}}]);