import Vue from 'vue'

import Picture from '@/components/common/Picture'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.component('Picture', Picture)

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
