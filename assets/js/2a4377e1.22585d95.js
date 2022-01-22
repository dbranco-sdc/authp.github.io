"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[559],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),y=i,d=f["".concat(c,".").concat(y)]||f[y]||p[y]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6768:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={sidebar_position:4},c="Plugin Syntax",l={unversionedId:"authorize/syntax",id:"authorize/syntax",isDocsHomePage:!1,title:"Plugin Syntax",description:"",source:"@site/docs/authorize/syntax.md",sourceDirName:"authorize",slug:"/authorize/syntax",permalink:"/docs/authorize/syntax",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authorize/syntax.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Authorize Plugin Overview",permalink:"/docs/authorize/intro"},next:{title:"Getting Started",permalink:"/docs/authorize/getting-started"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugin-syntax"},"Plugin Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  security {\n    authorization policy <policy_name> {\n      crypto default token name <TOKEN_NAME>\n      crypto default token lifetime <SECONDS>\n\n      crypto key token name <TOKEN_NAME>\n      crypto key <ID> token name <TOKEN_NAME>\n\n      crypto key <verify|sign|sign-verify|auto> <SHARED_SECRET>\n      crypto key <verify|sign|sign-verify|auto> from env <ENV_VAR_WITH_KEY>\n\n      crypto key <ID> <verify|sign|sign-verify|auto> <SHARED_SECRET>\n      crypto key <ID> <verify|sign|sign-verify|auto> from <directory|file> <PATH>\n\n      crypto key <ID> <verify|sign|sign-verify|auto> from env <ENV_VAR_WITH_KEY>\n      crypto key <ID> <verify|sign|sign-verify|auto> from env <ENV_VAR_NAME> as <directory|file>\n\n      set auth url <path>\n      set forbidden url <path>\n      set token sources <value...>\n      set user identity <claim_field>\n      set redirect query parameter <value>\n      set redirect status <3xx>\n\n      disable auth redirect query\n      disable auth redirect\n\n      allow <field> <value...>\n      allow <field> <value...> with <get|post|put|patch|delete> to <uri>\n      allow <field> <value...> with <get|post|put|patch|delete>\n      allow <field> <value...> to <uri>\n\n      acl rule {\n        comment <value>\n        [exact|partial|prefix|suffix|regex|always] match <field> <value> ... <valueN>\n        [exact|partial|prefix|suffix|regex|always] match method <http_method_name>\n        [exact|partial|prefix|suffix|regex|always] match path <http_path_uri>\n        <allow|deny> [stop] [counter] [log <error|warn|info|debug>]\n      }\n\n      validate path acl\n      validate source address\n      validate bearer header\n\n      enable js redirect\n      enable strip token\n\n      inject headers with claims\n    }\n  }\n}\n")))}f.isMDXComponent=!0}}]);