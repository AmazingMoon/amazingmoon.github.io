import{_ as l,r as e,o as m,c as i,b as s,d as p,e as a,a as t}from"./app.67dad6a8.js";var r="/assets/mnist_1.97f1f17b.png",c="/assets/mnist_2.fe9d984d.png",h="/assets/mnist_3.c6fea50b.png",o="/assets/mnist_4.cef46ef6.png",g="/assets/mnist_5.3eb85633.png";const d={},u=s("h1",{id:"\u673A\u5668\u5B66\u4E60\u4E4Bmnist",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u673A\u5668\u5B66\u4E60\u4E4Bmnist","aria-hidden":"true"},"#"),a(" \u673A\u5668\u5B66\u4E60\u4E4BMNIST")],-1),v=s("h2",{id:"mnist\u662F\u4EC0\u4E48",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mnist\u662F\u4EC0\u4E48","aria-hidden":"true"},"#"),a(" MNIST\u662F\u4EC0\u4E48")],-1),y=a("MNIST\u662F\u4E00\u4E2A\u8BA1\u7B97\u673A\u89C6\u89C9\u6570\u636E\u96C6("),k={href:"http://yann.lecun.com/exdb/mnist/",target:"_blank",rel:"noopener noreferrer"},x=a("\u5B98\u7F51\u94FE\u63A5"),b=a(")\uFF0C\u5B83\u5305\u542B\u5404\u79CD\u624B\u5199\u6570\u5B57\u56FE\u7247"),f=t('<p><img src="'+r+'" alt="An image"></p><p>MNIST\u6570\u636E\u96C6\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A</p><ul><li>60000\u884C\u7684\u8BAD\u7EC3\u6570\u636E\u96C6\uFF08mnist.train\uFF09</li><li>10000\u884C\u7684\u6D4B\u8BD5\u6570\u636E\u96C6\uFF08mnist.test\uFF09</li></ul><p>\u6D4B\u8BD5\u6570\u636E\u96C6\u7528\u4E8E\u8BC4\u4F30\u548C\u9884\u6D4B</p><p>\u6BCF\u4E00\u4E2AMNIST\u6570\u636E\u5355\u5143\u6709\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A\u4E00\u5F20\u5305\u542B\u624B\u5199\u6570\u5B57\u7684\u56FE\u7247\u548C\u4E00\u4E2A\u5BF9\u5E94\u7684\u6807\u7B7E\u3002\u6211\u4EEC\u628A\u8FD9\u4E9B\u56FE\u7247\u8BBE\u4E3A\u201Cxs\u201D\uFF0C\u628A\u8FD9\u4E9B\u6807\u7B7E\u8BBE\u4E3A\u201Cys\u201D\u3002\u8BAD\u7EC3\u6570\u636E\u96C6\u548C\u6D4B\u8BD5\u6570\u636E\u96C6\u90FD\u5305\u542Bxs\u548Cys\uFF0C\u6BD4\u5982\u8BAD\u7EC3\u6570\u636E\u96C6\u7684\u56FE\u7247\u662F mnist.train.images \uFF0C\u8BAD\u7EC3\u6570\u636E\u96C6\u7684\u6807\u7B7E\u662F mnist.train.labels</p><p>\u6BCF\u4E00\u5F20\u56FE\u7247\u5305\u542B28x28\u4E2A\u50CF\u7D20\uFF0C\u800C\u4E14\u90FD\u662F\u9ED1\u767D\u8272\u6784\u6210\uFF08\u8FD9\u91CC\u7684\u9ED1\u8272\u662F\u4E00\u4E2A0-1\u7684\u6D6E\u70B9\u6570\uFF0C\u9ED1\u8272\u8D8A\u6DF1\u8868\u793A\u6570\u503C\u8D8A\u9760\u8FD11\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u4E00\u4E2A\u6570\u5B57\u6570\u7EC4\u6765\u8868\u793A\u8FD9\u5F20\u56FE\u7247\uFF1A <img src="'+c+'" alt="An image"></p><p><strong>mnist.train.images \u662F\u4E00\u4E2A\u5F62\u6001\u4E3A [60000, 784] \u7684\u5F20\u91CF\uFF08tensor\uFF09\u3002\u7B2C\u4E00\u4E2A\u7EF4\u5EA6\u8868\u793A\u56FE\u7247\u4E2A\u6570\u7684\u7D22\u5F15\uFF0C\u7B2C\u4E8C\u4E2A\u7EF4\u5EA6\u8868\u793A\u56FE\u7247\u4E2D\u6BCF\u4E00\u4E2A\u50CF\u7D20\u7684\u7D22\u5F15\u3002\u6BCF\u4E00\u4E2A\u50CF\u7D20\u7684\u53D6\u503C\u4E3A0\u62161\uFF0C\u8868\u793A\u8BE5\u50CF\u7D20\u7684\u4EAE\u5EA6</strong><strong>mnist.train.labels \u662F\u4E00\u4E2A\u7ED3\u6784\u4E3A [60000, 10] \u7684\u5F20\u91CF</strong></p><h2 id="softmax\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#softmax\u51FD\u6570" aria-hidden="true">#</a> softmax\u51FD\u6570</h2><p>softmax\u7528\u4E8E\u591A\u5206\u7C7B\u8FC7\u7A0B\u4E2D\uFF0C\u5B83\u5C06\u591A\u4E2A\u795E\u7ECF\u5143\u7684\u8F93\u51FA\uFF0C\u6620\u5C04\u5230\uFF080,1\uFF09\u533A\u95F4\u5185\uFF0C\u53EF\u4EE5\u770B\u6210\u6982\u7387\u6765\u7406\u89E3</p><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.6235em;vertical-align:-1.1218em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5017em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.162em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.4358em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7507em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.1218em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p><img src="'+h+`" alt="An image"><em>softmax\u5C31\u662F\u5C06\u539F\u6765\u8F93\u51FA\u662F3,1,-3\u901A\u8FC7softmax\u51FD\u6570\u4F5C\u7528\uFF0C\u5C31\u6620\u5C04\u6210\u4E3A(0,1)\u7684\u503C\uFF0C\u800C\u8FD9\u4E9B\u503C\u7684\u7D2F\u548C\u4E3A1\uFF08\u6EE1\u8DB3\u6982\u7387\u7684\u6027\u8D28\uFF09\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u5B83\u7406\u89E3\u6210\u6982\u7387\uFF0C\u5728\u6700\u540E\u9009\u53D6\u8F93\u51FA\u7ED3\u70B9\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u9009\u53D6\u6982\u7387\u6700\u5927\uFF08\u4E5F\u5C31\u662F\u503C\u5BF9\u5E94\u6700\u5927\u7684\uFF09\u7ED3\u70B9\uFF0C\u4F5C\u4E3A\u6211\u4EEC\u7684\u9884\u6D4B\u76EE\u6807</em></p><h2 id="softmax\u51FD\u6570\u5728mnist\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#softmax\u51FD\u6570\u5728mnist\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> softmax\u51FD\u6570\u5728MNIST\u4E2D\u7684\u5E94\u7528</h2><p>\u5BF9\u56FE\u7247\u8FDB\u884C\u5206\u7C7B(0...9)\uFF1A <em>\u5728\u8BAD\u7EC3\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u8BBE\u5B9A\u989D\u5916\u7684\u504F\u7F6E\u91CF\uFF08bias\uFF09\u4EE5\u6392\u9664\u5728\u8F93\u5165\u4E2D\u5F15\u5165\u7684\u5E72\u6270\u6570\u636E\u3002\u4E0B\u56FE\u8868\u793A\u8BC1\u636E\u7684\u63D0\u53D6\u8BA1\u7B97\u516C\u5F0F\uFF0C\u5BF9\u4E8E\u5206\u7C7B<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>\u7ED9\u5B9A\u4E00\u4E2A<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>\u7684\u8F93\u5165\u5F97\u5230</em></p><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">i</span><span class="mord mathnormal">d</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord mathnormal">c</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4638em;vertical-align:-1.4138em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">\u2211</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.4138em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p><div class="custom-container warning"><p class="custom-container-title">\u5907\u6CE8</p><ul><li>w\u7684\u5F62\u72B6\u662F\u4E00\u4E2A[784,10]\u7684\u5F20\u91CF\uFF0C\u7B2C\u4E00\u4E2A\u5411\u91CF\u8868\u793A\u6BCF\u4E2A\u56FE\u7247\u90FD\u6709784\u4E2A\u50CF\u7D20\u70B9\uFF0C\u7B2C\u4E8C\u4E2A\u5411\u91CF\u8868\u793A\u4ECE\u201C0\u201D\u5230\u201C9\u201D\u4E00\u5171\u670910\u7C7B\u56FE\u7247</li><li>b\u7684\u5F62\u72B6\u662F[10]\uFF0C\u4ED6\u4EC5\u8868\u793A10\u4E2A\u5206\u7C7B\u7684\u504F\u79FB\u503C</li></ul></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># x\u662F\u7279\u5F81\u503C</span>
x <span class="token operator">=</span> tf<span class="token punctuation">.</span>placeholder<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">784</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># tf.zeros\u8868\u793A\u6240\u6709\u7684\u7EF4\u5EA6\u90FD\u4E3A0 </span>
W <span class="token operator">=</span> tf<span class="token punctuation">.</span>Variable<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">784</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> tf<span class="token punctuation">.</span>Variable<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>\u8868\u793A\u5206\u7C7B\uFF08<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>=[0...9]\uFF09\uFF0C<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span>\u8868\u793A\u56FE\u7247<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>\u7684\u50CF\u7D20\u7D22\u5F15\uFF08<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span>=[0...784]\uFF09\u3001<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">ij</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>\u8868\u793A\u5206\u7C7B<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>\u5728\u50CF\u7D20\u70B9<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span>\u7684\u52A0\u6743\u503C\u3001<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7167em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>\u8868\u793A\u56FE\u7247<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>\u5728<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span>\u50CF\u7D20\u70B9\u7684\u503C\uFF08<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7167em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>=[0,1]\uFF09\uFF0C<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>\u8868\u793A\u5206\u7C7B<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>\u7684\u504F\u79FB\u91CF\u3002\u7136\u540E\u7528softmax\u51FD\u6570\u5C06\u8FD9\u4E9B\u8BC1\u636E\u8F6C\u6362\u6210\u4E00\u4E2A\u6982\u7387\u503C\uFF1A</p><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">so</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">t</span><span class="mord mathnormal">ma</span><span class="mord mathnormal">x</span><span class="mopen">(</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">i</span><span class="mord mathnormal">d</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord mathnormal">ce</span><span class="mclose">)</span></span></span></span></span></p><p>\u8FDB\u4E00\u6B65\u7684\u5C55\u5F00\u516C\u5F0F\uFF1A</p><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">so</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">t</span><span class="mord mathnormal">ma</span><span class="mord mathnormal">x</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4632em;vertical-align:-1.1218em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.162em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.4358em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6065em;"><span style="top:-3.0051em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3281em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2819em;"><span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3281em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.1218em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p>\u8FD9\u4E2A\u516C\u5F0F\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1A\u56FE\u7247<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>\u5728<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>\u5206\u7C7B\u4E2D\u7684\u52A0\u6743\u503C\u5728\u6240\u6709\u52A0\u6743\u503C\u4E2D\u7684\u5360\u6BD4</p><p>\u5BF9\u4E8Esoftmax\u56DE\u5F52\u6A21\u578B\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u56FE\u89E3\u91CA\uFF0C<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7167em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>\u8868\u793A\u4E00\u4E2A\u50CF\u7D20\u70B9\uFF08\u4E0B\u56FE\u4E2D<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span>=[1,2,3]\uFF09\u3002\u7136\u540E\u901A\u8FC7\u50CF\u7D20\u70B9\u4E0E\u6743\u91CD<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">ij</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>\u7684\u4E58\u79EF\u6C42\u548C\uFF08\u4E0B\u56FE\u4E2D<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>=[1,2,3]\uFF09\u518D\u52A0\u4E0A\u504F\u79FB\u91CF<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>\u5F97\u5230\u6A21\u578B\u503C\uFF0C\u6700\u540E\u5C06\u6A21\u578B\u8FDB\u884Csoftmax\u8FD0\u7B97\uFF1A <img src="`+o+'" alt="An image"></p><p>\u8868\u793A\u6210\u77E9\u9635\u5199\u6CD5\uFF1A <img src="'+g+'" alt="An image"></p><p>\u6700\u540E\u7684\u603B\u7ED3\uFF1A</p><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">so</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">t</span><span class="mord mathnormal">ma</span><span class="mord mathnormal">x</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span></span></p>',25),z=a("\u5982\u679C\u60F3\u4E86\u89E3\u66F4\u591A\u5173\u4E8Esoftmax\u56DE\u5F52\u7684\u7EC6\u8282\uFF0C"),_={href:"http://neuralnetworksanddeeplearning.com/chap3.html#softmax",target:"_blank",rel:"noopener noreferrer"},j=a("\u8BF7\u9605\u8BFBMichael Nieslen\u4E66\u4E2D\u5173\u4E8Esoftmax\u7684\u8BF4\u660E"),N=t(`<h2 id="\u5728tensorflow\u4E2D\u4EC5\u4EC5\u4E00\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6574\u4E2A\u8FD0\u7B97\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5728tensorflow\u4E2D\u4EC5\u4EC5\u4E00\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6574\u4E2A\u8FD0\u7B97\u8FC7\u7A0B" aria-hidden="true">#</a> \u5728TensorFlow\u4E2D\u4EC5\u4EC5\u4E00\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6574\u4E2A\u8FD0\u7B97\u8FC7\u7A0B</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>y <span class="token operator">=</span> tf<span class="token punctuation">.</span>nn<span class="token punctuation">.</span>softmax<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>x<span class="token punctuation">,</span> W<span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function w(I,S){const n=e("ExternalLinkIcon");return m(),i("div",null,[u,v,s("p",null,[y,s("a",k,[x,p(n)]),b]),f,s("p",null,[s("em",null,[z,s("a",_,[j,p(n)])])]),N])}var M=l(d,[["render",w],["__file","mnist.html.vue"]]);export{M as default};
