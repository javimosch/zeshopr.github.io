importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "lti-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2769bce8038746faac18.js",
    "revision": "83b4d64d36baa7ed993104c3f7e24114"
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
    "url": "/_nuxt/layouts/default.feb117348b8a42ef1f00.js",
    "revision": "daf2358440b6a1c76e9e7252679a6b46"
  },
  {
    "url": "/_nuxt/manifest.54203d96a5832171ec54.js",
    "revision": "754ce415ee24709070461aa623defbc6"
  },
  {
    "url": "/_nuxt/pages/dashboard/index.35b384a81b9b6e154819.js",
    "revision": "4a4f86b67b47ba82894952b789943564"
  },
  {
    "url": "/_nuxt/pages/index.39e079b8b98e14312199.js",
    "revision": "63fd4e35a384d570c5eda3ad146baa23"
  },
  {
    "url": "/_nuxt/pages/login/google/callback/index.7a729be4f3ad71cdc8b2.js",
    "revision": "30a9043eb82b60b9099441dda9efb356"
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
    "url": "/_nuxt/vendor.dadb34923c77ed6121e5.js",
    "revision": "1e828b0add2cc016c9c8e45d20800cdc"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://my-cdn.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

