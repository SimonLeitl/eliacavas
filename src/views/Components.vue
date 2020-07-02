<template>
    <div>
        <hero></hero>
        <leistungen></leistungen>        
        <portfolio></portfolio>
        <testimonials></testimonials>
        <ablauf></ablauf>
      <!--  <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>-->
        <!--<navigation></navigation>-->
      <!--  <javascript-components></javascript-components>-->
        <!--<icons></icons>-->
      <!--  <examples></examples>
        <download-section></download-section>-->
        <carousel></carousel>
        <pakete></pakete>
        <faq></faq>
        <Kontakt></Kontakt>
    </div>
</template>

<script>
import Hero from "./components/Hero";
import Leistungen from "./components/Leistungen";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import faq from "./components/faq";
import ablauf from "./components/ablauf";
import Kontakt from "./components/Kontakt";
import Pakete from "./components/Pakete";


export default {
  name: "components",
  components: {

    Hero,
    Leistungen,
    Swiper,
    SwiperSlide,
    Portfolio,
    AOS,
    Testimonials,
      Kontakt,
        ablauf,
   // BasicElements,
    //Inputs,
    //CustomControls,
    //Navigation,
    //JavascriptComponents,
   // Carousel,
      Pakete,
    faq
    //Icons,
    //Examples,
    //DownloadSection
  }
};
</script>
