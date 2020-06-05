<template>
    <div>
        <hero></hero>
        <leistungen></leistungen>        
        <portfolio></portfolio>
        <testimonials></testimonials>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <!--<navigation></navigation>-->
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel>
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

export default {
  name: "components",
  components: {
    Hero,
    Leistungen,
    Swiper,
    SwiperSlide,
    Portfolio,
    Testimonials,
    BasicElements,
    Inputs,
    CustomControls,
    //Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection
  }
};
</script>
