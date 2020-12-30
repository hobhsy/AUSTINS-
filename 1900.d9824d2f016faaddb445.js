(self.webpackChunk=self.webpackChunk||[]).push([[1900],{1900:function(n){n.exports='<p>The entry object is where webpack looks to start building the bundle. The context is an absolute string to the directory that contains the entry files.</p> <h2 id="context"><code>context</code><a href="#context" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><code>string</code></p> <p>The base directory, an <strong>absolute path</strong>, for resolving entry points and loaders from configuration.</p> <pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  context<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'app\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>By default the current directory is used, but it\'s recommended to pass a value in your configuration. This makes your configuration independent from CWD (current working directory).</p> <hr> <h2 id="entry"><code>entry</code><a href="#entry" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><code>string</code> <code>[string]</code> <code>object = { &#x3C;key> string | [string] | object = { import string | [string], dependOn string | [string], filename string }}</code> <code>(function() => string | [string] | object = { &#x3C;key> string | [string] } | object = { import string | [string], dependOn string | [string], filename string })</code></p> <p>The point or points where to start the application bundling process. If an array is passed then all items will be processed.</p> <p>A dynamically loaded module is <strong>not</strong> an entry point.</p> <p>Simple rule: one entry point per HTML page. SPA: one entry point, MPA: multiple entry points.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    home<span class="token operator">:</span> <span class="token string">\'./home.js\'</span><span class="token punctuation">,</span>\n    about<span class="token operator">:</span> <span class="token string">\'./about.js\'</span><span class="token punctuation">,</span>\n    contact<span class="token operator">:</span> <span class="token string">\'./contact.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="naming">Naming<a href="#naming" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>If a string or array of strings is passed, the chunk is named <code>main</code>. If an object is passed, each key is the name of a chunk, and the value describes the entry point for the chunk.</p> <h3 id="entry-descriptor">Entry descriptor<a href="#entry-descriptor" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>If an object is passed the value might be a string, array of strings or a descriptor:</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    home<span class="token operator">:</span> <span class="token string">\'./home.js\'</span><span class="token punctuation">,</span>\n    shared<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">,</span> <span class="token string">\'redux\'</span><span class="token punctuation">,</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    catalog<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./catalog.js\'</span><span class="token punctuation">,</span>\n      filename<span class="token operator">:</span> <span class="token string">\'pages/catalog.js\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token operator">:</span><span class="token string">\'shared\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    personal<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./personal.js\'</span><span class="token punctuation">,</span>\n      filename<span class="token operator">:</span> <span class="token string">\'pages/personal.js\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token operator">:</span> <span class="token string">\'shared\'</span><span class="token punctuation">,</span>\n      chunkLoading<span class="token operator">:</span> <span class="token string">\'jsonp\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>Descriptor syntax might be used to pass additional options to an entry point.</p> <h3 id="output-filename">Output filename<a href="#output-filename" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>By default, the output filename for the entry chunk is extracted from <a href="/configuration/output/#outputfilename"><code>output.filename</code></a> but you can specify a custom output filename for a specific entry:</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span>\n    home<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./contact.js\'</span><span class="token punctuation">,</span> filename<span class="token operator">:</span> <span class="token string">\'pages/[name][ext]\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    about<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./about.js\'</span><span class="token punctuation">,</span> filename<span class="token operator">:</span> <span class="token string">\'pages/[name][ext]\'</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>Descriptor syntax was used here to pass <code>filename</code>-option to the specific entry points.</p> <h3 id="dependencies">Dependencies<a href="#dependencies" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>By default, every entry chunk stores all the modules that it uses. With <code>dependOn</code> option you can share the modules from one entry chunk to another:</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span> dependOn<span class="token operator">:</span> <span class="token string">\'react-vendors\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'react-vendors\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">,</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>The <code>app</code> chunk will not contain the modules that <code>react-vendors</code> has.</p> <p><code>dependOn</code> option can also accept an array of strings:</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    moment<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'moment-mini\'</span><span class="token punctuation">,</span> runtime<span class="token operator">:</span> <span class="token string">\'runtime\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    reactvendors<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> runtime<span class="token operator">:</span> <span class="token string">\'runtime\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    testapp<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./wwwroot/component/TestApp.tsx\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'reactvendors\'</span><span class="token punctuation">,</span> <span class="token string">\'moment\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>Also, you can specify multiple files per entry using an array:</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./app.js\'</span><span class="token punctuation">,</span> <span class="token string">\'./app2.js\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dependOn<span class="token operator">:</span> <span class="token string">\'react-vendors\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'react-vendors\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">,</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="dynamic-entry">Dynamic entry<a href="#dynamic-entry" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>If a function is passed then it will be invoked on every <a href="/api/compiler-hooks/#make">make</a> event.</p> <blockquote> <p>Note that the make event triggers when webpack starts and for every invalidation when <a href="/configuration/watch/">watching for file changes</a>.</p> </blockquote> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  <span class="token function-variable function">entry</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'./demo\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>or</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  <span class="token function-variable function">entry</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'./demo\'</span><span class="token punctuation">,</span> <span class="token string">\'./demo2\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>For example: you can use dynamic entries to get the actual entries from an external source (remote server, file system content or database):</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">entry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">fetchPathsFromSomeExternalSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns a promise that will be resolved with something like [\'src/main-layout.js\', \'src/admin-layout.js\']</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>When combining with the <a href="/configuration/output/#outputlibrary"><code>output.library</code></a> option: If an array is passed only the last item is exported.</p> '}}]);