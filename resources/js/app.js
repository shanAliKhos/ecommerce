require('./bootstrap');
import Vue from 'vue';
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue';
import { InertiaApp } from '@inertiajs/inertia-vue'; 
import { InertiaProgress } from '@inertiajs/progress'
import { InertiaForm } from 'laravel-jetstream';
import Toasted from 'vue-toasted';
import 'animate.css/animate.min.css'
 
// Vue.config.productionTip = false 
Vue.mixin({ methods: { route: window.route } })
 
Vue.prototype.$route = (...args) => route(...args).url()
Vue.use(InertiaApp)
Vue.use(InertiaForm)
Vue.use(PortalVue)
Vue.use(Toasted, {
    duration: 2000,
    position:'bottom-right',
})
Vue.use(VueMeta) 

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
})

let app = document.getElementById('app')

new Vue({
  metaInfo: {
    titleTemplate: (title) => title ? `${title} , OnlineShopping ` : 'OnlineShopping'
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app) 