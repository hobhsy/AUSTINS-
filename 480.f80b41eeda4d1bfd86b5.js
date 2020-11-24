(self.webpackChunk=self.webpackChunk||[]).push([[480],{480:n=>{n.exports='<p><a href="https://npmjs.com/package/remark-loader"><img src="https://img.shields.io/npm/v/remark-loader.svg" alt="npm"></a> <a href="https://nodejs.org"><img src="https://img.shields.io/node/v/remark-loader.svg" alt="node"></a> <a href="https://david-dm.org/webpack-contrib/remark-loader"><img src="https://david-dm.org/webpack-contrib/remark-loader.svg" alt="deps"></a> <a href="https://github.com/webpack-contrib/remark-loader/actions"><img src="https://github.com/webpack-contrib/remark-loader/workflows/remark-loader/badge.svg" alt="tests"></a> <a href="https://codecov.io/gh/webpack-contrib/remark-loader"><img src="https://codecov.io/gh/webpack-contrib/remark-loader/branch/master/graph/badge.svg" alt="cover"></a> <a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a> <a href="https://packagephobia.now.sh/result?p=remark-loader"><img src="https://packagephobia.now.sh/badge?p=remark-loader" alt="size"></a></p> <p>Load markdown through <code>remark</code>.</p> <h2 id="usage">Usage<a href="#usage" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p>Simply add the loader to your configuration, and pass options.</p> <pre><code class="hljs language-js"><span class="token keyword">import</span> md <span class="token keyword">from</span> <span class="token string">\'markdown-file.md\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> RemarkHTML <span class="token keyword">from</span> <span class="token string">\'remark-html\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              remarkOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>RemarkHTML<span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>Here\'s the full list of <a href="https://github.com/wooorm/remark/blob/master/doc/plugins.md"><code>remark</code> plugins</a>.</p> <p>We no longer support any <code>react</code> specific features. Please see the wonderful <a href="https://mdxjs.com/">MDX</a> project if you\'re interested in mixing JSX with Markdown.</p> <h2 id="options">Options<a href="#options" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <table> <thead> <tr> <th align="center">Name</th> <th align="center">Type</th> <th align="center">Default</th> <th align="left">Description</th> </tr> </thead> <tbody> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div><div class="content"><p><strong><a href="#remarkoptions"><code>remarkOptions</code></a></strong></p><p class="description mobile"><code>{Object}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Object}</code></td> <td align="center"><code>{}</code></td> <td align="left">Remark options</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div><div class="content"><p><strong><a href="#removefrontmatter"><code>removeFrontMatter</code></a></strong></p><p class="description mobile"><code>{Boolean}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Boolean}</code></td> <td align="center"><code>true</code></td> <td align="left">Remove removeFrontMatter</td> </tr> </tbody> </table> <h3 id="remarkoptions">remarkOptions<a href="#remarkoptions" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <table> <thead> <tr> <th align="center">Name</th> <th align="center">Type</th> <th align="center">Default</th> <th align="left">Description</th> </tr> </thead> <tbody> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div><div class="content"><p><strong><a href="#plugins"><code>plugins</code></a></strong></p><p class="description mobile"><code>Array&#x3C;String\\|Array></code></p><p></p></div></td> <td align="center" class="description desktop"><code>Array&#x3C;String\\|Array></code></td> <td align="center"><code>[]</code></td> <td align="left">Allows to connect <a href="https://github.com/wooorm/remark/blob/master/doc/plugins.md"><code>remark</code> plugins</a></td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div><div class="content"><p><strong><a href="#settings"><code>settings</code></a></strong></p><p class="description mobile"><code>{Object}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Object}</code></td> <td align="center"><code>undefined</code></td> <td align="left">Remark settings</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div><div class="content"><p><strong><a href="#data"><code>data</code></a></strong></p><p class="description mobile"><code>{Object}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Object}</code></td> <td align="center"><code>undefined</code></td> <td align="left">Information available to all plugins</td> </tr> </tbody> </table> <h4 id="plugins">plugins<a href="#plugins" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h4> <p>Type: <code>Array&#x3C;String\\|Array></code> Default: <code>[]</code></p> <p>Allows to connect <a href="https://github.com/wooorm/remark/blob/master/doc/plugins.md"><code>remark</code> plugins</a></p> <h5 id="string">String<a href="#string" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h5> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> RemarkFrontmatter <span class="token keyword">from</span> <span class="token string">\'remark-frontmatter\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              remarkOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>RemarkFrontmatter<span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h5 id="array">Array<a href="#array" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h5> <p>If need to specify options for the plugin, can pass the plugin using an array, where the second argument will be options.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> RemarkFrontmatter <span class="token keyword">from</span> <span class="token string">\'remark-frontmatter\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> RemarkBookmarks <span class="token keyword">from</span> <span class="token string">\'remark-bookmarks\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              remarkOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n                  RemarkFrontmatter<span class="token punctuation">,</span>\n                  <span class="token punctuation">[</span>\n                    RemarkBookmarks<span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span>\n                      bookmarks<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        npm<span class="token operator">:</span> <span class="token string">\'https://npmjs.com/package/remark-bookmarks\'</span><span class="token punctuation">,</span>\n                      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h4 id="settings">settings<a href="#settings" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h4> <p>Type: <code>Object</code> Default: <code>undefined</code></p> <p>Pass <a href="https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options"><code>remark-stringify</code> options</a> and <a href="https://github.com/remarkjs/remark/tree/main/packages/remark-parse#options"><code>remark-parse</code> options</a> options to the <code>remark</code>.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              remarkOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n                settings<span class="token operator">:</span> <span class="token punctuation">{</span>\n                  bullet<span class="token operator">:</span> <span class="token string">\'+\'</span><span class="token punctuation">,</span>\n                  listItemIndent<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h4 id="data">data<a href="#data" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h4> <p>Type: <code>Object</code> Default: <code>undefined</code></p> <p>Configure the <a href="https://github.com/unifiedjs/unified#processordatakey-value"><code>remark</code></a> with information available to all plugins. Information is stored in an in-memory key-value store.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">function</span> <span class="token function">examplePluginUsingData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// { alpha: \'bravo\', charlie: \'delta\' }</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              remarkOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>examplePluginUsingData<span class="token punctuation">]</span><span class="token punctuation">,</span>\n                data<span class="token operator">:</span> <span class="token punctuation">{</span>\n                  alpha<span class="token operator">:</span> <span class="token string">\'bravo\'</span><span class="token punctuation">,</span>\n                  charlie<span class="token operator">:</span> <span class="token string">\'delta\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="removefrontmatter">removeFrontMatter<a href="#removefrontmatter" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p>Type: <code>Boolean</code> Default: <code>true</code></p> <p>By default, the frontMatter is removed. To override this behavior, set <code>removeFrontMatter</code> to <code>false</code> and add <code>remark-frontmatter</code> to plugins.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> RemarkFrontmatter <span class="token keyword">from</span> <span class="token string">\'remark-frontmatter\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              removeFrontMatter<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n              remarkOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>RemarkFrontmatter<span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h2 id="inspiration">Inspiration<a href="#inspiration" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p>This project was inspired the following open source work:</p> <ul> <li><a href="https://github.com/javiercf/react-markdown-loader"><code>react-markdown-loader</code></a></li> <li><a href="https://github.com/cerebral/marksy"><code>marksy</code></a></li> </ul> <h2 id="examples">Examples<a href="#examples" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <h3 id="markdown-to-html">Markdown to HTML<a href="#markdown-to-html" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p>To get html, need to add <a href="https://github.com/wooorm/remark-html"><code>remark-html</code></a> to the remark plugins and add <a href="/loaders/html-loader/"><code>html-loader</code></a> to the <code>webpack.config</code></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> md <span class="token keyword">from</span> <span class="token string">\'markdown-file.md\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> RemarkHTML <span class="token keyword">from</span> <span class="token string">\'remark-html\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              remarkOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>RemarkHTML<span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="markdown-to-markdown">Markdown to Markdown<a href="#markdown-to-markdown" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><strong>index.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> md <span class="token keyword">from</span> <span class="token string">\'markdown-file.md\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'remark-loader\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p> <p><a href="https://github.com/webpack-contrib/remark-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p> <h2 id="license">License<a href="#license" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p><a href="https://github.com/webpack-contrib/remark-loader/blob/master/LICENSE">MIT</a></p> '}}]);