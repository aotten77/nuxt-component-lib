<template>
  <div class="container">
    <div class="componente">
<div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <Picture></Picture>

      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
  </div>
    </div>
  </div>
</template>

<script>

export default {

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
    mounted() {
      setTimeout(() => {
        this.banners.push('https://via.placeholder.com/300X150/aaa')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper,
        'It will slideTo banners 3')
      this.mySwiper.slideTo(3, 1000, false)
    }
}

</script>

<style>
.container {
  max-width: 1680px;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
  background-color: gray;
  padding-left: 20px;
    padding-right: 20px;



}


.componente {
  width: 100%;
  background-color: white;
  min-height: 50vh;
}

@media (min-width: 521px) {
  .container {
    padding-left: 45px;
    padding-right: 45px;
  }
}


</style>
