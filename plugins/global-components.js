import Vue from 'vue'

import Picture from '@/components/common/Picture'
import Button from '@/components/common/Button'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.component('Picture', Picture)
Vue.component('Button', Button)

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
