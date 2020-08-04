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
    "url": "about/index.html",
    "revision": "87e5d6c2dcd4ebbd3427f53930b132ad"
  },
  {
    "url": "assets/css/0.styles.6a2e75fe.css",
    "revision": "af68feaa6e344f731b0d1657b41eb7ae"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8b45c11e.js",
    "revision": "fab682832a94cec926c3fab42e603c98"
  },
  {
    "url": "assets/js/10.df38b2c1.js",
    "revision": "91dc7511d747de54022207ce9e2bca5a"
  },
  {
    "url": "assets/js/11.f8ba8fe6.js",
    "revision": "d4e25f5e795e2aa854144c0b0f472ea3"
  },
  {
    "url": "assets/js/12.e2c77f08.js",
    "revision": "233a647e9096b0c2f0f6023bc16abb0b"
  },
  {
    "url": "assets/js/13.a22fb599.js",
    "revision": "dd800117c0c42219c5b2c2f462aaa3d1"
  },
  {
    "url": "assets/js/14.4c8c8842.js",
    "revision": "37e48a26a56fa88b5035f9854cffc504"
  },
  {
    "url": "assets/js/15.c182da6b.js",
    "revision": "b91fb73cdfafd885940d63721b29558a"
  },
  {
    "url": "assets/js/16.9667fc6d.js",
    "revision": "84657bfeebd68779e70ff405b26f4b7a"
  },
  {
    "url": "assets/js/17.bca01b62.js",
    "revision": "875924ce56a574ae32471bb131e7e2ba"
  },
  {
    "url": "assets/js/18.4f6b5ee1.js",
    "revision": "e1e4c0eb911a9a325ebdc03ef36165cd"
  },
  {
    "url": "assets/js/19.9c88b885.js",
    "revision": "9434766db7dc801ebdcdf3d1d97fcb57"
  },
  {
    "url": "assets/js/2.3aaac30c.js",
    "revision": "22a9ce193a55cf733f5dc06a236b938c"
  },
  {
    "url": "assets/js/20.b67d7650.js",
    "revision": "03e09a3242ba21a6039a20e5f9b49d54"
  },
  {
    "url": "assets/js/21.2045986a.js",
    "revision": "e4e621b5695f5f2d40022ddb8e9b9ea6"
  },
  {
    "url": "assets/js/22.43c4bbab.js",
    "revision": "0c4cbadd95d761802930d234190d26c3"
  },
  {
    "url": "assets/js/23.f4435bdf.js",
    "revision": "f24e95a8d43db0318b414deae4794667"
  },
  {
    "url": "assets/js/24.03757464.js",
    "revision": "a121d344beae35bb8b6547e970d73fb4"
  },
  {
    "url": "assets/js/25.dac36746.js",
    "revision": "eb81ed5eef7e600859c2e0c93d385565"
  },
  {
    "url": "assets/js/26.8abd746e.js",
    "revision": "9597a6a32bc8f814909c2c8033ef23fd"
  },
  {
    "url": "assets/js/27.75cfadab.js",
    "revision": "3a414cd91a9e9bbdbaa6feef9f5583f3"
  },
  {
    "url": "assets/js/5.02a6678d.js",
    "revision": "38bd8b5120eac91b5fe8408697af318c"
  },
  {
    "url": "assets/js/6.5348ac49.js",
    "revision": "b913ff21226281fb87bde032f0f699b5"
  },
  {
    "url": "assets/js/7.de492cac.js",
    "revision": "616b4f79de76d2334036ff6103f88e44"
  },
  {
    "url": "assets/js/8.457f3658.js",
    "revision": "b5f77cf3d1e1cac30db903daa2365890"
  },
  {
    "url": "assets/js/9.19fa1168.js",
    "revision": "d7f6dc2f45edfbc244957470d78d015e"
  },
  {
    "url": "assets/js/app.3f290c30.js",
    "revision": "52b94b27bed3cb51e64d93a081c96f01"
  },
  {
    "url": "assets/js/vendors~flowchart.cc654e06.js",
    "revision": "30a8f69aa61a8484879498d7a9146d01"
  },
  {
    "url": "categories/index.html",
    "revision": "087944415cc4d3f69e5d89adf826d765"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b9c12acc387307cb62cc8928e1095cda"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "43d5a308fd2382575689862152ac3d03"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/ali/app_layout.png",
    "revision": "014d0cfed63df7dee08863aad495507d"
  },
  {
    "url": "img/backEnd/16301aac714a64ae.jpg",
    "revision": "4b9f2b0305ea9628b130cc37fa578ed3"
  },
  {
    "url": "img/backEnd/16301aac716e8f24.jpg",
    "revision": "ab3e61b413226ee4fce4b2907b44be04"
  },
  {
    "url": "img/backEnd/169b3411b74cfff1.jpg",
    "revision": "fc3440da635511133e5f02f7d60d9ffa"
  },
  {
    "url": "img/backEnd/169b3432b128105d.jpg",
    "revision": "2c728d709f7647f7547f70b14eef297c"
  },
  {
    "url": "img/backEnd/CountDownLatch.png",
    "revision": "806db4304c12b0c08ff64a5fa2ce15ac"
  },
  {
    "url": "img/backEnd/jwt.png",
    "revision": "08f10cff7fa522a07bdb68b8615c23d2"
  },
  {
    "url": "img/docker/搜狗截图20180303145450.png",
    "revision": "b72094f2dc137f642b258d659ba7c5de"
  },
  {
    "url": "img/docker/搜狗截图20180303145531.png",
    "revision": "0192e016514ae6de37acb335483c6365"
  },
  {
    "url": "img/docker/搜狗截图20180303165113.png",
    "revision": "57658a824fedd4daf6c46fb28ddf9a2e"
  },
  {
    "url": "img/EChartsStudy/接入百度地图.png",
    "revision": "6536c736188c9ea30914de1c6f09e68c"
  },
  {
    "url": "img/EChartsStudy/柱+折线图.png",
    "revision": "012d1f48b8e15cf20e763ed5310210b0"
  },
  {
    "url": "img/EChartsStudy/迁徙图.png",
    "revision": "f9079e675926a79a70417595adf6ce6e"
  },
  {
    "url": "img/EChartsStudy/饼图.png",
    "revision": "5394c36784b787fd477693968c133693"
  },
  {
    "url": "img/essay/lmNRgg.png",
    "revision": "fd3cc2df1c32d13e911fc6349b4dc164"
  },
  {
    "url": "img/essay/lmUIQe.png",
    "revision": "b4204c68b6174c07220733dcaf165c3b"
  },
  {
    "url": "img/essay/lmUjW8.png",
    "revision": "1b4e086bec1e1c053c726cd7ba14b480"
  },
  {
    "url": "img/essay/lmUkxe.png",
    "revision": "ee27e01c1867214c85ea23a998707e7c"
  },
  {
    "url": "img/essay/lmUQG8.png",
    "revision": "4551e4806b560715c4910501cd4c756e"
  },
  {
    "url": "img/essay/NiceBlogExamples.png",
    "revision": "4ae74d1a112937624ddcb289604d9d2b"
  },
  {
    "url": "img/essay/ToDo.png",
    "revision": "6aa4b2d90ea09c3cbb13dbc24b5d3947"
  },
  {
    "url": "img/HashMap/20180423002750407.png",
    "revision": "f35b7d5feca86f51427b731dd5310e6e"
  },
  {
    "url": "img/itext/pdf2.png",
    "revision": "f557069c584ea0c2bf4031d2306beb5f"
  },
  {
    "url": "img/itext/pdf3.png",
    "revision": "18753afbd11acf6c3864eab6b2e2dd16"
  },
  {
    "url": "img/jvm/gc001.png",
    "revision": "9096a5c1aa708e99e4a0eb011c39f110"
  },
  {
    "url": "img/jvm/gc002.png",
    "revision": "04f03419851adab68f221464d5f236fe"
  },
  {
    "url": "img/jvm/gc003.png",
    "revision": "7c61067e76f98493875fb0318535706f"
  },
  {
    "url": "img/jvm/gc004.png",
    "revision": "fb57425f659c93e108b52848734291a5"
  },
  {
    "url": "img/jvm/gc005.png",
    "revision": "39041532371209775ba5bcf397604011"
  },
  {
    "url": "img/jvm/jvm001.png",
    "revision": "645747e72e6790bb9a70ae6166a61a33"
  },
  {
    "url": "img/jvm/jvm002.png",
    "revision": "f46c1bb2f52ba3826599cf6a5959313e"
  },
  {
    "url": "img/jvm/jvm003.png",
    "revision": "8cfa470daab1e9cde72e91a564182b95"
  },
  {
    "url": "img/jvm/jvm004.png",
    "revision": "53c75a6570d0adf443287266c0fe7efe"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "img/rabbitmq/mq001.png",
    "revision": "06c224d930a517e0c68f6db2032e4a07"
  },
  {
    "url": "img/rabbitmq/mq002.png",
    "revision": "4dee5cf620627c17c267d1a033d7ca86"
  },
  {
    "url": "img/rabbitmq/mq003.png",
    "revision": "ffb23d11d23ddbd85c04820b3d016cc6"
  },
  {
    "url": "img/rabbitmq/rabbitmq.png",
    "revision": "f8ed6faa42fcdba67c8ed7b2c59ac495"
  },
  {
    "url": "img/rabbitmq/topic.png",
    "revision": "76d56b40d2a16592fef156f73f228d20"
  },
  {
    "url": "img/rabbitmq/队列模型.png",
    "revision": "805d0059bd3df57f88b1fb5e0631a654"
  },
  {
    "url": "img/redis/redis02.png",
    "revision": "c48e246e53e5d501cd0fcbdf87258d33"
  },
  {
    "url": "img/redis/缓存更新.png",
    "revision": "29bb26641ac9ff576cffab4de9b0a4f7"
  },
  {
    "url": "img/redis/缓存查询.png",
    "revision": "2fc82232bd83608e50aa29ecba90b733"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/vuedemo/1.png",
    "revision": "ebc5b5e16665f1d3494b9ca7afce270f"
  },
  {
    "url": "img/vuedemo/2.png",
    "revision": "8c7a40b960334a58a097b1c2292a8fa4"
  },
  {
    "url": "img/vuedemo/3.png",
    "revision": "acb3adcb4752f27bc621c244252a63ae"
  },
  {
    "url": "img/vuedemo/4.png",
    "revision": "e0600647cb12f4f3a100383f91baa7c2"
  },
  {
    "url": "img/vuedemo/5.png",
    "revision": "c0b6c66dd9e8df10c0dda568268ff314"
  },
  {
    "url": "img/vuedemo/6.png",
    "revision": "2ccae59d8c1134edc7fdaf0a6e41e78d"
  },
  {
    "url": "index.html",
    "revision": "63bc9cdff02a95ab2e63014c92bc0cf5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/project.html",
    "revision": "c8cda5ce7d2d8a08fd070f581eca5b0d"
  },
  {
    "url": "tag/index.html",
    "revision": "21b85156aafd76d4c5bc3b3085c94988"
  },
  {
    "url": "tags/git/index.html",
    "revision": "58e8e10c4d972d86252a51cd8ed100b8"
  },
  {
    "url": "tags/JavaScript Node.js/index.html",
    "revision": "faec42e873c86f10e77fbcf63d6cbe94"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "985ae4efcb5feb534ecd2104a6beebde"
  },
  {
    "url": "timeline/index.html",
    "revision": "192eed06bc2e96a5e66c3e519fade977"
  },
  {
    "url": "view/index.html",
    "revision": "a09647b70a89f2f20be131eed7d89428"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/love.html",
    "revision": "68de52e48f4306179d313c0604d4ef57"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心1.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "views/front-end/jeffywin-cli.html",
    "revision": "7f43e1580e8d60d12c1bc458f1393ec2"
  },
  {
    "url": "views/index.html",
    "revision": "a4f36c410e2b78bb506d8691deea92f6"
  },
  {
    "url": "views/specification/git.html",
    "revision": "24ebf94c2309ac8f28e88fd133f59398"
  },
  {
    "url": "views/todo/finalChapter_19.html",
    "revision": "5c496d824251f69d4390cb75999e05bb"
  },
  {
    "url": "vuepress/fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "ab7a9c264c4e2e0cddbf8a3229e8b2a0"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/topic.jpeg",
    "revision": "6362b2577914b0b2a597412cf04da62c"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  },
  {
    "url": "vuepress/zpj80231-logo.png",
    "revision": "a2aa1799583b0104477b398b98b757c3"
  },
  {
    "url": "vuepress/zpj80231-logo2.png",
    "revision": "97de419e4928299047a1de1b2b249f63"
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
