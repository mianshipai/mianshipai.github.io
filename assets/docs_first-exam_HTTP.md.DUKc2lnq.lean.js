import{_ as e,c as t,a2 as r,o as h}from"./chunks/framework.YPpNXepj.js";const f=JSON.parse('{"title":"HTTP 网络请求","description":"","frontmatter":{},"headers":[],"relativePath":"docs/first-exam/HTTP.md","filePath":"docs/first-exam/HTTP.md"}'),o={name:"docs/first-exam/HTTP.md"};function i(l,a,s,n,c,d){return h(),t("div",null,a[0]||(a[0]=[r('<h1 id="http-网络请求" tabindex="-1">HTTP 网络请求 <a class="header-anchor" href="#http-网络请求" aria-label="Permalink to &quot;HTTP 网络请求&quot;">​</a></h1><p>HTTP 和 Ajax 是前后端沟通的桥梁，面试重点考察，无论工作经验长短。</p><h3 id="tcp-是如何建立连接的-三次握手-四次挥手" tabindex="-1">TCP 是如何建立连接的，三次握手，四次挥手 <a class="header-anchor" href="#tcp-是如何建立连接的-三次握手-四次挥手" aria-label="Permalink to &quot;TCP 是如何建立连接的，三次握手，四次挥手&quot;">​</a></h3><h2 id="http-几个版本的区别" tabindex="-1">HTTP 几个版本的区别 <a class="header-anchor" href="#http-几个版本的区别" aria-label="Permalink to &quot;HTTP 几个版本的区别&quot;">​</a></h2><h2 id="http-常见的状态码" tabindex="-1">HTTP 常见的状态码 <a class="header-anchor" href="#http-常见的状态码" aria-label="Permalink to &quot;HTTP 常见的状态码&quot;">​</a></h2><h2 id="http-常见-header" tabindex="-1">HTTP 常见 Header <a class="header-anchor" href="#http-常见-header" aria-label="Permalink to &quot;HTTP 常见 Header&quot;">​</a></h2><h2 id="url-包含哪些部分" tabindex="-1">URL 包含哪些部分？ <a class="header-anchor" href="#url-包含哪些部分" aria-label="Permalink to &quot;URL 包含哪些部分？&quot;">​</a></h2><h2 id="ajax-fetch-axios-三者有什么区别" tabindex="-1">Ajax Fetch Axios 三者有什么区别？ <a class="header-anchor" href="#ajax-fetch-axios-三者有什么区别" aria-label="Permalink to &quot;Ajax Fetch Axios 三者有什么区别？&quot;">​</a></h2><h2 id="fetch-和-xmlhttprequest-有什么区别" tabindex="-1">Fetch 和 XMLHTTPRequest 有什么区别？ <a class="header-anchor" href="#fetch-和-xmlhttprequest-有什么区别" aria-label="Permalink to &quot;Fetch 和 XMLHTTPRequest 有什么区别？&quot;">​</a></h2><h2 id="什么是-restful-api" tabindex="-1">什么是 Restful API ？ <a class="header-anchor" href="#什么是-restful-api" aria-label="Permalink to &quot;什么是 Restful API ？&quot;">​</a></h2><h2 id="什么是-graphql" tabindex="-1">什么是 GraphQL ？ <a class="header-anchor" href="#什么是-graphql" aria-label="Permalink to &quot;什么是 GraphQL ？&quot;">​</a></h2><h2 id="如何理解-cookie" tabindex="-1">如何理解 cookie <a class="header-anchor" href="#如何理解-cookie" aria-label="Permalink to &quot;如何理解 cookie&quot;">​</a></h2><h2 id="为何现代浏览器都禁用第三方-cookie" tabindex="-1">为何现代浏览器都禁用第三方 cookie <a class="header-anchor" href="#为何现代浏览器都禁用第三方-cookie" aria-label="Permalink to &quot;为何现代浏览器都禁用第三方 cookie&quot;">​</a></h2><h2 id="如何理解-session" tabindex="-1">如何理解 Session ？ <a class="header-anchor" href="#如何理解-session" aria-label="Permalink to &quot;如何理解 Session ？&quot;">​</a></h2><h2 id="什么是-jwt-描述它的工作过程" tabindex="-1">什么是 JWT 描述它的工作过程 <a class="header-anchor" href="#什么是-jwt-描述它的工作过程" aria-label="Permalink to &quot;什么是 JWT 描述它的工作过程&quot;">​</a></h2><h2 id="jwt-如何自动更新-token" tabindex="-1">JWT 如何自动更新 token ？ <a class="header-anchor" href="#jwt-如何自动更新-token" aria-label="Permalink to &quot;JWT 如何自动更新 token ？&quot;">​</a></h2><h2 id="什么是-sso-单点登录-描述它的工作过程" tabindex="-1">什么是 SSO 单点登录，描述它的工作过程 <a class="header-anchor" href="#什么是-sso-单点登录-描述它的工作过程" aria-label="Permalink to &quot;什么是 SSO 单点登录，描述它的工作过程&quot;">​</a></h2><h2 id="什么是跨域-如何实现跨域通讯" tabindex="-1">什么是跨域？如何实现跨域通讯？ <a class="header-anchor" href="#什么是跨域-如何实现跨域通讯" aria-label="Permalink to &quot;什么是跨域？如何实现跨域通讯？&quot;">​</a></h2><h2 id="http-请求跨域时为何要发送-options-请求" tabindex="-1">HTTP 请求跨域时为何要发送 options 请求 <a class="header-anchor" href="#http-请求跨域时为何要发送-options-请求" aria-label="Permalink to &quot;HTTP 请求跨域时为何要发送 options 请求&quot;">​</a></h2><h2 id="简述浏览器的缓存策略" tabindex="-1">简述浏览器的缓存策略 <a class="header-anchor" href="#简述浏览器的缓存策略" aria-label="Permalink to &quot;简述浏览器的缓存策略&quot;">​</a></h2><h2 id="什么是图片防盗链-如何实现" tabindex="-1">什么是图片防盗链，如何实现？ <a class="header-anchor" href="#什么是图片防盗链-如何实现" aria-label="Permalink to &quot;什么是图片防盗链，如何实现？&quot;">​</a></h2><h2 id="简述-https-加密过程" tabindex="-1">简述 HTTPS 加密过程 <a class="header-anchor" href="#简述-https-加密过程" aria-label="Permalink to &quot;简述 HTTPS 加密过程&quot;">​</a></h2><h2 id="移动端-h5-如何抓包" tabindex="-1">移动端 H5 如何抓包？ <a class="header-anchor" href="#移动端-h5-如何抓包" aria-label="Permalink to &quot;移动端 H5 如何抓包？&quot;">​</a></h2><h2 id="script-标签的-defer-和-async-有什么区别" tabindex="-1">script 标签的 defer 和 async 有什么区别 <a class="header-anchor" href="#script-标签的-defer-和-async-有什么区别" aria-label="Permalink to &quot;script 标签的 defer 和 async 有什么区别&quot;">​</a></h2><h2 id="prefetch-和-dns-prefetch-分别是什么" tabindex="-1">prefetch 和 dns-prefetch 分别是什么 <a class="header-anchor" href="#prefetch-和-dns-prefetch-分别是什么" aria-label="Permalink to &quot;prefetch 和 dns-prefetch 分别是什么&quot;">​</a></h2><h2 id="websocket-和-http-协议有什么区别" tabindex="-1">WebSocket 和 HTTP 协议有什么区别 <a class="header-anchor" href="#websocket-和-http-协议有什么区别" aria-label="Permalink to &quot;WebSocket 和 HTTP 协议有什么区别&quot;">​</a></h2><h2 id="如何上传文件-使用-fetch-或者-axios" tabindex="-1">如何上传文件？使用 fetch 或者 axios <a class="header-anchor" href="#如何上传文件-使用-fetch-或者-axios" aria-label="Permalink to &quot;如何上传文件？使用 fetch 或者 axios&quot;">​</a></h2><h2 id="如何上传大文件" tabindex="-1">如何上传大文件？ <a class="header-anchor" href="#如何上传大文件" aria-label="Permalink to &quot;如何上传大文件？&quot;">​</a></h2><p>分片上传，断点续传，秒传</p><h2 id="如何实现图片懒加载" tabindex="-1">如何实现图片懒加载？ <a class="header-anchor" href="#如何实现图片懒加载" aria-label="Permalink to &quot;如何实现图片懒加载？&quot;">​</a></h2><h2 id="在网络层面可做哪些性能优化" tabindex="-1">在网络层面可做哪些性能优化？ <a class="header-anchor" href="#在网络层面可做哪些性能优化" aria-label="Permalink to &quot;在网络层面可做哪些性能优化？&quot;">​</a></h2>',31)]))}const q=e(o,[["render",i]]);export{f as __pageData,q as default};
