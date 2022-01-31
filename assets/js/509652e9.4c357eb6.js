"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2836],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9655:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:42},l="User Transforms",u={unversionedId:"authenticate/user-transforms",id:"authenticate/user-transforms",isDocsHomePage:!1,title:"User Transforms",description:"A user transform allows to perform the following one a user passed",source:"@site/docs/authenticate/42-user-transforms.md",sourceDirName:"authenticate",slug:"/authenticate/user-transforms",permalink:"/docs/authenticate/user-transforms",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/42-user-transforms.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42},sidebar:"tutorialSidebar",previous:{title:"Authorization Cookie",permalink:"/docs/authenticate/auth-cookie"},next:{title:"Usage Examples",permalink:"/docs/authenticate/usage-examples"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-transforms"},"User Transforms"),(0,o.kt)("p",null,"A user transform allows to perform the following one a user passed\nauthentication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add/remove user roles"),(0,o.kt)("li",{parentName:"ul"},"add link to UI portal page"),(0,o.kt)("li",{parentName:"ul"},"require multi-factor authentication (MFA/2FA)"),(0,o.kt)("li",{parentName:"ul"},"require accepting term and conditions"),(0,o.kt)("li",{parentName:"ul"},"block/deny issuing a token")),(0,o.kt)("p",null,"The following transform matches ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," field and grants ",(0,o.kt)("inlineCode",{parentName:"p"},"authp/viewer")," role:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    exact match sub github.com/greenpau\n    action add role authp/viewer\n  }\n")),(0,o.kt)("p",null,"The following transform, in addition to the above adds a link to a user's\nportal page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  transform user {\n    exact match sub github.com/greenpau\n    action add role authp/viewer\n    ui link "Caddy Version" /version icon "las la-code-branch"\n  }\n')),(0,o.kt)("p",null,"The following transform requires to pass multi-factor authentication when the\nauthenticated user's email is ",(0,o.kt)("inlineCode",{parentName:"p"},"webadmin@localdomain.local"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    match email webadmin@localdomain.local\n    require mfa\n  }\n")),(0,o.kt)("p",null,"The following transform adds role ",(0,o.kt)("inlineCode",{parentName:"p"},"verified")," to Facebook-authenticated user\nwith id of ",(0,o.kt)("inlineCode",{parentName:"p"},"123456789"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    exact match sub 123456789\n    exact match origin facebook\n    action add role verified\n  }\n")),(0,o.kt)("p",null,"The following transform blocks a user with email ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymous@badactor.com"),"\nfrom getting authenticated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    match email anonymous@badactor.com\n    block\n  }\n")),(0,o.kt)("p",null,"The following transform adds the role ",(0,o.kt)("inlineCode",{parentName:"p"},"contoso_users")," to users with an email\naddress from the contoso.com domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    suffix match email @contoso.com\n    add role contoso_users\n  }\n")))}m.isMDXComponent=!0}}]);