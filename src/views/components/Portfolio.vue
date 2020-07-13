
<template>

<section>
    <div class="container">
        <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
            <div class="col-lg-8 text-center">
                <h1 class="mb-0" style="">Portfolio</h1>
                <p>Lass dich inspirieren von meinen bisher angefertigten Produktfotos. Das reicht dir noch nicht? Hier in der Galerie findest du mehr Beispiele.</p>
            </div>
        </div>
    </div>
<swiper class="swiper" :options="swiperOption" style="align-self: stretch;">    
    <swiper-slide class="slide-1"></swiper-slide>
    <swiper-slide class="slide-2"></swiper-slide>
    <swiper-slide class="slide-3"></swiper-slide>
    <swiper-slide class="slide-4"></swiper-slide>    
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>

    <container>
        <div class="row justify-content-center" @mouseover="showIconsAnimation = true" style="padding-top: 30px;">
            <div class="col-lg-8 text-center">
        <base-button type="primary"><router-link to="/galerie" class="nav-link nav-link-icon" style="color:white">Mehr</router-link></base-button>
            </div>
        </div>
    </container>
</section>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

var x=3;

        
if (screen.width<800) {
x = 1;
} else if (screen.width<1200){
     x = 2;
}
else {
     x = 3;
}
    

       
    
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
          
          slidesPerView: x,
          spaceBetween: 10,
          slidesPerGroup: 1,
          
          
          loop: true,
           autoplay: {
            delay: 5000
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
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% auto;
      

      &.slide-1 {
       background-image:url(Savour2.jpg)
      }
      &.slide-2 {
        background-image:url(DSC00013-33.jpg)
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
