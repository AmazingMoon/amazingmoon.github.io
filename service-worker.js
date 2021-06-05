/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970-01-01404.html",
    "revision": "315a207accbadd29d6eedad47ad306c4"
  },
  {
    "url": "1970/01/01/home/index.html",
    "revision": "3f9db3e6ccd789dfc58eac81e90a5c03"
  },
  {
    "url": "2017/11/17/sidekiq-cron/index.html",
    "revision": "619c79ba38f52ce008ee736ac8a8c6d3"
  },
  {
    "url": "2018/01/30/travis-ci-hexo/index.html",
    "revision": "5833abc8d3059b6554f2a37e2119bdd2"
  },
  {
    "url": "2018/11/12/fabric-peer/index.html",
    "revision": "7bd9f76ebaf8238e2638b15277ef729b"
  },
  {
    "url": "2018/12/27/linear-algebra-vector/index.html",
    "revision": "ef5f8a4494c6a204408d4f96dc901f04"
  },
  {
    "url": "2019/06/16/custom-expansion-panel/index.html",
    "revision": "6a4c4a3dc1f0d68d22678d1284fd317d"
  },
  {
    "url": "2019/07/05/mnist/index.html",
    "revision": "859d09d370abfad5252485eda373cee7"
  },
  {
    "url": "2019/10/21/js-array/index.html",
    "revision": "db2f0af056e924f826701f3b280cbed5"
  },
  {
    "url": "2020/10/23/axios/index.html",
    "revision": "a1389a00dd0936682a1fe92d158f4823"
  },
  {
    "url": "2021/01/21/js-concise-code/index.html",
    "revision": "17df4dc8e5677295b5a07b50dee39e30"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "cfcdd292233ce3ad85a4c9349ad8215b"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "5579a4b118e8b20cdc91572e7ffc14bd"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "943852052ff7b1f5abc25445066015ce"
  },
  {
    "url": "assets/css/0.styles.bb39ad9a.css",
    "revision": "f5e361fc245ea39c88f94773027f90ca"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
  },
  {
    "url": "assets/img/ci_hexo1.ee275aa3.png",
    "revision": "ee275aa3832feb44a6f3c78eb8de7bb3"
  },
  {
    "url": "assets/img/ci_hexo2.e00b0436.png",
    "revision": "e00b043686dcb79cbd9f41c23cd0f37b"
  },
  {
    "url": "assets/img/ci_hexo3.5b12b36f.png",
    "revision": "5b12b36f89de25c1925aafb9247f2fa5"
  },
  {
    "url": "assets/img/ci_hexo4.d6ec09d3.png",
    "revision": "d6ec09d3a99a0c3ed3257d4a2051c9c5"
  },
  {
    "url": "assets/img/fabric_peer1.c0ce944f.png",
    "revision": "c0ce944f4a1abc28c1cd1fcabe048716"
  },
  {
    "url": "assets/img/fabric_peer2.aa137ca9.png",
    "revision": "aa137ca90a4a4f5133a188ad700fe5de"
  },
  {
    "url": "assets/img/fabric_peer3.f50aa5bf.png",
    "revision": "f50aa5bf447d3e774f55cfaa1427d079"
  },
  {
    "url": "assets/img/fabric_peer4.87fd46ae.png",
    "revision": "87fd46ae9dca28ec010d2639c2db5e4e"
  },
  {
    "url": "assets/img/fabric_peer5.6b440489.png",
    "revision": "6b4404891193fc53e4e96262591d6eed"
  },
  {
    "url": "assets/img/fabric_peer6.ce271d96.png",
    "revision": "ce271d96e138008bebc2d191c982c76a"
  },
  {
    "url": "assets/img/fabric_peer7.77c798d4.png",
    "revision": "77c798d4b9a19949dec5d32dc097a29b"
  },
  {
    "url": "assets/img/fabric_peer8.6bed6329.png",
    "revision": "6bed6329c070f64b66ec6515d5496630"
  },
  {
    "url": "assets/img/fabric_peer9.e2e16aa7.png",
    "revision": "e2e16aa721ca763401a3107ccedea5d5"
  },
  {
    "url": "assets/img/flutter_expansion_panel_list_1.bd6d8592.png",
    "revision": "bd6d85924cdd311492d8f883d7f19378"
  },
  {
    "url": "assets/img/flutter_expansion_panel_list_2.145b85ec.png",
    "revision": "145b85ec5951c2c825317a826bac50a3"
  },
  {
    "url": "assets/img/linear_1_1.31dc9faa.png",
    "revision": "31dc9faa5281a74e8bd2ee4ebdadcb4f"
  },
  {
    "url": "assets/img/linear_1_10.ca46eecf.png",
    "revision": "ca46eecff2a38d6e89c0df430d470ce5"
  },
  {
    "url": "assets/img/linear_1_11.44b90f6d.png",
    "revision": "44b90f6d9bd363361c2131744acf6fb5"
  },
  {
    "url": "assets/img/linear_1_12.fd8e4c4d.png",
    "revision": "fd8e4c4db7ce2c6756f844608c5f121b"
  },
  {
    "url": "assets/img/linear_1_13.c9b6b2f9.png",
    "revision": "c9b6b2f907397ad86ac64411df829196"
  },
  {
    "url": "assets/img/linear_1_14.744bfb6d.png",
    "revision": "744bfb6df23554eabf2cc51a523df828"
  },
  {
    "url": "assets/img/linear_1_15.bd20605e.png",
    "revision": "bd20605ed81186abd9403f672ef1a924"
  },
  {
    "url": "assets/img/linear_1_16.e6487e3d.png",
    "revision": "e6487e3dc42c087e6ccce315927bc7d7"
  },
  {
    "url": "assets/img/linear_1_17.be2c8a5c.png",
    "revision": "be2c8a5cd3e557c0c93e306315d18912"
  },
  {
    "url": "assets/img/linear_1_2.88a4e781.png",
    "revision": "88a4e78133e0f173cac223fcbc76ea97"
  },
  {
    "url": "assets/img/linear_1_3.61c5464e.png",
    "revision": "61c5464ecb964cc88bc50748ee1efca5"
  },
  {
    "url": "assets/img/linear_1_4.642d94ad.png",
    "revision": "642d94ad29b052e0430960f51f0cf74d"
  },
  {
    "url": "assets/img/linear_1_5.200e6ebd.png",
    "revision": "200e6ebd9c166bc4fca3af1186842e6c"
  },
  {
    "url": "assets/img/linear_1_7.6782210a.png",
    "revision": "6782210a8f6b8f5526475bc824d1fc33"
  },
  {
    "url": "assets/img/linear_1_8.835e54e0.png",
    "revision": "835e54e003463e5f5edb7dface675a98"
  },
  {
    "url": "assets/img/linear_1_9.36d220f3.png",
    "revision": "36d220f3d7182531d516017d47c7025f"
  },
  {
    "url": "assets/img/mnist_1.7631f1f3.png",
    "revision": "7631f1f3f2c39566f605174ba1c0a151"
  },
  {
    "url": "assets/img/mnist_2.da2d1bd5.png",
    "revision": "da2d1bd56cbeecd634bb9ee3b3bb4c46"
  },
  {
    "url": "assets/img/mnist_3.11758fbc.png",
    "revision": "11758fbc2fc5bbbc60106926625b3a4f"
  },
  {
    "url": "assets/img/mnist_4.0acec2ef.png",
    "revision": "0acec2ef868832857529917b940815f6"
  },
  {
    "url": "assets/img/mnist_5.fbeada73.png",
    "revision": "fbeada731995e5e1b0cd349c73dcb116"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.995e6d61.js",
    "revision": "39eab624a83e89b37885899cfccb7906"
  },
  {
    "url": "assets/js/11.5791dc9f.js",
    "revision": "554d1a118fb319b36c1886136567b54d"
  },
  {
    "url": "assets/js/12.35c51424.js",
    "revision": "94e587ccd4874b8d6a3b03a83ecc915f"
  },
  {
    "url": "assets/js/13.787bfdec.js",
    "revision": "a804a2a401cf1be71b63268cc71381de"
  },
  {
    "url": "assets/js/14.8df87ab4.js",
    "revision": "d6e88217a9dfe213018c0764e4f928ba"
  },
  {
    "url": "assets/js/15.8a34dc9e.js",
    "revision": "8b014c9c1376b54b61bcda0196f57e8b"
  },
  {
    "url": "assets/js/16.b0582279.js",
    "revision": "e6786a0a4a2f50e5e681a2a3a6b04326"
  },
  {
    "url": "assets/js/17.9d66910e.js",
    "revision": "63fe6b5a7a48797c7c8e5c0f386e2aa3"
  },
  {
    "url": "assets/js/18.7714e12f.js",
    "revision": "7d9992041947fa8f4d2fb21ce8951022"
  },
  {
    "url": "assets/js/19.96aad1ed.js",
    "revision": "5870657c87c7092130b77ed7ba93f2ab"
  },
  {
    "url": "assets/js/20.7b2b4eb4.js",
    "revision": "1806d2dc47c63d0388178f346c3107ac"
  },
  {
    "url": "assets/js/21.4f20ebbb.js",
    "revision": "c9d250db2068533fdb084fd71d5bbdfc"
  },
  {
    "url": "assets/js/22.2a78bec8.js",
    "revision": "a50e02a407c1f1d552ed597363f9f9ed"
  },
  {
    "url": "assets/js/23.6c64260f.js",
    "revision": "08e5ed67556074b0203dccad80c1bcf7"
  },
  {
    "url": "assets/js/24.3031598d.js",
    "revision": "0bfa287b8f7635c1b700dd90ebd4af53"
  },
  {
    "url": "assets/js/25.12011f98.js",
    "revision": "39ef5b6305d8c4568fd7db9c3e8f5788"
  },
  {
    "url": "assets/js/26.b431b1c4.js",
    "revision": "fd25f7b80eb21cce80974de4c39b04f4"
  },
  {
    "url": "assets/js/3.4f9200e1.js",
    "revision": "13990dd4273b1b405df2298355547da6"
  },
  {
    "url": "assets/js/4.6483bf83.js",
    "revision": "c2f023b1f1d48b42fde9690dd318abcf"
  },
  {
    "url": "assets/js/5.cacbe004.js",
    "revision": "739f560ef6b42087cd2140f961fdfe1b"
  },
  {
    "url": "assets/js/6.0177cc13.js",
    "revision": "c4886cae0cb1bd638f2273d8a1cb19b8"
  },
  {
    "url": "assets/js/7.2fa2e616.js",
    "revision": "2bd7dd74e852424f7e436ac3b90274b0"
  },
  {
    "url": "assets/js/8.bffa29ee.js",
    "revision": "379d7c80b6e9e74e8145200f6ea76744"
  },
  {
    "url": "assets/js/9.6393dbb3.js",
    "revision": "f276abc5edd7114c031c996d1b4f8227"
  },
  {
    "url": "assets/js/app.7ee4ed36.js",
    "revision": "63cafcc7db7055c54609f88841fb635b"
  },
  {
    "url": "assets/js/vuejs-paginate.b1e5c227.js",
    "revision": "2a3f1247015f56c34ec566518eae0d08"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "72c208329c63d152aa513ea0c7935af1"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "da54e3c965fd16a9e47468eda96a2c6b"
  },
  {
    "url": "index.html",
    "revision": "f4693d2833dc4fe50fe6d7394f39e689"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "7d574b356e9231db38eecf6168b8f042"
  },
  {
    "url": "panda.png",
    "revision": "37581f2d412b94c9633a6ffc944b2c7b"
  },
  {
    "url": "posts/index.html",
    "revision": "e3c8b5ca5f624df7e97f7e78add99060"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "a4ab07bb28835c72809a0fe768ac94c3"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "bda43c266cc20274c1eb5d4c1e39d6eb"
  },
  {
    "url": "tag/Blockchain/index.html",
    "revision": "b9a9886cdb5314c8367bbf31dda21788"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "ba6490f1f68888f0770de4c7cc7fcd4e"
  },
  {
    "url": "tag/Flutter/index.html",
    "revision": "24aebb995283bb26a50f1e11d1da52a8"
  },
  {
    "url": "tag/index.html",
    "revision": "a9bea08acf8a536a8ea7370bb4856e90"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d424c20de8f1375691b13bacda7556f3"
  },
  {
    "url": "tag/MachineLearning/index.html",
    "revision": "44f7f67da09d009535e826869f2ef5be"
  },
  {
    "url": "tag/Math/index.html",
    "revision": "e494591e275b3fb1b6f4bda04b2f2271"
  },
  {
    "url": "tag/Ruby/index.html",
    "revision": "53453f90f8a33c340157542f61387756"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
