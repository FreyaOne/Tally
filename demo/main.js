import Vue from 'vue'
import App from './App'
// import Router from 'uni-simple-router'

// import routerLink from './node_modules/uni-simple-router/component/router-link.vue'
import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

// Vue.component('router-link',routerLink)
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
// Vue.use(Router)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
