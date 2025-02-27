import{_ as r,c as t,a2 as l,o as a}from"./chunks/framework.YPpNXepj.js";const o="/assets/complexity.4lKDbn0V.webp",b=JSON.parse('{"title":"数据结构和算法","description":"","frontmatter":{},"headers":[],"relativePath":"docs/written-exam/algorithm.md","filePath":"docs/written-exam/algorithm.md"}'),i={name:"docs/written-exam/algorithm.md"};function s(n,e,c,h,d,p){return a(),t("div",null,e[0]||(e[0]=[l('<h1 id="数据结构和算法" tabindex="-1">数据结构和算法 <a class="header-anchor" href="#数据结构和算法" aria-label="Permalink to &quot;数据结构和算法&quot;">​</a></h1><p>大厂前端面试，先从算法开始。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>目标<strong>不在</strong>中大厂的同学，可以略过算法这一节。</li><li>算法 0 基础的同学，可先略过这一节，临时准备根本来不及，需要日常积累。</li><li>如果时间不够，每个分类刷 1-2 道，全刷完太多了。主要是掌握解题的套路。</li></ol></div><h2 id="算法基础-basic" tabindex="-1">算法基础 Basic <a class="header-anchor" href="#算法基础-basic" aria-label="Permalink to &quot;算法基础 Basic&quot;">​</a></h2><p>磨刀不误砍柴工，别着急刷 LeetCode 等算法题，先把基础巩固好，会事半功倍。</p><p>如果这些基础知识都无法自学搞懂，请<a href="https://github.com/mianshipai/mianshipai-web/issues/1" target="_blank" rel="noreferrer">加群</a>寻求帮助，不要自己独立钻研，要掌握学习方法。</p><h3 id="前端常见的数据结构有哪些-有什么基础算法-有什么应用场景" tabindex="-1">前端常见的数据结构有哪些？有什么基础算法？有什么应用场景？ <a class="header-anchor" href="#前端常见的数据结构有哪些-有什么基础算法-有什么应用场景" aria-label="Permalink to &quot;前端常见的数据结构有哪些？有什么基础算法？有什么应用场景？&quot;">​</a></h3><h4 id="数组-字符串" tabindex="-1">数组/字符串 <a class="header-anchor" href="#数组-字符串" aria-label="Permalink to &quot;数组/字符串&quot;">​</a></h4><p>基础算法：</p><ul><li>排序：冒泡排序，快速排序等</li><li>查找：二分查找</li></ul><h4 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h4><p>应用场景：React fiber 结构</p><p>基础算法：遍历，反转</p><h4 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-label="Permalink to &quot;栈&quot;">​</a></h4><p>应用场景：</p><ul><li>撤销/重做 undo/redo</li><li>内存堆栈模型</li></ul><p>基础算法：</p><ul><li>压栈 push</li><li>出栈 pop</li></ul><h4 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h4><p>应用场景：</p><ul><li>Event Loop 时间循环</li><li>消息队列服务</li></ul><p>基础算法：</p><ul><li>入队 enqueue</li><li>出队 dequeue</li></ul><h4 id="树" tabindex="-1">树 <a class="header-anchor" href="#树" aria-label="Permalink to &quot;树&quot;">​</a></h4><p>应用场景：DOM 树，VDOM</p><p>基础算法：</p><ul><li>深度优先搜索 DFS</li><li>广度优先搜索 BFS</li></ul><h4 id="二叉树" tabindex="-1">二叉树 <a class="header-anchor" href="#二叉树" aria-label="Permalink to &quot;二叉树&quot;">​</a></h4><p>应用场景：</p><ul><li>基础的二叉树应用场景不多，主要用于学习和面试 😄</li><li>二叉树扩展出来的，平衡二叉树、AVL 树、红黑树、B+ 树、Trie 树，有大量的应用场景，如数据库管理、文件系统管理、虚拟内存管理等</li><li>前端使用的场景较少，了解其基础知识即可</li></ul><p>基础算法：</p><ul><li>前序遍历</li><li>中序遍历</li><li>后续遍历</li></ul><h4 id="堆" tabindex="-1">堆 <a class="header-anchor" href="#堆" aria-label="Permalink to &quot;堆&quot;">​</a></h4><p>应用场景：内存堆栈模型</p><p>基础算法：堆排序</p><h4 id="图" tabindex="-1">图 <a class="header-anchor" href="#图" aria-label="Permalink to &quot;图&quot;">​</a></h4><p>应用场景：前端流程图、关系图，社交网络模型，搜索引擎</p><p>基础算法：</p><ul><li>深度优先搜索 DFS</li><li>广度优先搜索 BFS</li><li>最短路径，Dijkstra 算法</li></ul><h3 id="什么是时间复杂度" tabindex="-1">什么是时间复杂度？ <a class="header-anchor" href="#什么是时间复杂度" aria-label="Permalink to &quot;什么是时间复杂度？&quot;">​</a></h3><p>算法的时间复杂度，<strong>定性</strong>（数量级）的描述算法运行的时间，用 <code>O</code> 符号表示。</p><p>常见的时间复杂度</p><ul><li><code>O(1)</code> 常数级，无循环</li><li><code>O(n)</code> 线性，单层循环</li><li><code>O(logn)</code> 二分算法</li><li><code>O(n*logn)</code> 单层循环，嵌套二分算法</li><li><code>O(n^2)</code> 两层循环</li><li><code>O(n^3)</code> 三层循环，实际不可用</li></ul><p>图示如下</p><p><img src="'+o+'" alt=""></p><h3 id="什么是空间复杂度" tabindex="-1">什么是空间复杂度？ <a class="header-anchor" href="#什么是空间复杂度" aria-label="Permalink to &quot;什么是空间复杂度？&quot;">​</a></h3><p>同时间复杂度，只是把时间换成空间。时间是 CPU 的消耗，空间是内存的消耗。</p><h2 id="数组-array" tabindex="-1">数组 Array <a class="header-anchor" href="#数组-array" aria-label="Permalink to &quot;数组 Array&quot;">​</a></h2><h3 id="两数之和" tabindex="-1">两数之和 <a class="header-anchor" href="#两数之和" aria-label="Permalink to &quot;两数之和&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/two-sum/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/two-sum/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/two-sum/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/two-sum/solutions/</a></li></ul><h3 id="买卖股票的最佳时机" tabindex="-1">买卖股票的最佳时机 <a class="header-anchor" href="#买卖股票的最佳时机" aria-label="Permalink to &quot;买卖股票的最佳时机&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/</a></li></ul><h3 id="盛水最多的容器" tabindex="-1">盛水最多的容器 <a class="header-anchor" href="#盛水最多的容器" aria-label="Permalink to &quot;盛水最多的容器&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/container-with-most-water/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/container-with-most-water/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/container-with-most-water/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/container-with-most-water/solutions/</a></li></ul><h3 id="除自身以外数组的乘积" tabindex="-1">除自身以外数组的乘积 <a class="header-anchor" href="#除自身以外数组的乘积" aria-label="Permalink to &quot;除自身以外数组的乘积&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/product-of-array-except-self/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/product-of-array-except-self/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/product-of-array-except-self/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/product-of-array-except-self/solutions/</a></li></ul><h2 id="字符串-string" tabindex="-1">字符串 String <a class="header-anchor" href="#字符串-string" aria-label="Permalink to &quot;字符串 String&quot;">​</a></h2><h3 id="无重复字符的最长子串" tabindex="-1">无重复字符的最长子串 <a class="header-anchor" href="#无重复字符的最长子串" aria-label="Permalink to &quot;无重复字符的最长子串&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/longest-substring-without-repeating-characters/solutions/</a></li></ul><h3 id="验证回文串" tabindex="-1">验证回文串 <a class="header-anchor" href="#验证回文串" aria-label="Permalink to &quot;验证回文串&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/valid-palindrome/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/valid-palindrome/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/valid-palindrome/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/valid-palindrome/solutions/</a></li></ul><h3 id="反转字符串中的单词" tabindex="-1">反转字符串中的单词 <a class="header-anchor" href="#反转字符串中的单词" aria-label="Permalink to &quot;反转字符串中的单词&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/reverse-words-in-a-string/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/reverse-words-in-a-string/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/reverse-words-in-a-string/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/reverse-words-in-a-string/solutions/</a></li></ul><h3 id="最长回文子串" tabindex="-1">最长回文子串 <a class="header-anchor" href="#最长回文子串" aria-label="Permalink to &quot;最长回文子串&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/longest-palindromic-substring/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/longest-palindromic-substring/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/longest-palindromic-substring/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/longest-palindromic-substring/solutions/</a></li></ul><h2 id="链表-linked-list" tabindex="-1">链表 Linked List <a class="header-anchor" href="#链表-linked-list" aria-label="Permalink to &quot;链表 Linked List&quot;">​</a></h2><h3 id="反转链表" tabindex="-1">反转链表 <a class="header-anchor" href="#反转链表" aria-label="Permalink to &quot;反转链表&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/reverse-linked-list/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/reverse-linked-list/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/reverse-linked-list/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/reverse-linked-list/solutions/</a></li></ul><h3 id="合并两个有序链表" tabindex="-1">合并两个有序链表 <a class="header-anchor" href="#合并两个有序链表" aria-label="Permalink to &quot;合并两个有序链表&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/merge-two-sorted-lists/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/merge-two-sorted-lists/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/merge-two-sorted-lists/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/merge-two-sorted-lists/solutions/</a></li></ul><h3 id="删除链表的倒数第-n-个结点" tabindex="-1">删除链表的倒数第 N 个结点 <a class="header-anchor" href="#删除链表的倒数第-n-个结点" aria-label="Permalink to &quot;删除链表的倒数第 N 个结点&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solutions/</a></li></ul><h3 id="判断环形链表" tabindex="-1">判断环形链表 <a class="header-anchor" href="#判断环形链表" aria-label="Permalink to &quot;判断环形链表&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/linked-list-cycle/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/linked-list-cycle/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/linked-list-cycle/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/linked-list-cycle/solutions/</a></li></ul><h3 id="相交链表" tabindex="-1">相交链表 <a class="header-anchor" href="#相交链表" aria-label="Permalink to &quot;相交链表&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/intersection-of-two-linked-lists/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/intersection-of-two-linked-lists/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/intersection-of-two-linked-lists/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/intersection-of-two-linked-lists/solutions/</a></li></ul><h2 id="栈-stack" tabindex="-1">栈 Stack <a class="header-anchor" href="#栈-stack" aria-label="Permalink to &quot;栈 Stack&quot;">​</a></h2><h3 id="有效的括号" tabindex="-1">有效的括号 <a class="header-anchor" href="#有效的括号" aria-label="Permalink to &quot;有效的括号&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/valid-parentheses/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/valid-parentheses/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/valid-parentheses/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/valid-parentheses/solutions/</a></li></ul><h3 id="最小栈" tabindex="-1">最小栈 <a class="header-anchor" href="#最小栈" aria-label="Permalink to &quot;最小栈&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/min-stack/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/min-stack/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/min-stack/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/min-stack/solutions/</a></li></ul><h3 id="用栈实现队列" tabindex="-1">用栈实现队列 <a class="header-anchor" href="#用栈实现队列" aria-label="Permalink to &quot;用栈实现队列&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/implement-queue-using-stacks/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/implement-queue-using-stacks/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/implement-queue-using-stacks/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/implement-queue-using-stacks/solutions/</a></li></ul><h3 id="字符串解码" tabindex="-1">字符串解码 <a class="header-anchor" href="#字符串解码" aria-label="Permalink to &quot;字符串解码&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/decode-string/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/decode-string/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/decode-string/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/decode-string/solutions/</a></li></ul><h2 id="队列-queue" tabindex="-1">队列 Queue <a class="header-anchor" href="#队列-queue" aria-label="Permalink to &quot;队列 Queue&quot;">​</a></h2><h3 id="用队列实现栈" tabindex="-1">用队列实现栈 <a class="header-anchor" href="#用队列实现栈" aria-label="Permalink to &quot;用队列实现栈&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/implement-stack-using-queues/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/implement-stack-using-queues/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/implement-stack-using-queues/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/implement-stack-using-queues/solutions/</a></li></ul><h3 id="最近的请求次数" tabindex="-1">最近的请求次数 <a class="header-anchor" href="#最近的请求次数" aria-label="Permalink to &quot;最近的请求次数&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/number-of-recent-calls/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/number-of-recent-calls/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/number-of-recent-calls/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/number-of-recent-calls/</a></li></ul><h2 id="二叉树-binary-tree" tabindex="-1">二叉树 Binary Tree <a class="header-anchor" href="#二叉树-binary-tree" aria-label="Permalink to &quot;二叉树 Binary Tree&quot;">​</a></h2><h3 id="二叉树的最大深度" tabindex="-1">二叉树的最大深度 <a class="header-anchor" href="#二叉树的最大深度" aria-label="Permalink to &quot;二叉树的最大深度&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/maximum-depth-of-binary-tree/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/maximum-depth-of-binary-tree/solutions/</a></li></ul><h3 id="验证二叉搜索树" tabindex="-1">验证二叉搜索树 <a class="header-anchor" href="#验证二叉搜索树" aria-label="Permalink to &quot;验证二叉搜索树&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/validate-binary-search-tree/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/validate-binary-search-tree/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/validate-binary-search-tree/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/validate-binary-search-tree/solutions/</a></li></ul><h3 id="二叉树的层序遍历" tabindex="-1">二叉树的层序遍历 <a class="header-anchor" href="#二叉树的层序遍历" aria-label="Permalink to &quot;二叉树的层序遍历&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/binary-tree-level-order-traversal/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/binary-tree-level-order-traversal/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/binary-tree-level-order-traversal/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/binary-tree-level-order-traversal/solutions/</a></li></ul><h3 id="对称二叉树" tabindex="-1">对称二叉树 <a class="header-anchor" href="#对称二叉树" aria-label="Permalink to &quot;对称二叉树&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/symmetric-tree/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/symmetric-tree/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/symmetric-tree/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/symmetric-tree/solutions/</a></li></ul><h2 id="动态规划-dynamic-programming" tabindex="-1">动态规划 Dynamic Programming <a class="header-anchor" href="#动态规划-dynamic-programming" aria-label="Permalink to &quot;动态规划 Dynamic Programming&quot;">​</a></h2><h3 id="第-n-个斐波那契数" tabindex="-1">第 N 个斐波那契数 <a class="header-anchor" href="#第-n-个斐波那契数" aria-label="Permalink to &quot;第 N 个斐波那契数&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/n-th-tribonacci-number/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/n-th-tribonacci-number/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/n-th-tribonacci-number/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/n-th-tribonacci-number/solutions/</a></li></ul><h3 id="爬楼梯" tabindex="-1">爬楼梯 <a class="header-anchor" href="#爬楼梯" aria-label="Permalink to &quot;爬楼梯&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/climbing-stairs/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/climbing-stairs/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/climbing-stairs/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/climbing-stairs/solutions/</a></li></ul><h3 id="不同路径" tabindex="-1">不同路径 <a class="header-anchor" href="#不同路径" aria-label="Permalink to &quot;不同路径&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/unique-paths/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/unique-paths/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/unique-paths/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/unique-paths/solutions/</a></li></ul><h3 id="最长递增子序列" tabindex="-1">最长递增子序列 <a class="header-anchor" href="#最长递增子序列" aria-label="Permalink to &quot;最长递增子序列&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/longest-increasing-subsequence/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/longest-increasing-subsequence/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/longest-increasing-subsequence/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/longest-increasing-subsequence/solutions/</a></li></ul><h3 id="零钱兑换" tabindex="-1">零钱兑换 <a class="header-anchor" href="#零钱兑换" aria-label="Permalink to &quot;零钱兑换&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/coin-change/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/coin-change/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/coin-change/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/coin-change/solutions/</a></li></ul><h2 id="分治-divide-and-conquer" tabindex="-1">分治 Divide and Conquer <a class="header-anchor" href="#分治-divide-and-conquer" aria-label="Permalink to &quot;分治 Divide and Conquer&quot;">​</a></h2><h3 id="二分查找" tabindex="-1">二分查找 <a class="header-anchor" href="#二分查找" aria-label="Permalink to &quot;二分查找&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/binary-search/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/binary-search/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/binary-search/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/binary-search/solutions/</a></li></ul><h3 id="快速排序" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序" aria-label="Permalink to &quot;快速排序&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/sort-an-array/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/sort-an-array/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/sort-an-array/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/sort-an-array/solutions/</a></li></ul><h3 id="数组中的第-k-个最大元素" tabindex="-1">数组中的第 K 个最大元素 <a class="header-anchor" href="#数组中的第-k-个最大元素" aria-label="Permalink to &quot;数组中的第 K 个最大元素&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/kth-largest-element-in-an-array/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/kth-largest-element-in-an-array/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/kth-largest-element-in-an-array/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/kth-largest-element-in-an-array/solutions/</a></li></ul><h3 id="最大子数组和" tabindex="-1">最大子数组和 <a class="header-anchor" href="#最大子数组和" aria-label="Permalink to &quot;最大子数组和&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/maximum-subarray/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/maximum-subarray/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/maximum-subarray/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/maximum-subarray/solutions/</a></li></ul><h2 id="双指针-two-pointers" tabindex="-1">双指针 Two Pointers <a class="header-anchor" href="#双指针-two-pointers" aria-label="Permalink to &quot;双指针 Two Pointers&quot;">​</a></h2><h3 id="移动零" tabindex="-1">移动零 <a class="header-anchor" href="#移动零" aria-label="Permalink to &quot;移动零&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/move-zeroes/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/move-zeroes/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/move-zeroes/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/move-zeroes/solutions/</a></li></ul><h3 id="判断子序列" tabindex="-1">判断子序列 <a class="header-anchor" href="#判断子序列" aria-label="Permalink to &quot;判断子序列&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/is-subsequence/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/is-subsequence/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/is-subsequence/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/is-subsequence/solutions/</a></li></ul><h3 id="两数之和-ii-输入有序数组" tabindex="-1">两数之和 II - 输入有序数组 <a class="header-anchor" href="#两数之和-ii-输入有序数组" aria-label="Permalink to &quot;两数之和 II - 输入有序数组&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/solutions/</a></li></ul><h3 id="接雨水" tabindex="-1">接雨水 <a class="header-anchor" href="#接雨水" aria-label="Permalink to &quot;接雨水&quot;">​</a></h3><ul><li>题目 <a href="https://leetcode.cn/problems/trapping-rain-water/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/trapping-rain-water/description/</a></li><li>解答 <a href="https://leetcode.cn/problems/trapping-rain-water/solutions/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/trapping-rain-water/solutions/</a></li></ul>',128)]))}const m=r(i,[["render",s]]);export{b as __pageData,m as default};
