# source-map
关于source-map的一些资料

## Spec & Standards
- [sourcemap v2 spec](https://docs.google.com/document/d/1xi12LrcqjqIHTtZzrzZKmQ3lbTv9mKrN076UB-j3UZQ/preview)
- [sourcemap v3 spec](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/preview)
- [source-map.github.io](http://source-map.github.io/)
- [mozilla.dev.js-sourcemap mailing list](https://groups.google.com/forum/#!forum/mozilla.dev.js-sourcemap)


## 文章参考
- [介绍SourceMap的一篇经典文章(非常详细，但某些内容可能过时了)](https://developer.chrome.com/blog/sourcemaps/#the-anatomy-of-a-source-map)
- [web.dev上介绍SourceMap的另一篇文章](https://web.dev/source-maps/)
- [x_google_ignoreList 扩展](https://developer.chrome.com/articles/x-google-ignore-list/)

## 可视化工具
- [source-map-visualization](https://sokra.github.io/source-map-visualization/)
- [Source Map Visualization](https://evanw.github.io/source-map-visualization/)

## 相关项目

- [source-map-rfc](https://github.com/source-map/source-map-rfc)
- [mozilla/source-map](https://github.com/mozilla/source-map/)


### Tools that generate source maps
* [Closure Compiler](https://developers.google.com/closure/compiler/) - The Closure Compiler is a tool for making JavaScript download and run faster.
* [Importer](https://github.com/devongovett/importer) - Adds an `#import` statement to JavaScript-based languages.  Generates a combined source map from all input files.
* [Ender](https://github.com/ender-js/Ender/issues/127) - the no-library library: open module JavaScript framework
* [Faye](http://faye.jcoglan.com/) - Faye is a publish-subscribe messaging system based on the Bayeux protocol.
* [Packr](https://github.com/jcoglan/packr) - Ruby version of Dean Edwards' Packer
* [Ruby Source map gem](https://github.com/ConradIrwin/ruby-source_map) - Ruby library for interacting with the awesome javascript SourceMaps.
* [Mozilla source-map](https://github.com/mozilla/source-map/) - Mozilla node lib to read and generate source maps
* [UglifyJS2](https://github.com/mishoo/UglifyJS2) - JavaScript parser / mangler / compressor / beautifier toolkit
* [JSMin](https://github.com/twolfson/node-jsmin-sourcemap) - A fork of JSMin to add sourcemap support (and it's companion [grunt plugin](https://github.com/twolfson/grunt-jsmin-sourcemap))
* [esmangle](https://github.com/Constellation/esmangle/issues/11) - js minifier / mangler
* [AjaxMin](http://ajaxmin.codeplex.com/) - JS/CSS minifier for .NET
* [browserify](https://github.com/substack/node-browserify) - Use a node-style `require()` to organize your browser code and load modules installed by npm.
* [webpack](https://webpack.github.io/) - similar to browserify
* [multi-stage-sourcemap](https://github.com/azu/multi-stage-sourcemap "azu/multi-stage-sourcemap") - helper module for multi-level source maps
* [Gobble](https://github.com/gobblejs/gobble) - flexible build system for JS/CSS
* [RollUp](http://rollupjs.org/) - Bundler for ES2015 modules

## Tools that consume source maps
* Chrome DevTools
* Firefox DevTools
* Edge DevTools (F12)
* WebStorm
* [Sentry](https://github.com/getsentry/sentry) - error logging
* [SourceMap Validator](http://sourcemap-validator.herokuapp.com/)
* [Sourcemap visualisation tool (qfox)](http://sourcemapper.qfox.nl/)
* [sokra/source-map-visualization](http://sokra.github.io/source-map-visualization/) & [visualization launcher](https://github.com/lydell/source-map-visualize)
* [node-sourcemap-support](https://github.com/evanw/node-source-map-support) - Adds source map support to node.js (for stack traces)


## Languages that compile to javascript and support source map generation
* [JSX](https://github.com/jsx/JSX/) - a faster, safer, easier alternative to JavaScript
* [GWT](http://www.gwtproject.org/) - GWT (formerly the Google Web Toolkit). GWT's mission is to radically improve the web experience for users by enabling developers to use existing Java tools to build no-compromise AJAX for any modern browser.
* [Traceur](http://code.google.com/p/traceur-compiler/) - Traceur is a JavaScript.Next ➡ JavaScript compiler that allows you to use features from the future today.
* [TypeScript](http://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.
* [CoffeeScript](http://coffeescript.org/) - CoffeeScript supports source maps as of version 1.6.
* [CoffeeScript Redux](https://github.com/michaelficarra/CoffeeScriptRedux) - The redux compiler does [create sourcemaps](http://ryanflorence.com/2012/coffeescript-source-maps/), is [not production ready](https://github.com/jashkenas/coffee-script/issues/558#issuecomment-9905021), but is progressing quickly.
* [LiveScript](http://livescript.net/) - LiveScript supports source maps as of version 1.4.0
* [Dart](http://dartlang.org/) - JavaScript alternative from Google
* [Haxe](http://haxe.org/) - The well known multiplatform open-source programming language. Compiling with the `-debug` flag will create a .map alongside the .js file
* [Opal](http://opalrb.org) - a Ruby to JavaScript compiler
* [Scala.js](https://github.com/lampepfl/scala-js) - a Scala to JavaScript compiler
* [WebSharper](http://websharper.com) - WebSharper provides robust functional web abstractions and an F# to JavaScript compiler, and supports the [generation of source maps](http://websharper.com/blog-entry/4146) as of WebSharper 3 alpha.
* [Transcrypt](http://www.transcrypt.org) - Compiles extensive subset of Python 3.5 to fast, readable Javascript, incl. multiple inheritance, seamless JS lib interop, operator overloading, keyword args and call memoization for speed. Open source.
* [Kotlin](http://kotlinlang.org/) - Statically typed programming language for modern multiplatform applications. See [Debugging Kotlin in browser](http://kotlinlang.org/docs/tutorials/javascript/debugging-javascript/debugging-javascript.html)


## Sites with source maps enabled
* [HTML5Please](http://html5please.com/)

## Articles about source maps
* [HTML5 Rocks - Introduction to JavaScript Source Maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
* [The Breakpoint Ep 3: The Sourcemap Spectacular with Paul Irish and Addy Osmani](http://www.youtube.com/watch?feature=player_detailpage&v=HijZNR6kc9A#t=11s) - shows CoffeeScript ➡ UglifyJS ➡ min.js and back again.
* [Source map support added to Packr and Jake](http://blog.jcoglan.com/2012/05/23/source-map-support-added-to-packr-and-jake/)
* [Using Source Maps with TypeScript](http://www.aaron-powell.com/web/typescript-source-maps)
* [CoffeeScript Source Maps](http://ryanflorence.com/2012/coffeescript-source-maps/)
* [7-minute Guide to Source Maps With CoffeeScript and Uglify.js](http://tarantsov.com/WorkflowThu/source-maps-with-coffeescript-and-uglify-js/)
* [Source Maps 101](http://net.tutsplus.com/tutorials/tools-and-tips/source-maps-101/)
* [Dynamic Source Maps](http://fitzgeraldnick.com/weblog/46/)
* [Example of Dynamic Source Maps](http://kybernetikos.github.io/jsSandbox/srcmaps/dynamic.html)
* [Source maps in browserify](http://thlorenz.com/blog/browserify-sourcemaps)
* [All you need to know about jQuery Source Maps](http://jquerybyexample.blogspot.com/2013/01/all-you-need-to-know-about-jquery-source-maps.html) - Brief tutorial for viewing in Chrome
* [Compiling to JavaScript, and Debugging with Source Maps](https://hacks.mozilla.org/2013/05/compiling-to-javascript-and-debugging-with-source-maps/) - How to write a compiler targeting JS and have it support source maps.

## Source maps for CSS
* [DevTools: Working with CSS Preprocessors](https://developer.chrome.com/devtools/docs/css-preprocessors) - full documentation and setup for using CSS sourcemaps.
* [The Breakpoint on _real_ CSS sourcemaps](http://www.youtube.com/watch?feature=player_detailpage&v=HijZNR6kc9A#t=470s) - Sass [landed v3 sourcemap generation](https://github.com/nex3/sass/pull/569) which will debut soon (along with Chrome DevTools UI support)

### CSS sourcemap support ([source](https://developer.chrome.com/devtools/docs/css-preprocessors#toc-css-preprocessor-support)):

-   **Sass**: As described above, this is supported in Sass 3.3.
-   **Compass**: The `--sourcemap` flag was [implemented in Compass 1.0][]. Alternatively you can add `sourcemap: true` to your config.rb file. [Demo repo here][]. Development notes are in [issue 1108][].
-   **Less**: Implemented in 1.5.0. See [issue \#1050][] for details and usage patterns.
-   **Autoprefixer**: Implemented in 1.0. [Autoprefixer docs][] explain how to use it, along with absorbing an input sourcemap (from another preprocessor).
-   **Libsass**: [Implemented][].
-   **Stylus**: Implemented. See the latest in [issue \#1655][].

[implemented in Compass 1.0]: http://compass-style.org/blog/2014/08/15/omg-compass-1-0/
[Demo repo here]: https://github.com/grayghostvisuals/sourcemaps
[issue 1108]: https://github.com/Compass/compass/issues/1108#issuecomment-52432075
[issue \#1050]: https://github.com/less/less.js/issues/1050#issuecomment-25566463
[Autoprefixer docs]: https://github.com/ai/autoprefixer#source-map
[Implemented]: https://github.com/hcatlin/libsass/commit/366bc110c39c26c9267a1cc06e578beb94cd93ef
[issue \#1655]: https://github.com/LearnBoost/stylus/pull/1655#issuecomment-52826158
