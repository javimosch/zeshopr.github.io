importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "lti-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f1d50ddedba18e5ec0ba.js",
    "revision": "4b807cbe6734abcbd18e067585f35c71"
  },
  {
    "url": "/_nuxt/layouts/app-guess.7d0f8c4ec3d0b69b1f56.js",
    "revision": "c9e35f14199a6080be1628022ee1b044"
  },
  {
    "url": "/_nuxt/layouts/app.6257c23804a8cbf8ed4f.js",
    "revision": "687ac71eba02779f19e0b9b3ccc2703a"
  },
  {
    "url": "/_nuxt/layouts/default.bb343051fb4ac9e6ed49.js",
    "revision": "9f7c526e001d28cbf9907efe486eada5"
  },
  {
    "url": "/_nuxt/manifest.e3bf587eb817f6203b9a.js",
    "revision": "2f4f7309b24752790c8d7e12e0c21859"
  },
  {
    "url": "/_nuxt/pages/backup.d64de245c33c54722abc.js",
    "revision": "136638126d1fe6bd96ecdf50af7b1150"
  },
  {
    "url": "/_nuxt/pages/dashboard/index.bb21860bc4583f1a93ef.js",
    "revision": "f2660cc67e56bfff2c6d293a8b4c2fab"
  },
  {
    "url": "/_nuxt/pages/index.b77e75df051b9293b490.js",
    "revision": "7003ebe6c7b8195f8308ef83cbb5ccf9"
  },
  {
    "url": "/_nuxt/pages/login/google/callback/index.c5729adde02a0d9b97de.js",
    "revision": "c488500c9067f9fdee6f73fabbd0e311"
  },
  {
    "url": "/_nuxt/pages/login/index.438b73c6fc4df18588a1.js",
    "revision": "d9ad25d725e2adba8641f873fc89589c"
  },
  {
    "url": "/_nuxt/pages/settings/databases/_id.0393e7c4dcdd1d3a41fb.js",
    "revision": "136b98fa5edb806e6d29eaf188354fe5"
  },
  {
    "url": "/_nuxt/pages/settings/index.28caf4f14275ee837066.js",
    "revision": "cbddb86bde243a6a3c46ec3cd9e04c06"
  },
  {
    "url": "/_nuxt/pages/test/index.865e5ee83058e4245e22.js",
    "revision": "3c8baff22a21e9ad768df7ce21f7634c"
  },
  {
    "url": "/_nuxt/vendor.1ee6f5fb1c9e40f5a8cd.js",
    "revision": "3d0f76d3c6ffa3dfa70c5d8d82f03206"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://my-cdn.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

