
<template> 

<swiper class="swiper" :options="swiperOption">    
    <swiper-slide class="slide-1"></swiper-slide>
    <swiper-slide class="slide-2"></swiper-slide>
    <swiper-slide class="slide-3"></swiper-slide>
    <swiper-slide class="slide-4"></swiper-slide>    
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
 
  components: {
      Swiper,
    SwiperSlide
  },
   directives: {
    swiper: directive
  },
  

data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 1,
          
          loop: true,
           autoplay: {
            delay: 2500            
          },
          loopFillGroupWithBlank: true,
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
    }
 
};

</script>
<style lang="scss" scoped>

    .swiper {
    height: 700px;
    padding-top:2%;

    .swiper-slide {
      background-position: center;
      background-size: cover;

      &.slide-1 {
       background-image:url(Savour.jpg)
      }
      &.slide-2 {
        background-image:url(DSC00013-31.jpg)
      }
      &.slide-3 {
        background-image:url(Duschbrocken.jpg)
      }
      &.slide-4 {
        background-image:url(OchaOchaTee.jpg)
      }      
    }
  }

</style>
