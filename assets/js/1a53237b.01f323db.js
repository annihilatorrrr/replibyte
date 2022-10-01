"use strict";(self.webpackChunkreplibyte=self.webpackChunkreplibyte||[]).push([[264],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9605:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:6},s="Datastores",c={unversionedId:"datastores",id:"datastores",title:"Datastores",description:"Replibyte supports multiple datastores like AWS S3, GCP Cloud Storage (any other S3 compatible service), and your local disk.",source:"@site/docs/datastores.mdx",sourceDirName:".",slug:"/datastores",permalink:"/docs/datastores",editUrl:"https://github.com/Qovery/replibyte/tree/main/website/docs/datastores.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/docs/databases"},next:{title:"Transformers",permalink:"/docs/transformers"}},p={},u=[{value:"AWS S3",id:"aws-s3",level:2},{value:"Generate API Keys",id:"generate-api-keys",level:3},{value:"Replibyte configuration",id:"replibyte-configuration",level:3},{value:"GCP Cloud Storage",id:"gcp-cloud-storage",level:2},{value:"Generate API Keys",id:"generate-api-keys-1",level:3},{value:"Create bucket",id:"create-bucket",level:3},{value:"Replibyte configuration",id:"replibyte-configuration-1",level:3},{value:"Other S3 compatible",id:"other-s3-compatible",level:2},{value:"Local disk",id:"local-disk",level:2},{value:"Create a directory",id:"create-a-directory",level:3},{value:"Replibyte configuration",id:"replibyte-configuration-2",level:3},{value:"Add another datastore",id:"add-another-datastore",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datastores"},"Datastores"),(0,o.kt)("p",null,"Replibyte supports multiple datastores like AWS S3, GCP Cloud Storage (any other S3 compatible service), and your local disk."),(0,o.kt)("h2",{id:"aws-s3"},"AWS S3"),(0,o.kt)("p",null,"You can use the default ways of configuring AWS credentials, but if you need to specify customized credentials or a profile\nto use you can do so via the datastore configuration."),(0,o.kt)("h3",{id:"generate-api-keys"},"Generate API Keys"),(0,o.kt)("p",null,"To generate your API keys:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2673).Z,width:"1456",height:"557"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in into your AWS console")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"IAM")," or search for ",(0,o.kt)("strong",{parentName:"p"},"IAM"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Users")," page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Add users"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a user with "',(0,o.kt)("strong",{parentName:"p"},"Access Key - Programmatic Access"),'"\n',(0,o.kt)("img",{src:a(3313).Z,width:"1453",height:"829"})))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Restrict access as much as possible. Replibyte just need write/read access within a dedicated bucket."))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Set the permissions you need for this user.\n",(0,o.kt)("img",{src:a(165).Z,width:"1451",height:"549"}))),(0,o.kt)("p",null,"Here's an example IAM Policy for a user to be able to read/write to a specific bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "s3:Get*",\n                "s3:List*",\n                "s3:Put*"\n            ],\n            "Resource": [\n                "arn:aws:s3:::your-bucket-name-here",\n                "arn:aws:s3:::your-bucket-name-here/*"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("strong",{parentName:"li"},"Access key")," and the ",(0,o.kt)("strong",{parentName:"li"},"Secret"))),(0,o.kt)("h3",{id:"replibyte-configuration"},"Replibyte configuration"),(0,o.kt)("p",null,"Here is the datastore configuration to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ndatastore:\n  aws:\n    bucket: <your_bucket>\n    profile: <your_profile> # optional\n    region: <your_region> # optional\n    credentials: # optional\n      access_key_id: XXX\n      secret_access_key: XXX\n      session_token: XXX # optional\n...\n")),(0,o.kt)("p",null,"You can omit the optional properties in which case the default configuration mechanisms will be used, like with the AWS CLI."),(0,o.kt)("h2",{id:"gcp-cloud-storage"},"GCP Cloud Storage"),(0,o.kt)("h3",{id:"generate-api-keys-1"},"Generate API Keys"),(0,o.kt)("p",null,"To generate your API keys compatible with the S3 protocol:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot to configure GCP cloud storage",src:a(2651).Z,width:"1174",height:"1354"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in into your GCP console"),(0,o.kt)("li",{parentName:"ol"},"Click on the Cloud Storage"),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"INTEROPERABILITY")," tab"),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"CREATE A KEY")),(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("strong",{parentName:"li"},"Access key")," and the ",(0,o.kt)("strong",{parentName:"li"},"Secret"))),(0,o.kt)("h3",{id:"create-bucket"},"Create bucket"),(0,o.kt)("p",null,"Replibyte does not create the bucket automatically for GCP Cloud Storage. You'll need to create it manually."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Do not turn on object "versioning".'))),(0,o.kt)("h3",{id:"replibyte-configuration-1"},"Replibyte configuration"),(0,o.kt)("p",null,"Here is the datastore configuration to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ndatastore:\n  gcp:\n    bucket: your-bucket-name\n    region: us-central1\n    access_key: $GS_ACCESS_KEY\n    secret: $GS_SECRET\n...\n")),(0,o.kt)("p",null,"You can find the GCP Cloud Storage bucket locations ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/locations"},"here"),"."),(0,o.kt)("h2",{id:"other-s3-compatible"},"Other S3 compatible"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"#aws-s3"},"AWS S3")," for the default S3 wire compatible protocol and the custom endpoint parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ndatastore:\n  aws:\n    bucket: <your_bucket>\n    region: <your_region>\n    credentials:\n      access_key_id: XXX\n      secret_access_key: XXX\n    endpoint:\n      custom: 'https://your-s3-compatible-endpoint'\n...\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"access_key_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"secret_access_key")," must be valid hash-based message authentication code (HMAC) keys. Refer to the service to use to get those keys."),(0,o.kt)("h2",{id:"local-disk"},"Local disk"),(0,o.kt)("h3",{id:"create-a-directory"},"Create a directory"),(0,o.kt)("p",null,"Replibyte does not create the directory automatically for you. You'll need to create it manually."),(0,o.kt)("p",null,"For example, you can create a directory by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir /data/replibyte\n")),(0,o.kt)("h3",{id:"replibyte-configuration-2"},"Replibyte configuration"),(0,o.kt)("p",null,"Here is the datastore configuration to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ndatastore:\n  local_disk:\n    dir: <your_directory_path>\n...\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dir")," must be a readable and writable directory to the user running ",(0,o.kt)("inlineCode",{parentName:"p"},"replibyte"),"."),(0,o.kt)("p",null,"So, to use our previously created ",(0,o.kt)("inlineCode",{parentName:"p"},"/data/replibyte")," directory, the datastore config must be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ndatastore:\n  local_disk:\n    dir: /data/replibyte\n...\n")),(0,o.kt)("h2",{id:"add-another-datastore"},"Add another datastore"),(0,o.kt)("p",null,"Do you need another datastore? Replibyte is extensible and any datastore can be supported. You are free to contribute by opening an issue or/and a pull request."),(0,o.kt)("p",null,"To contribute, please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing"},"contributing")," page."))}m.isMDXComponent=!0},2673:function(e,t,a){t.Z=a.p+"assets/images/01-43002d5e0dbd74b67fd657636323a24c.png"},3313:function(e,t,a){t.Z=a.p+"assets/images/02-71021e2d7737e2e72839f00cf6e3600a.png"},165:function(e,t,a){t.Z=a.p+"assets/images/03-f3c2100a77728283c67299d12e2568f1.png"},2651:function(e,t,a){t.Z=a.p+"assets/images/01-1150dd3d688210f6b89b885967553e5c.jpg"}}]);