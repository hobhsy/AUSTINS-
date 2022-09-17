"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4612],{4612:function(e,a,n){n.r(a),n(7378);var t=n(2682);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",o({components:a},n),(0,t.kt)("p",null,"Resolvers are created using the ",(0,t.kt)("inlineCode",{parentName:"p"},"enhanced-resolve")," package. The ",(0,t.kt)("inlineCode",{parentName:"p"},"Resolver"),"\nclass extends the ",(0,t.kt)("inlineCode",{parentName:"p"},"tapable")," class and uses ",(0,t.kt)("inlineCode",{parentName:"p"},"tapable")," to provide a few hooks.\nThe ",(0,t.kt)("inlineCode",{parentName:"p"},"enhanced-resolve")," package can be used directly to create new resolvers,\nhowever any ",(0,t.kt)("a",{href:"/api/node/#compiler-instance",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"compiler")," instance")," has a few resolver instances that can be\ntapped into."),(0,t.kt)("p",null,"Before reading on, make sure to have a look at the\n",(0,t.kt)("a",{href:"https://github.com/webpack/enhanced-resolve",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"enhanced-resolve"))," and ",(0,t.kt)("a",{href:"/api/plugins/#tapable",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"tapable"))," documentation."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"types",parentName:"h2"}),"Types",(0,t.kt)("a",{href:"#types","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"There are three types of built-in resolvers available on the ",(0,t.kt)("inlineCode",{parentName:"p"},"compiler")," class:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"normal"),": Resolves a module via an absolute or relative path."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"context"),": Resolves a module within a given context."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"loader"),": Resolves a webpack ",(0,t.kt)("a",{href:"/loaders",parentName:"li"},"loader"),".")),(0,t.kt)("p",null,"Depending on need, any one of these built-in resolvers, that are used by the ",(0,t.kt)("inlineCode",{parentName:"p"},"compiler"),",\ncan be customized via plugins:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"resolverFactory",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"resolver\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"for"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'[type]'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'name'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"resolver"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// you can tap into resolver.hooks now"),"\n    resolver",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"result",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"result"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," result",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Where ",(0,t.kt)("inlineCode",{parentName:"p"},"[type]")," is one of the three resolvers mentioned above."),(0,t.kt)("p",null,"See the ",(0,t.kt)("a",{href:"https://github.com/webpack/enhanced-resolve",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"enhanced-resolve")," documentation")," for a full list of hooks and their description."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"configuration-options",parentName:"h2"}),"Configuration Options",(0,t.kt)("a",{href:"#configuration-options","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"The resolvers mentioned above can also be customized via a configuration file\nwith the ",(0,t.kt)("a",{href:"/configuration/resolve/",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"resolve"))," or ",(0,t.kt)("a",{href:"/configuration/resolve/#resolveloader",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"resolveLoader"))," options. These options allow\nusers to change the resolving behavior through a variety of options including\nthrough resolve ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins"),"."),(0,t.kt)("p",null,"The resolver plugins, e.g. ",(0,t.kt)("a",{href:"https://github.com/shaketbaby/directory-named-webpack-plugin",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"DirectoryNamedPlugin")),", can be included\ndirectly in ",(0,t.kt)("inlineCode",{parentName:"p"},"resolve.plugins")," rather than using directly in ",(0,t.kt)("a",{href:"/configuration/plugins/#plugins",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"plugins")," configuration option"),"."),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"Note that the ",(0,t.kt)("inlineCode",{parentName:"p"},"resolve")," configuration affects the ",(0,t.kt)("inlineCode",{parentName:"p"},"normal")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"context")," resolvers while ",(0,t.kt)("inlineCode",{parentName:"p"},"resolveLoader")," is used to modify the ",(0,t.kt)("inlineCode",{parentName:"p"},"loader")," resolver.")))}p.isMDXComponent=!0,a.default=p}}]);