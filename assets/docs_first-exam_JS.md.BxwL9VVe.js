import{_ as a,c as i,a0 as n,o as h}from"./chunks/framework.P9qPzDnn.js";const E=JSON.parse('{"title":"JS 基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"docs/first-exam/JS.md","filePath":"docs/first-exam/JS.md"}'),e={name:"docs/first-exam/JS.md"};function l(t,s,k,p,r,d){return h(),i("div",null,s[0]||(s[0]=[n(`<h1 id="js-基础知识" tabindex="-1">JS 基础知识 <a class="header-anchor" href="#js-基础知识" aria-label="Permalink to &quot;JS 基础知识&quot;">​</a></h1><p>JS 是前端开发的核心能力，面试重点考察，无论工作经验长短。</p><h2 id="了解哪些最新的-es-新特性" tabindex="-1">了解哪些最新的 ES 新特性？ <a class="header-anchor" href="#了解哪些最新的-es-新特性" aria-label="Permalink to &quot;了解哪些最新的 ES 新特性？&quot;">​</a></h2><h2 id="typeof-能判断哪些类型" tabindex="-1"><code>typeof</code> 能判断哪些类型 <a class="header-anchor" href="#typeof-能判断哪些类型" aria-label="Permalink to &quot;\`typeof\` 能判断哪些类型&quot;">​</a></h2><p>symbol bigInt</p><h2 id="和-有什么区别" tabindex="-1"><code>==</code> 和 <code>===</code> 有什么区别？ <a class="header-anchor" href="#和-有什么区别" aria-label="Permalink to &quot;\`==\` 和 \`===\` 有什么区别？&quot;">​</a></h2><h2 id="你熟悉哪些数组-api" tabindex="-1">你熟悉哪些数组 API ？ <a class="header-anchor" href="#你熟悉哪些数组-api" aria-label="Permalink to &quot;你熟悉哪些数组 API ？&quot;">​</a></h2><h2 id="值类型和引用类型的区别" tabindex="-1">值类型和引用类型的区别 <a class="header-anchor" href="#值类型和引用类型的区别" aria-label="Permalink to &quot;值类型和引用类型的区别&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 值类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 100</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引用类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.age) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 21</span></span></code></pre></div><h2 id="箭头函数和普通函数的区别" tabindex="-1">箭头函数和普通函数的区别 <a class="header-anchor" href="#箭头函数和普通函数的区别" aria-label="Permalink to &quot;箭头函数和普通函数的区别&quot;">​</a></h2><h2 id="什么时候不能使用箭头函数" tabindex="-1">什么时候不能使用箭头函数 <a class="header-anchor" href="#什么时候不能使用箭头函数" aria-label="Permalink to &quot;什么时候不能使用箭头函数&quot;">​</a></h2><h2 id="for-in-和-for-of-的区别" tabindex="-1">for...in 和 for...of 的区别 <a class="header-anchor" href="#for-in-和-for-of-的区别" aria-label="Permalink to &quot;for...in 和 for...of 的区别&quot;">​</a></h2><h2 id="js-原型和原型链" tabindex="-1">JS 原型和原型链 <a class="header-anchor" href="#js-原型和原型链" aria-label="Permalink to &quot;JS 原型和原型链&quot;">​</a></h2><h2 id="js-继承有集中方式" tabindex="-1">JS 继承有集中方式？ <a class="header-anchor" href="#js-继承有集中方式" aria-label="Permalink to &quot;JS 继承有集中方式？&quot;">​</a></h2><p>老旧的题目了，了解即可，现在都用 class extends 实现继承</p><h2 id="js-作用域和作用域链" tabindex="-1">JS 作用域和作用域链 <a class="header-anchor" href="#js-作用域和作用域链" aria-label="Permalink to &quot;JS 作用域和作用域链&quot;">​</a></h2><p>执行上下文</p><h2 id="js-自由变量-如何理解" tabindex="-1">JS 自由变量，如何理解 <a class="header-anchor" href="#js-自由变量-如何理解" aria-label="Permalink to &quot;JS 自由变量，如何理解&quot;">​</a></h2><h2 id="js-闭包-如何理解" tabindex="-1">JS 闭包，如何理解 <a class="header-anchor" href="#js-闭包-如何理解" aria-label="Permalink to &quot;JS 闭包，如何理解&quot;">​</a></h2><h2 id="同步和异步有什么区别-异步的意义是什么" tabindex="-1">同步和异步有什么区别？异步的意义是什么？ <a class="header-anchor" href="#同步和异步有什么区别-异步的意义是什么" aria-label="Permalink to &quot;同步和异步有什么区别？异步的意义是什么？&quot;">​</a></h2><h2 id="js-promise-有几种状态-如何变化" tabindex="-1">JS Promise 有几种状态？如何变化 <a class="header-anchor" href="#js-promise-有几种状态-如何变化" aria-label="Permalink to &quot;JS Promise 有几种状态？如何变化&quot;">​</a></h2><h2 id="js-promise-使用" tabindex="-1">JS Promise 使用 <a class="header-anchor" href="#js-promise-使用" aria-label="Permalink to &quot;JS Promise 使用&quot;">​</a></h2><h2 id="async-await-使用" tabindex="-1">async/await 使用 <a class="header-anchor" href="#async-await-使用" aria-label="Permalink to &quot;async/await 使用&quot;">​</a></h2><h2 id="js-异步执行顺序" tabindex="-1">JS 异步执行顺序 <a class="header-anchor" href="#js-异步执行顺序" aria-label="Permalink to &quot;JS 异步执行顺序&quot;">​</a></h2><p>执行以下代码，会输出什么？</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;async1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;async1 end&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;async2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script start&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;setTimeOut&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">async1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;promise&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;promise2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script end&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>答案</p><details class="details custom-block"><summary>Details</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>script start</span></span>
<span class="line"><span>async1</span></span>
<span class="line"><span>async2</span></span>
<span class="line"><span>promise</span></span>
<span class="line"><span>script end</span></span>
<span class="line"><span>async1 end</span></span>
<span class="line"><span>promise2</span></span>
<span class="line"><span>setTimeOut</span></span></code></pre></div></details><h2 id="宏任务和微任务的区别" tabindex="-1">宏任务和微任务的区别 <a class="header-anchor" href="#宏任务和微任务的区别" aria-label="Permalink to &quot;宏任务和微任务的区别&quot;">​</a></h2><h2 id="描述-event-loop-运行机制" tabindex="-1">描述 Event Loop 运行机制 <a class="header-anchor" href="#描述-event-loop-运行机制" aria-label="Permalink to &quot;描述 Event Loop 运行机制&quot;">​</a></h2><h2 id="set-和-array-有什么区别" tabindex="-1">Set 和 Array 有什么区别 <a class="header-anchor" href="#set-和-array-有什么区别" aria-label="Permalink to &quot;Set 和 Array 有什么区别&quot;">​</a></h2><h2 id="map-和-object-有什么区别" tabindex="-1">Map 和 Object 有什么区别 <a class="header-anchor" href="#map-和-object-有什么区别" aria-label="Permalink to &quot;Map 和 Object 有什么区别&quot;">​</a></h2><h2 id="settimeout-requestanimationframe-和-requestidlecallback-有什么区别" tabindex="-1">setTimeout requestAnimationFrame 和 requestIdleCallback 有什么区别 <a class="header-anchor" href="#settimeout-requestanimationframe-和-requestidlecallback-有什么区别" aria-label="Permalink to &quot;setTimeout requestAnimationFrame 和 requestIdleCallback 有什么区别&quot;">​</a></h2><h2 id="写一个验证-email-的正则表达式" tabindex="-1">写一个验证 email 的正则表达式 <a class="header-anchor" href="#写一个验证-email-的正则表达式" aria-label="Permalink to &quot;写一个验证 email 的正则表达式&quot;">​</a></h2><p>参考答案</p><details class="details custom-block"><summary>Details</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">((-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">))</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[a-zA-Z0-9]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">((</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">-)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[a-zA-Z0-9]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[a-zA-Z0-9]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">reg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(email)</span></span></code></pre></div></details><h2 id="js-模块化规范有哪些" tabindex="-1">JS 模块化规范有哪些？ <a class="header-anchor" href="#js-模块化规范有哪些" aria-label="Permalink to &quot;JS 模块化规范有哪些？&quot;">​</a></h2><h2 id="js-如何捕获异常-有几种方式" tabindex="-1">JS 如何捕获异常？有几种方式？ <a class="header-anchor" href="#js-如何捕获异常-有几种方式" aria-label="Permalink to &quot;JS 如何捕获异常？有几种方式？&quot;">​</a></h2><p>第三方 js ？？</p><h2 id="_0-1-0-2-0-3-表达式返回什么" tabindex="-1"><code>0.1 + 0.2 === 0.3</code> 表达式返回什么？ <a class="header-anchor" href="#_0-1-0-2-0-3-表达式返回什么" aria-label="Permalink to &quot;\`0.1 + 0.2 === 0.3\` 表达式返回什么？&quot;">​</a></h2><h2 id="如何理解-js-单线程" tabindex="-1">如何理解 JS 单线程？ <a class="header-anchor" href="#如何理解-js-单线程" aria-label="Permalink to &quot;如何理解 JS 单线程？&quot;">​</a></h2><h2 id="什么是-webworker-如何理解它" tabindex="-1">什么是 WebWorker 如何理解它 <a class="header-anchor" href="#什么是-webworker-如何理解它" aria-label="Permalink to &quot;什么是 WebWorker 如何理解它&quot;">​</a></h2><h2 id="js-如何进行内存管理和垃圾回收" tabindex="-1">JS 如何进行内存管理和垃圾回收？ <a class="header-anchor" href="#js-如何进行内存管理和垃圾回收" aria-label="Permalink to &quot;JS 如何进行内存管理和垃圾回收？&quot;">​</a></h2><h2 id="如何检测-js-内存泄漏-内存泄漏的场景有哪些" tabindex="-1">如何检测 JS 内存泄漏？内存泄漏的场景有哪些？ <a class="header-anchor" href="#如何检测-js-内存泄漏-内存泄漏的场景有哪些" aria-label="Permalink to &quot;如何检测 JS 内存泄漏？内存泄漏的场景有哪些？&quot;">​</a></h2><h2 id="如何理解-webassembly" tabindex="-1">如何理解 WebAssembly <a class="header-anchor" href="#如何理解-webassembly" aria-label="Permalink to &quot;如何理解 WebAssembly&quot;">​</a></h2><h2 id="js-v8-nodejs-deno-bun-这几个-他们是什么关系" tabindex="-1">JS V8 Nodejs Deno Bun 这几个，他们是什么关系？ <a class="header-anchor" href="#js-v8-nodejs-deno-bun-这几个-他们是什么关系" aria-label="Permalink to &quot;JS V8 Nodejs Deno Bun 这几个，他们是什么关系？&quot;">​</a></h2>`,47)]))}const c=a(e,[["render",l]]);export{E as __pageData,c as default};
