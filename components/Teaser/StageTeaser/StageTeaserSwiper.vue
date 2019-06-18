<style lang="postcss" module>
  .componente {
    width: 100%;
    background-color: white;
    min-height: 50vh;
  }
</style>
<template>
  <div :class="$style.componente">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <StageTeaser />
          </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
</template>

<script>
import StageTeaser from './StageTeaser';

export default {
  components: {
    StageTeaser
  },
  data () {
      return {
        banners: [ 'https://via.placeholder.com/300X150/f00', 'https://via.placeholder.com/300X150/ff0', 'https://via.placeholder.com/300X150/0ff' ],
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    // mounted() {
    //   setTimeout(() => {
    //     this.banners.push('https://via.placeholder.com/300X150/aaa')
    //     console.log('banners update')
    //   }, 3000)
    //   console.log(
    //     'This is current swiper instance object', this.mySwiper,
    //     'It will slideTo banners 3')
    //   this.mySwiper.slideTo(3, 1000, false)
    // }
}

</script>
