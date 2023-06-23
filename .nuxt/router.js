import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fa163de = () => interopDefault(import('../pages/about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _241f3089 = () => interopDefault(import('../pages/about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _0896fef7 = () => interopDefault(import('../pages/about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _31061d9d = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _4ccaccff = () => interopDefault(import('../pages/contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _5b36db05 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _0e876f84 = () => interopDefault(import('../pages/distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _40e5fa6c = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _29541e0a = () => interopDefault(import('../pages/gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _0270a1c0 = () => interopDefault(import('../pages/gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _5b0b9e60 = () => interopDefault(import('../pages/kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _7fd27987 = () => interopDefault(import('../pages/kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _60f657f3 = () => interopDefault(import('../pages/landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _33f49226 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _5671848c = () => interopDefault(import('../pages/online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _96ab0746 = () => interopDefault(import('../pages/pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _f9b8509e = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _fbeae16c = () => interopDefault(import('../pages/purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _3e083d13 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _6e47a72b = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _610c46b0 = () => interopDefault(import('../pages/university.vue' /* webpackChunkName: "pages/university" */))
const _0163ef20 = () => interopDefault(import('../pages/yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _f7b61f8c = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _22a803d6 = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _1c2642bd = () => interopDefault(import('../pages/blog/blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _47277a75 = () => interopDefault(import('../pages/blog/blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _39a56f47 = () => interopDefault(import('../pages/ConvocatoriasDetalle/detallesssss.vue' /* webpackChunkName: "pages/ConvocatoriasDetalle/detallesssss" */))
const _fc87f04c = () => interopDefault(import('../pages/course/course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _05732b02 = () => interopDefault(import('../pages/course/course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _0556fc00 = () => interopDefault(import('../pages/course/course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _c9d5a76c = () => interopDefault(import('../pages/course/course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _51062e84 = () => interopDefault(import('../pages/course/course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _32ec11fe = () => interopDefault(import('../pages/course/course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _aa8aa594 = () => interopDefault(import('../pages/course/course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _4b53c2e4 = () => interopDefault(import('../pages/course/course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _36a13ea0 = () => interopDefault(import('../pages/event/event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _597a9dc8 = () => interopDefault(import('../pages/event/event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _d28b51c0 = () => interopDefault(import('../pages/event/event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _a1685684 = () => interopDefault(import('../pages/instructor/instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _1a8c12fe = () => interopDefault(import('../pages/instructor/instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _e3968014 = () => interopDefault(import('../pages/instructor/instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _7098f4b8 = () => interopDefault(import('../pages/instructor/instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _146509ef = () => interopDefault(import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _07216595 = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _c3a38136 = () => interopDefault(import('../pages/shop/product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _c35912d8 = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _50b362a8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _8c915100 = () => interopDefault(import('../pages/Convocatorias/_categoria.vue' /* webpackChunkName: "pages/Convocatorias/_categoria" */))
const _f44f033a = () => interopDefault(import('../pages/ConvocatoriasDetalle/_detalle.vue' /* webpackChunkName: "pages/ConvocatoriasDetalle/_detalle" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us-one",
    component: _1fa163de,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _241f3089,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _0896fef7,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _31061d9d,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _4ccaccff,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _5b36db05,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _0e876f84,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _40e5fa6c,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _29541e0a,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _0270a1c0,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _5b0b9e60,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _7fd27987,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _60f657f3,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _33f49226,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _5671848c,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _96ab0746,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _f9b8509e,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _fbeae16c,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _3e083d13,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _6e47a72b,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _610c46b0,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _0163ef20,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _f7b61f8c,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _22a803d6,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _1c2642bd,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _47277a75,
    name: "blog-blog-standard"
  }, {
    path: "/ConvocatoriasDetalle/detallesssss",
    component: _39a56f47,
    name: "ConvocatoriasDetalle-detallesssss"
  }, {
    path: "/course/course-details",
    component: _fc87f04c,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _05732b02,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _0556fc00,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _c9d5a76c,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _51062e84,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _32ec11fe,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _aa8aa594,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _4b53c2e4,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _36a13ea0,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _597a9dc8,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _d28b51c0,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _a1685684,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _1a8c12fe,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _e3968014,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _7098f4b8,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _146509ef,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _07216595,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _c3a38136,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _c35912d8,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _50b362a8,
    name: "index"
  }, {
    path: "/Convocatorias/:categoria?",
    component: _8c915100,
    name: "Convocatorias-categoria"
  }, {
    path: "/ConvocatoriasDetalle/:detalle?",
    component: _f44f033a,
    name: "ConvocatoriasDetalle-detalle"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
