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
    "revision": "ec4f58d35899fc355659908f9480088c"
  },
  {
    "url": "1970/01/01/home/index.html",
    "revision": "2100296907ef38c5eab06ba5f9a16bf9"
  },
  {
    "url": "2017/11/17/sidekiq-cron/index.html",
    "revision": "4eeb9aa794ef03b669902f85b942a4c5"
  },
  {
    "url": "2018/01/30/travis-ci-hexo/index.html",
    "revision": "878f9d5e63501c2e7c0b1d0323a37cc8"
  },
  {
    "url": "2018/11/12/fabric-peer/index.html",
    "revision": "3569f25bfe4ff87e9174177f65299e2d"
  },
  {
    "url": "2018/12/27/linear-algebra-vector/index.html",
    "revision": "5491349ec56ea16e18961e9a8f26d011"
  },
  {
    "url": "2019/06/16/custom-expansion-panel/index.html",
    "revision": "752b23465ce4a0c021a65dab064ba665"
  },
  {
    "url": "2019/07/05/mnist/index.html",
    "revision": "10a1000a8bdea2d0bdbddc0caf541976"
  },
  {
    "url": "2019/10/21/js-array/index.html",
    "revision": "cb4f271d062a0991d401c72eec36e8a1"
  },
  {
    "url": "2020/10/23/axios/index.html",
    "revision": "7b6f16033e6dd6500b908a967f0f130d"
  },
  {
    "url": "2021/01/21/js-concise-code/index.html",
    "revision": "579fb55756b413bbdcd77792b7c1ab6b"
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
    "url": "assets/css/0.styles.527d5b08.css",
    "revision": "6c40931275f3c3f3039dc0b9559b693b"
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
    "url": "assets/js/10.dbe5ab57.js",
    "revision": "c3fb22ad491286c48135276962b91266"
  },
  {
    "url": "assets/js/11.f9694223.js",
    "revision": "f89008bcdb952dee50f9e4627740e63f"
  },
  {
    "url": "assets/js/12.e2cc0e8b.js",
    "revision": "d43ef8b5ae5433427392042e72cf6af2"
  },
  {
    "url": "assets/js/13.ed2ae81d.js",
    "revision": "f5d580ca3b27bf800a11a2e441dfa3c0"
  },
  {
    "url": "assets/js/14.45516b03.js",
    "revision": "9529f099dee047af5cfd77c47eb8fa8e"
  },
  {
    "url": "assets/js/15.0b7e5f47.js",
    "revision": "c6c25136a6e02add18b07461837beeb7"
  },
  {
    "url": "assets/js/16.eef8aa84.js",
    "revision": "df963e3e1258db79e1635d21fe4426e5"
  },
  {
    "url": "assets/js/17.f5c4e2be.js",
    "revision": "8515ce2adfc05cad082eded9a19b5e35"
  },
  {
    "url": "assets/js/18.308930b3.js",
    "revision": "166a827c18bb12a068815fde624e4e0f"
  },
  {
    "url": "assets/js/19.80da8366.js",
    "revision": "afeb25295850ae7f8f6584a4761b6431"
  },
  {
    "url": "assets/js/20.22e0d8d8.js",
    "revision": "bae5e69288ba2af84de9e6aed63de3b3"
  },
  {
    "url": "assets/js/21.baf8aa4c.js",
    "revision": "9b75fd78993d9b26e3d1c193db155a6b"
  },
  {
    "url": "assets/js/22.0ba721b1.js",
    "revision": "157a438ca96e73d6cb912ffbcdd18f87"
  },
  {
    "url": "assets/js/23.a21fb971.js",
    "revision": "944a1200b525ee6b345ca2f6c35ce8d7"
  },
  {
    "url": "assets/js/24.229b50c8.js",
    "revision": "ea28e525a7389fba245f8a187c576256"
  },
  {
    "url": "assets/js/25.51731d47.js",
    "revision": "a0d92b391bc90c78103b8ccf7a7e6e1f"
  },
  {
    "url": "assets/js/26.bd4c47b8.js",
    "revision": "203f58e5c455af5a7cdf45d6467d171d"
  },
  {
    "url": "assets/js/3.22c34537.js",
    "revision": "8d3f013dfd348aabb5022e744056e49b"
  },
  {
    "url": "assets/js/4.da800994.js",
    "revision": "934e589ebe5ea9d23b68a008a31a4419"
  },
  {
    "url": "assets/js/5.83d23993.js",
    "revision": "00e8117457a0d0689b80653f04ed0cf6"
  },
  {
    "url": "assets/js/6.21d3010c.js",
    "revision": "d619c6c3384accc4e6f59a8e9e4b5c4f"
  },
  {
    "url": "assets/js/7.da414c2e.js",
    "revision": "79e219457cf94e417a0830e6797c4049"
  },
  {
    "url": "assets/js/8.8e2266c7.js",
    "revision": "8c2775eff8029a0e808d8fe26fc82dff"
  },
  {
    "url": "assets/js/9.f9a5c970.js",
    "revision": "be949829052b00cd566dc0618ce76bf9"
  },
  {
    "url": "assets/js/app.8d5bbb38.js",
    "revision": "c36e9c4728d64a16eb13a63e92f67833"
  },
  {
    "url": "assets/js/vuejs-paginate.a832fb5e.js",
    "revision": "24c56275ffafedb38879b9a35326760d"
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
    "revision": "edd155d46754e82f717ac4ea8f440c83"
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
    "revision": "dad8915a2cb89f634b04880b34063ad2"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "56b2d9dd4601b16d3f27bc8bfb80e04d"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "bda43c266cc20274c1eb5d4c1e39d6eb"
  },
  {
    "url": "tag/Blockchain/index.html",
    "revision": "eec540dcce847766117e64319275405f"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "810a726c18b2d9521713c3f6aca02cbb"
  },
  {
    "url": "tag/Flutter/index.html",
    "revision": "f6888623c74f38cf88c152c1d3fe69f2"
  },
  {
    "url": "tag/index.html",
    "revision": "82b9b2036098133a928bd605bd316a09"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "27bcb791e4e1c47377d145f829f68746"
  },
  {
    "url": "tag/MachineLearning/index.html",
    "revision": "1728073cabcca7dd321cf429c57729ba"
  },
  {
    "url": "tag/Math/index.html",
    "revision": "255e1219f352551ff9629dd6f1e58578"
  },
  {
    "url": "tag/Ruby/index.html",
    "revision": "94d4c09346dc571fc8b1673549863a61"
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
