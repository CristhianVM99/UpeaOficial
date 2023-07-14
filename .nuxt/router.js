import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e6f48d6 = () => interopDefault(import('../pages/about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _52aaed0d = () => interopDefault(import('../pages/about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _0d9fe70a = () => interopDefault(import('../pages/about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _62134f99 = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _14916b83 = () => interopDefault(import('../pages/contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _22fd7989 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6dd3c9f0 = () => interopDefault(import('../pages/distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _605a2f30 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _48220302 = () => interopDefault(import('../pages/gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _bc98f9c8 = () => interopDefault(import('../pages/gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _4ba4abe4 = () => interopDefault(import('../pages/kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _bb49c6fa = () => interopDefault(import('../pages/kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _518f6577 = () => interopDefault(import('../pages/landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _08899eac = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _f6057de0 = () => interopDefault(import('../pages/online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _5199c14e = () => interopDefault(import('../pages/pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _9ca0d796 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _9ed36864 = () => interopDefault(import('../pages/purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _05cedb97 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _11337b27 = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _d17f09a8 = () => interopDefault(import('../pages/university.vue' /* webpackChunkName: "pages/university" */))
const _bb8c4728 = () => interopDefault(import('../pages/yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _1b6bb536 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _5133c05a = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _9925f08e = () => interopDefault(import('../pages/blog/blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _ce8d560e = () => interopDefault(import('../pages/blog/blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _0bca877a = () => interopDefault(import('../pages/ConvocatoriasDetalle/detallesssss.vue' /* webpackChunkName: "pages/ConvocatoriasDetalle/detallesssss" */))
const _44402254 = () => interopDefault(import('../pages/course/course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _3fe6fb0a = () => interopDefault(import('../pages/course/course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _3fcacc08 = () => interopDefault(import('../pages/course/course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _26b1f264 = () => interopDefault(import('../pages/course/course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _290ec342 = () => interopDefault(import('../pages/course/course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _6b9a520c = () => interopDefault(import('../pages/course/course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _e937b99c = () => interopDefault(import('../pages/course/course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _3acaf040 = () => interopDefault(import('../pages/course/course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _754e52a8 = () => interopDefault(import('../pages/event/event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _1409494c = () => interopDefault(import('../pages/event/event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _514902a4 = () => interopDefault(import('../pages/event/event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _0e28448c = () => interopDefault(import('../pages/instructor/instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _2a15bd06 = () => interopDefault(import('../pages/instructor/instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _20130c1c = () => interopDefault(import('../pages/instructor/instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _11538ea0 = () => interopDefault(import('../pages/instructor/instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _0c62ea2a = () => interopDefault(import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _29aa0891 = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _5a98ee2e = () => interopDefault(import('../pages/shop/product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _7e47cce0 = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _4fc67cb8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2fb43f04 = () => interopDefault(import('../pages/Convocatorias/_categoria.vue' /* webpackChunkName: "pages/Convocatorias/_categoria" */))
const _7e13a95f = () => interopDefault(import('../pages/ConvocatoriasDetalle/_detalle.vue' /* webpackChunkName: "pages/ConvocatoriasDetalle/_detalle" */))
const _19720562 = () => interopDefault(import('../pages/ConvocatoriasLista/_categoria.vue' /* webpackChunkName: "pages/ConvocatoriasLista/_categoria" */))

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
    component: _3e6f48d6,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _52aaed0d,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _0d9fe70a,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _62134f99,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _14916b83,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _22fd7989,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _6dd3c9f0,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _605a2f30,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _48220302,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _bc98f9c8,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _4ba4abe4,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _bb49c6fa,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _518f6577,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _08899eac,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _f6057de0,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _5199c14e,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _9ca0d796,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _9ed36864,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _05cedb97,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _11337b27,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _d17f09a8,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _bb8c4728,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _1b6bb536,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _5133c05a,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _9925f08e,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _ce8d560e,
    name: "blog-blog-standard"
  }, {
    path: "/ConvocatoriasDetalle/detallesssss",
    component: _0bca877a,
    name: "ConvocatoriasDetalle-detallesssss"
  }, {
    path: "/course/course-details",
    component: _44402254,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _3fe6fb0a,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _3fcacc08,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _26b1f264,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _290ec342,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _6b9a520c,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _e937b99c,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _3acaf040,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _754e52a8,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _1409494c,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _514902a4,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _0e28448c,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _2a15bd06,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _20130c1c,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _11538ea0,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _0c62ea2a,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _29aa0891,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _5a98ee2e,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _7e47cce0,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _4fc67cb8,
    name: "index"
  }, {
    path: "/Convocatorias/:categoria?",
    component: _2fb43f04,
    name: "Convocatorias-categoria"
  }, {
    path: "/ConvocatoriasDetalle/:detalle?",
    component: _7e13a95f,
    name: "ConvocatoriasDetalle-detalle"
  }, {
    path: "/ConvocatoriasLista/:categoria?",
    component: _19720562,
    name: "ConvocatoriasLista-categoria"
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
