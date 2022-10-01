"use strict";(self.webpackChunkreplibyte=self.webpackChunkreplibyte||[]).push([[868],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},s="Installation",c={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Install on MacOSX",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/Qovery/replibyte/tree/main/website/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How Replibyte works",permalink:"/docs/how-replibyte-works"},next:{title:"Concepts",permalink:"/docs/getting-started/concepts"}},u={},p=[{value:"Telemetry",id:"telemetry",level:2},{value:"Collected data",id:"collected-data",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Install on MacOSX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap Qovery/replibyte\nbrew install replibyte\n")),(0,l.kt)("p",null,"  Or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Qovery/replibyte/releases"},"manually"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Install on Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# download latest replibyte archive for Linux\ncurl -s https://api.github.com/repos/Qovery/replibyte/releases/latest | \\\njq -r '.assets[].browser_download_url' | \\\ngrep -i 'linux-musl.tar.gz$' | wget -qi - && \\\n\n# unarchive\ntar zxf *.tar.gz\n\n# make replibyte executable\nchmod +x replibyte\n\n# make it accessible from everywhere\nmv replibyte /usr/local/bin/\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Install on Windows"),(0,l.kt)("p",null,"  Download ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Qovery/replibyte/releases"},"the latest Windows release")," and install it.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Install from source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/Qovery/replibyte.git && cd replibyte\n\n# Install cargo\n# visit: https://doc.rust-lang.org/cargo/getting-started/installation.html\n\n# Build with cargo\ncargo build --release\n\n# Run RepliByte\n./target/release/replibyte -h\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Run replibyte with Docker"),(0,l.kt)("p",null,"  This example assume you have a configuration file named replibyte.yaml in the directory you're running the docker command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -it --rm --name replibyte \\\n  -v "$(pwd)/replibyte.yaml:/replibyte.yaml:ro" \\\n  ghcr.io/qovery/replibyte --config replibyte.yaml\n')),(0,l.kt)("p",null,"  If you're using the ",(0,l.kt)("inlineCode",{parentName:"p"},"local_disk")," datastore, you must mount a volume by adding ",(0,l.kt)("inlineCode",{parentName:"p"},'-v "$(pwd)/my-datastore:/datastore"'),'.\nThis assumes that the "datastore" part of your config file is as follows:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"datastore:\n  local_disk:\n    dir: ./my-datastore\n"))),(0,l.kt)("h2",{id:"telemetry"},"Telemetry"),(0,l.kt)("p",null,"RepliByte collects anonymized data from users in order to improve our product. Feel free to inspect the\ncode ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Qovery/replibyte/blob/main/replibyte/src/telemetry.rs"},"here"),". This can be deactivated at any time, and any data that has already been collected can be deleted on\nrequest (hello+replibyte {at} qovery {dot} com)."),(0,l.kt)("h3",{id:"collected-data"},"Collected data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line parameters"),(0,l.kt)("li",{parentName:"ul"},"Options used (subset, transformer, compression) in the configuration file.")))}m.isMDXComponent=!0}}]);