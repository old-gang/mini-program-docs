import{_ as t,r as p,o as e,c as o,a as n,d as c,e as i,b as s}from"./app.19a248fc.js";var l="/mini-program-docs/images/sm1.gif",u="/mini-program-docs/images/sm2.gif";const r={},k=i(`<h1 id="\u5C0F\u7A0B\u5E8F\u7684\u72B6\u6001\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u7684\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u7684\u72B6\u6001\u7BA1\u7406</h1><blockquote><p>\u628A\u5C0F\u7A0B\u5E8F\u4E2D\u591A\u4E2A\u7EC4\u4EF6\u6216\u9875\u9762\u7528\u5230\u7684\u5171\u4EAB\u6570\u636E\u96C6\u4E2D\u7BA1\u7406\u8D77\u6765\u7684\u65B9\u6848</p></blockquote><p>\u5C0F\u7A0B\u5E8F\u4E2D\u5B9E\u73B0\u72B6\u6001\u7BA1\u7406,\u662F\u5229\u7528<code>mobx-miniprogram</code>\u548C<code>mobx-miniprogram-bindings</code>\u8FD9\u4E24\u4E2A\u7B2C\u4E09\u65B9\u5305\u5B9E\u73B0\u7684</p><ul><li>mobx-miniprogram \u7528\u4E8E\u521B\u5EFA\u7BA1\u7406\u5171\u4EAB\u6570\u636E\u7684\u4ED3\u5E93</li><li>mobx-miniprogram-bindings \u7528\u4E8E\u5C06\u5171\u4EAB\u6570\u636E\u4ED3\u5E93\u548C\u5C0F\u7A0B\u5E8F\u7684\u7EC4\u4EF6\u6216\u9875\u9762\u8FDE\u63A5\u8D77\u6765</li></ul><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u521B\u5EFA-store-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-store-\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA store \u5BF9\u8C61</h3><ul><li><p>\u4E0B\u5305: npm install mobx-miniprogram mobx-miniprogram-bindings. \u91CD\u65B0\u6784\u5EFA npm</p></li><li><p>\u521B\u5EFA store \u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// /model/store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> observable<span class="token punctuation">,</span> action <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx-miniprogram&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u636E\u5B57\u6BB5</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BA1\u7B97\u5C5E\u6027</span>
  <span class="token keyword">get</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">8</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// actions(\u65B9\u6CD5)</span>
  <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>\u6B64\u65F6\u96C6\u4E2D\u7BA1\u7406\u6570\u636E\u7684\u4ED3\u5E93\u5DF2\u7ECF\u521B\u5EFA\u5B8C\u6BD5,\u63A5\u4E0B\u6765,\u6211\u4EEC\u5728\u9875\u9762\u548C\u7EC4\u4EF6\u4E2D\u64CD\u4F5C\u4ED3\u5E93\u4E2D\u7684\u6570\u636E</p><h3 id="\u5728\u9875\u9762\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728\u9875\u9762\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728\u9875\u9762\u4E2D\u4F7F\u7528</h3><ol><li><p>\u521B\u5EFA behavior</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// /model/behavior.js</span>

<span class="token comment">// BehaviorWithStore \u7528\u4E8E\u521B\u5EFA\u548Cstore\u7ED1\u5B9A\u7684behavior</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BehaviorWithStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx-miniprogram-bindings&#39;</span>
<span class="token comment">// \u5F15\u5165store</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token comment">// \u521B\u5EFA\u548Cstore\u7ED1\u5B9A\u597D\u7684behavior</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> countBehavior <span class="token operator">=</span> <span class="token function">BehaviorWithStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// behavior\u548Cstore\u7ED1\u5B9A\u7684\u914D\u7F6E\u9879</span>
  <span class="token literal-property property">storeBindings</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span> <span class="token comment">//\u7ED1\u5B9A\u7684store</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u7ED1\u5B9Astore\u4E2D\u7684\u6570\u636E\u5B57\u6BB5,\u5728\u5F15\u5165\u5F53\u524Dbehavior\u7684\u9875\u9762\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</span>
      <span class="token comment">// \u7ED1\u5B9Astore\u4E2D\u7684add\u51FD\u6570,\u5728\u5F15\u5165\u5F53\u524Dbehavior\u7684\u9875\u9762\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u9875\u9762\u4E2D\u5F15\u5165\u4F7F\u7528 countBehavior</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// /pages/index/index.js</span>
<span class="token comment">// \u5F15\u5165countBehavior</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> countBehavior <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../model/behavior&#39;</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// \u914D\u7F6EcountBehavior</span>
<span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>countBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u9875\u9762\u7684 wxml \u4E2D\u76F4\u63A5\u4F7F\u7528\u6570\u636E\u548C\u65B9\u6CD5</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>index\u9875\u9762<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>count: {{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>sum: {{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6548\u679C</p><p><img src="`+l+`" alt="sm"></p></li></ol><h3 id="\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528</h3><ol><li><p>\u5728\u7EC4\u4EF6\u7684 js \u6587\u4EF6\u4E2D\u914D\u7F6E\u548C store \u7ED1\u5B9A\u7684\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// /components/my-comp/my-comp.js</span>
<span class="token comment">// \u5F15\u5165\u4E00\u4E2A\u548Cstore\u7ED1\u5B9A\u5E76\u6CE8\u518C\u7EC4\u4EF6\u7684\u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentWithStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx-miniprogram-bindings&#39;</span>
<span class="token comment">// \u5F15\u5165store</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../model/store&#39;</span>
<span class="token comment">// \u6CE8\u518C\u4E00\u4E2A\u548Cstore\u7ED1\u5B9A\u7684\u7EC4\u4EF6</span>
<span class="token function">ComponentWithStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// data \u7EC4\u4EF6\u81EA\u5DF1\u7684\u6570\u636E</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;my-comp\u81EA\u5DF1\u7684\u6570\u636E&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7EC4\u4EF6\u548Cstore\u8FDB\u884C\u7ED1\u5B9A</span>
  <span class="token literal-property property">storeBindings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span>
    <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// actions: [&quot;sub&quot;] \u8FD9\u6837\u5199\u53EF\u4EE5\u6216\u5199\u6210\u4E0B\u9762\u7684\u5199\u6CD5</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// subTap\u8868\u793Amy-comp\u4E2D\u7684\u51FD\u6570,subTap\u89E6\u53D1\u5219\u8C03\u7528store\u4E2D\u7684sub\u51FD\u6570</span>
      <span class="token literal-property property">subTap</span><span class="token operator">:</span> <span class="token string">&#39;sub&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u7EC4\u4EF6\u7ED3\u6784\u4E2D\u4F7F\u7528\u6570\u636E\u548C\u65B9\u6CD5</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- /components/my-comp/my-comp.wxml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1rpx solid #ccc<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>my-comp\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>count: {{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>sum: {{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subTap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6548\u679C</p><p><img src="`+u+'" alt="sm2"></p></li></ol>',12),d=n("strong",null,"\u4EE5\u4E0A\u662F mobx \u548C\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\u7ED1\u5B9A\u7684\u65B0\u8BED\u6CD5,\u65E7\u8BED\u6CD5\u53EF\u4EE5\u53C2\u8003\u6587\u6863",-1),m=s(": "),v={href:"https://www.npmjs.com/package/mobx-miniprogram-bindings",target:"_blank",rel:"noopener noreferrer"},g=s("mobx-miniprogram-bindings \u65E7\u7248\u8BED\u6CD5");function b(h,y){const a=p("ExternalLinkIcon");return e(),o("div",null,[k,n("p",null,[d,m,n("a",v,[g,c(a)])])])}var x=t(r,[["render",b],["__file","stateManger.html.vue"]]);export{x as default};
