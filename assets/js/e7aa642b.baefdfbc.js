"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5972],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=i,f=p["".concat(l,".").concat(k)]||p[k]||d[k]||c;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,r=new Array(c);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<c;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(3117),i=n(102),c=(n(7294),n(3905)),r=["components"],o={},l="Keycloak",u={unversionedId:"authenticate/oauth/backend-oauth2-0011-keycloak",id:"authenticate/oauth/backend-oauth2-0011-keycloak",title:"Keycloak",description:"Find Keycloak integration example in the following Caddyfile.",source:"@site/docs/authenticate/oauth/81-backend-oauth2-0011-keycloak.md",sourceDirName:"authenticate/oauth",slug:"/authenticate/oauth/backend-oauth2-0011-keycloak",permalink:"/docs/authenticate/oauth/backend-oauth2-0011-keycloak",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/oauth/81-backend-oauth2-0011-keycloak.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ping Identity",permalink:"/docs/authenticate/oauth/backend-oauth2-0010-pingid"},next:{title:"AWS Cognito",permalink:"/docs/authenticate/oauth/backend-oauth2-0012-cognito"}},s={},d=[{value:"User and Group",id:"user-and-group",level:2},{value:"Realm",id:"realm",level:2},{value:"Client",id:"client",level:2},{value:"User Login",id:"user-login",level:2}],p={toc:d};function k(e){var t=e.components,o=(0,i.Z)(e,r);return(0,c.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"keycloak"},"Keycloak"),(0,c.kt)("p",null,"Find Keycloak integration example in the following ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/greenpau/caddy-auth-docs/blob/main/assets/conf/oauth/keycloak/Caddyfile"},(0,c.kt)("inlineCode",{parentName:"a"},"Caddyfile")),"."),(0,c.kt)("h2",{id:"user-and-group"},"User and Group"),(0,c.kt)("p",null,'First, create "Admin", "Editors", and "Viewer" groups under "Manager", "Groups".'),(0,c.kt)("p",null,'Next, create a new user under "Manager", "Users". As part of the process assign\nthe newly created groups to the user.'),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(6191).Z,width:"1228",height:"735"})),(0,c.kt)("p",null,'Then, click "View all users" and click on the ID of the newly created user:'),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(6821).Z,width:"873",height:"275"})),(0,c.kt)("p",null,'Browse to "Credentials" tab and set user password.'),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(6564).Z,width:"1068",height:"677"})),(0,c.kt)("p",null,"Test the login by the user. The URL is ",(0,c.kt)("inlineCode",{parentName:"p"},"https://keycloak/auth/realms/master/account/"),"."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(1773).Z,width:"617",height:"526"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(9322).Z,width:"1095",height:"426"})),(0,c.kt)("h2",{id:"realm"},"Realm"),(0,c.kt)("p",null,'Disable a number of providers under "Configure", "Realm Settings", "Keys", and "Providers".'),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(521).Z,width:"1394",height:"668"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(6114).Z,width:"1043",height:"593"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(2411).Z,width:"746",height:"593"})),(0,c.kt)("p",null,"At the end, you should have ",(0,c.kt)("inlineCode",{parentName:"p"},"rsa-generated")," provider only."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(6820).Z,width:"1150",height:"424"})),(0,c.kt)("h2",{id:"client"},"Client"),(0,c.kt)("p",null,"Add client configuration. See screenshots."),(0,c.kt)("p",null,'Set "Valid Redirect URIs" to your callback endpoint,\ne.g. ',(0,c.kt)("inlineCode",{parentName:"p"},"https://auth.myfiosgateway.com:8443/oauth2/keycloak/authorization-code-callback"),"."),(0,c.kt)("p",null,'Set "Base URL" to the authentication portal, e.g. ',(0,c.kt)("inlineCode",{parentName:"p"},"https://auth.myfiosgateway.com:8443/"),"."),(0,c.kt)("p",null,'The "well-known" configuration URL would be:'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"http://keycloak/auth/realms/{realm}/.well-known/openid-configuration\nhttps://keycloak.axi92.at/auth/realms/master/.well-known/openid-configuration\n")),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(5402).Z,width:"1184",height:"499"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(5155).Z,width:"860",height:"399"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(3822).Z,width:"1347",height:"897"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(3185).Z,width:"801",height:"341"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(7589).Z,width:"862",height:"320"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(4166).Z,width:"1031",height:"603"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(5611).Z,width:"588",height:"63"})),(0,c.kt)("p",null,"Confirm the configuration."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(5918).Z,width:"1055",height:"729"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(4678).Z,width:"1050",height:"520"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(4474).Z,width:"1058",height:"722"})),(0,c.kt)("h2",{id:"user-login"},"User Login"),(0,c.kt)("p",null,"The user's profile now has the new application."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(9632).Z,width:"1549",height:"401"})),(0,c.kt)("p",null,"The login to authentication portal will succeed."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Keycloak",src:n(8357).Z,width:"616",height:"829"})))}k.isMDXComponent=!0},8357:function(e,t,n){t.Z=n.p+"assets/images/keycloak_authenticated-b0b62dc5993d1627ab817ba7f8115538.png"},5918:function(e,t,n){t.Z=n.p+"assets/images/keycloak_client_config_1-d859819277b2a584349b8b5fa00f14e0.png"},4678:function(e,t,n){t.Z=n.p+"assets/images/keycloak_client_config_2-4c52ce26a98fd997d78d2ececb279ec7.png"},4474:function(e,t,n){t.Z=n.p+"assets/images/keycloak_client_config_3-21067f1623d597836c06f6dcc5e1f01e.png"},5402:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_client_1-0a172585c4f66a3adb1e69e8ebf6c259.png"},5155:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_client_2-45e344d276be718eeeada664f7548b29.png"},3822:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_client_3-766342c3cc2f8aa68701e0b8bb2829f3.png"},3185:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_client_4-68bc045e16b9d0e1b0bab99536a7fe77.png"},7589:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_client_5-2bee9d31ef6caa787fb560d546861ddc.png"},4166:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_client_6-46c1e5efebfb9f06376245737fbe0c7b.png"},5611:function(e,t){t.Z="data:image/png;base64,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"},6191:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_user-ff790442079d82770b8158d59732367b.png"},6821:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_user_1-7d6149be561181e5bc64eea7d8678854.png"},6564:function(e,t,n){t.Z=n.p+"assets/images/keycloak_new_user_2-5f175d790a0bb2303fc8a6511327f186.png"},521:function(e,t,n){t.Z=n.p+"assets/images/keycloak_realm_1-5f18630f4642f0bbbb5e84df8bd0277d.png"},6114:function(e,t,n){t.Z=n.p+"assets/images/keycloak_realm_2-415a4b0dde847c14c06e44ba25271ed0.png"},2411:function(e,t,n){t.Z=n.p+"assets/images/keycloak_realm_3-a48ac0fbdc3e5f896aab0ab6d46605f0.png"},6820:function(e,t,n){t.Z=n.p+"assets/images/keycloak_realm_4-c0827ca08abbb8a931395893665f70a7.png"},9322:function(e,t,n){t.Z=n.p+"assets/images/keycloak_user_dashboard-c40963c185d0519d05fb08e30497c467.png"},1773:function(e,t,n){t.Z=n.p+"assets/images/keycloak_user_login-5f4d1366bc95a59ed0783917cf0287f2.png"},9632:function(e,t,n){t.Z=n.p+"assets/images/keycloak_user_profile-e41195949a3c4ffed2c33c28d6c5d03f.png"}}]);