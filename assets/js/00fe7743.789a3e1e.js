"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9901],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},406:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],p={},o="Azure Active Directory",u={unversionedId:"authenticate/saml/azure",id:"authenticate/saml/azure",title:"Azure Active Directory",description:"Azure Active Directory supports Office 365 Applications.",source:"@site/docs/authenticate/saml/20-azure.md",sourceDirName:"authenticate/saml",slug:"/authenticate/saml/azure",permalink:"/docs/authenticate/saml/azure",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/saml/20-azure.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SAML Overview",permalink:"/docs/authenticate/saml/saml"},next:{title:"Jumpcloud SAML Integration",permalink:"/docs/authenticate/saml/jumpcloud"}},s={},c=[{value:"Azure AD SAML Configuration",id:"azure-ad-saml-configuration",level:2},{value:"Set Up Azure AD Application",id:"set-up-azure-ad-application",level:2},{value:"Configure SAML Authentication",id:"configure-saml-authentication",level:2},{value:"Azure AD IdP Metadata and Certificate",id:"azure-ad-idp-metadata-and-certificate",level:2},{value:"User Interface Options",id:"user-interface-options",level:2},{value:"Development Notes",id:"development-notes",level:2}],d={toc:c};function m(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"azure-active-directory"},"Azure Active Directory"),(0,i.kt)("p",null,"Azure Active Directory supports Office 365 Applications."),(0,i.kt)("h2",{id:"azure-ad-saml-configuration"},"Azure AD SAML Configuration"),(0,i.kt)("p",null,"The Azure SAML identity provider configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      saml identity provider azure {\n          realm azure\n          driver azure\n          idp_metadata_location /etc/gatekeeper/auth/idp/azure_ad_app_metadata.xml\n          idp_sign_cert_location /etc/gatekeeper/auth/idp/azure_ad_app_signing_cert.pem\n          tenant_id "1b9e886b-8ff2-4378-b6c8-6771259a5f51"\n          application_id "623cae7c-e6b2-43c5-853c-2059c9b2cb58"\n          application_name "My Gatekeeper"\n          entity_id "urn:caddy:mygatekeeper"\n          acs_url https://mygatekeeper/auth/saml/azure\n          acs_url https://mygatekeeper.local/auth/saml/azure\n          acs_url https://192.168.10.10:3443/auth/saml/azure\n          acs_url https://localhost:3443/auth/saml/azure\n      }\n')),(0,i.kt)("p",null,"The plugin supports the following parameters for Azure Active\nDirectory (Office 365) applications:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Parameter Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"idp_metadata_location")),(0,i.kt)("td",{parentName:"tr",align:null},"The url or path to Azure IdP Metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"idp_sign_cert_location")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to Azure IdP Signing Certificate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tenant_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Azure Tenant ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"application_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Azure Application ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"application_name")),(0,i.kt)("td",{parentName:"tr",align:null},"Azure Application Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"entity_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Azure Application Identifier (Entity ID)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"acs_url")),(0,i.kt)("td",{parentName:"tr",align:null},"Assertion Consumer Service URLs")))),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"acs_url")," directive to list all URLs the users of the application\ncan reach it at. One URL per line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  acs_url https://mygatekeeper/auth/saml/azure\n  acs_url https://mygatekeeper.local/auth/saml/azure\n  acs_url https://192.168.10.10:3443/auth/saml/azure\n  acs_url https://localhost:3443/auth/saml/azure\n")),(0,i.kt)("h2",{id:"set-up-azure-ad-application"},"Set Up Azure AD Application"),(0,i.kt)("p",null,'In Azure AD, you will have an application, e.g. "My Gatekeeper".'),(0,i.kt)("p",null,"The application is a Caddy web server running on port 3443 on\n",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),'. This example meant to emphasize that the authorization\nis asynchronious. That is when a user clicks on "My Gatekeeper" icon\nin Office 365, the browser takes the user to a sign in page\nat URL ',(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:3443/saml"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App Registration - Overview",src:a(5528).Z,width:"1423",height:"585"})),(0,i.kt)("p",null,"The Application Identifiers are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application (client) ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"623cae7c-e6b2-43c5-853c-2059c9b2cb58")),(0,i.kt)("li",{parentName:"ul"},"Directory (tenant) ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"1b9e886b-8ff2-4378-b6c8-6771259a5f51")),(0,i.kt)("li",{parentName:"ul"},"Object ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"515d2e8b-7548-413f-abee-a23ece1ea576"))),(0,i.kt)("p",null,'The "Branding" page configures "Home Page URL".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App Registration - Branding",src:a(4525).Z,width:"963",height:"405"})),(0,i.kt)("p",null,'For demostration purposes, we will create the following "Roles" in the application:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Azure Role Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Role Name in SAML Assertion")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Viewer"),(0,i.kt)("td",{parentName:"tr",align:null},"AzureAD_Viewer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Editor"),(0,i.kt)("td",{parentName:"tr",align:null},"AzureAD_Editor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Administrator"),(0,i.kt)("td",{parentName:"tr",align:null},"AzureAD_Administrator")))),(0,i.kt)("p",null,'Use "Manifest" tab to add roles in the manifest via ',(0,i.kt)("inlineCode",{parentName:"p"},"appRoles")," key:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App Registration - Manifest - User Roles",src:a(3704).Z,width:"815",height:"856"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "allowedMemberTypes": [\n    "User"\n  ],\n  "description": "Administrator",\n  "displayName": "Administrator",\n  "id": "91287df2-7028-4d5f-b5ae-5d489ba217dd",\n  "isEnabled": true,\n  "lang": null,\n  "origin": "Application",\n  "value": "AzureAD_Administrator"\n},\n{\n  "allowedMemberTypes": [\n    "User"\n  ],\n  "description": "Editor",\n  "displayName": "Editor",\n  "id": "d482d827-1757-4f60-9bea-021c10037674",\n  "isEnabled": true,\n  "lang": null,\n  "origin": "Application",\n  "value": "AzureAD_Editor"\n},\n{\n  "allowedMemberTypes": [\n    "User"\n  ],\n  "description": "Viewer",\n  "displayName": "Viewer",\n  "id": "c69f7abd-0a88-401e-b515-92d74b6fff2f",\n  "isEnabled": true,\n  "lang": null,\n  "origin": "Application",\n  "value": "AzureAD_Viewer"\n}\n')),(0,i.kt)("p",null,"After, we added the roles, we could assign any of the roles to a user:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App - Users and Groups - Add User",src:a(6364).Z,width:"1092",height:"427"})),(0,i.kt)("p",null,"The app is now available to the provisioned users in Office 365:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Office 365 - Access Application",src:a(6032).Z,width:"1375",height:"390"})),(0,i.kt)("h2",{id:"configure-saml-authentication"},"Configure SAML Authentication"),(0,i.kt)("p",null,'Go to "Enterprise Application" and browse to "My Gatekeeper" application.'),(0,i.kt)("p",null,'There, click "Single Sign-On" and select "SAML" as the authentication method.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App - Enable SAML",src:a(8401).Z,width:"1642",height:"595"})),(0,i.kt)("p",null,'Next, in the "Set up Single Sign-On with SAML", provide the following\n"Basic SAML Configuration":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identifier (Entity ID): ",(0,i.kt)("inlineCode",{parentName:"li"},"urn:caddy:mygatekeeper")),(0,i.kt)("li",{parentName:"ul"},"Reply URL (Assertion Consumer Service URL): ",(0,i.kt)("inlineCode",{parentName:"li"},"https://localhost:3443/auth/saml/azure"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App - Basic SAML Configuration",src:a(6316).Z,width:"1032",height:"591"})),(0,i.kt)("p",null,'Under "User Attributes & Claims", add the following claims to the list of\ndefault claims:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Namespace")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Claim name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Value")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://claims.contoso.com/SAML/Attributes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RoleSessionName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user.userprincipalname"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://claims.contoso.com/SAML/Attributes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Role")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user.assignedroles"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://claims.contoso.com/SAML/Attributes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MaxSessionDuration")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3600"))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App - User Attributes and Claims",src:a(4962).Z,width:"1588",height:"1056"})),(0,i.kt)("p",null,"Next, record the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App Federation Metadata Url"),(0,i.kt)("li",{parentName:"ul"},"Login URL")),(0,i.kt)("p",null,"Further, download:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Federation Metadata XML"),(0,i.kt)("li",{parentName:"ul"},"Certificate (Base64 and Raw)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App - SAML Signing Certificate",src:a(772).Z,width:"1286",height:"842"})),(0,i.kt)("h2",{id:"azure-ad-idp-metadata-and-certificate"},"Azure AD IdP Metadata and Certificate"),(0,i.kt)("p",null,"The following command downloads IdP metadata file for Azure AD Tenant with\nID ",(0,i.kt)("inlineCode",{parentName:"p"},"1b9e886b-8ff2-4378-b6c8-6771259a5f51"),". Please note the ",(0,i.kt)("inlineCode",{parentName:"p"},"xmllint")," utility\nis a part of ",(0,i.kt)("inlineCode",{parentName:"p"},"libxml2")," library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/gatekeeper/auth/saml/idp/\ncurl -s -L -o /tmp/federationmetadata.xml https://login.microsoftonline.com/1b9e886b-8ff2-4378-b6c8-6771259a5f51/federationmetadata/2007-06/federationmetadata.xml\nsudo mkdir -p /etc/gatekeeper/auth/saml/idp/\ncat /tmp/federationmetadata.xml | xmllint --format - | sudo tee /etc/gatekeeper/auth/saml/idp/azure_ad_app_metadata.xml\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/gatekeeper/auth/saml/idp/azure_ad_app_metadata.xml")," contains IdP metadata.\nThis file contains the data necessary to verify the SAML claims received by this\nservice and signed by Azure AD. The ",(0,i.kt)("inlineCode",{parentName:"p"},"idp_metadata")," argument is being used to\npass the location of IdP metadata."),(0,i.kt)("p",null,'Next, download the "Certificate (Base64)" and store it in\n',(0,i.kt)("inlineCode",{parentName:"p"},"/etc/gatekeeper/auth/saml/idp/azure_ad_app_signing_cert.pem"),"."),(0,i.kt)("h2",{id:"user-interface-options"},"User Interface Options"),(0,i.kt)("p",null,"First option is a login button on the login server web page. Once Azure AD has\nbeen enabled, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/saml/azure"),' page will have "Sign in with Office 365" button'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure AD App - Login with Azure Button",src:a(1418).Z,width:"914",height:"266"})),(0,i.kt)("p",null,"Second option is Office 365 applications. When a user click on the\napplication's icon in Office 365, the user gets redirected to the web\nserver by Office 365."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Office 365 - Access Application",src:a(6032).Z,width:"1375",height:"390"})),(0,i.kt)("p",null,"The URL is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:3443/auth/saml/azure"),"."),(0,i.kt)("h2",{id:"development-notes"},"Development Notes"),(0,i.kt)("p",null,"The below are the headers of the redirected ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),' request that the user\'s\nbrowser makes upon clicking "My Gatekeeper" application:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Method: POST\nURL: /auth/saml/azure\nProtocol: HTTP/2.0\nHost: localhost:3443\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\nAccept-Encoding: gzip, deflate, br\nAccept-Language: en-US,en;q=0.9,ru;q=0.8\nCache-Control: max-age=0\nContent-Length: 7561\nContent-Type: application/x-www-form-urlencoded\nOrigin: https://login.microsoftonline.com\nReferer: https://login.microsoftonline.com/\nSec-Fetch-Mode: navigate\nSec-Fetch-Site: cross-site\nUpgrade-Insecure-Requests: 1\n")),(0,i.kt)("p",null,"The above redirect contains ",(0,i.kt)("inlineCode",{parentName:"p"},"login.microsoftonline.com")," in the request's\n",(0,i.kt)("inlineCode",{parentName:"p"},"Referer")," header. It is the trigger to perform SAML-based authorization."))}m.isMDXComponent=!0},6364:function(e,t,a){t.Z=a.p+"assets/images/azure_app_add_user-1f19881fe6d6abf9ec23cf5061f0176c.png"},4525:function(e,t,a){t.Z=a.p+"assets/images/azure_app_registration_branding-7c73477772c2491b2ec4f998c95db9f4.png"},5528:function(e,t,a){t.Z=a.p+"assets/images/azure_app_registration_overview-35c34125b59dc508d1fb8554f38ccd28.png"},3704:function(e,t,a){t.Z=a.p+"assets/images/azure_app_registration_user_roles-d088f32b06da193e5f4aeb06d993ee7f.png"},4962:function(e,t,a){t.Z=a.p+"assets/images/azure_app_saml_claims-ad72d6d2af25a4497e4e6125829a09e4.png"},8401:function(e,t,a){t.Z=a.p+"assets/images/azure_app_saml_enable-d0dfe13267af30178c1cef2324e34577.png"},6316:function(e,t,a){t.Z=a.p+"assets/images/azure_app_saml_id-9a78bd4df4619e00f1ae2082e7d3f901.png"},772:function(e,t,a){t.Z=a.p+"assets/images/azure_app_saml_other-c41ed80342c9439cd637bc73da5d0e4a.png"},6032:function(e,t,a){t.Z=a.p+"assets/images/azure_app_user_access-576cc284cb3f931f98c2a030031788fc.png"},1418:function(e,t,a){t.Z=a.p+"assets/images/login_with_azure_button-f68dd5b807c8eee483bc68a75e12f11b.png"}}]);