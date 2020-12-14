require('./bootstrap');
import Vue from 'vue';
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue';
import { InertiaApp } from '@inertiajs/inertia-vue'; 
import { InertiaProgress } from '@inertiajs/progress'
import { InertiaForm } from 'laravel-jetstream';
import Toasted from 'vue-toasted'; 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import 'vue-glide-js/dist/vue-glide.css'
import 'boxicons' 
 
// Vue.config.productionTip = false 

Vue.mixin({ methods: { route: window.route } })

// Vue.prototype.$route = (...args) => route(...args).url()
 
Vue.use(InertiaApp)

Vue.use(InertiaForm)

Vue.use(PortalVue)

Vue.use(VueMeta) 

Vue.use(VueSweetalert2);

Vue.use(Toasted, {
    duration: 2000,
    position:'bottom-right',
})
 
InertiaProgress.init({ 
  delay: 150,  
  includeCSS: true,
  color: '#ea4335',
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