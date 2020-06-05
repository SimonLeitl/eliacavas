<template>
    <div>
        <hero></hero>
        <leistungen></leistungen>
        <ablauf></ablauf>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <!--<navigation></navigation>-->
        <javascript-components></javascript-components>
        <!--<icons></icons>-->
      <!--  <examples></examples>
        <download-section></download-section>-->
        <carousel></carousel>
        <faq></faq>
        <Kontakt></Kontakt>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Leistungen from "./components/Leistungen";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";
import faq from "./components/faq";
import ablauf from "./components/ablauf";
import Kontakt from "./components/Kontakt";

export default {
  name: "components",
  components: {
      Kontakt,
      Hero,
      Leistungen,
      ablauf,
    BasicElements,
    Inputs,
    CustomControls,
    //Navigation,
    JavascriptComponents,
    Carousel,
    faq
    //Icons,
    //Examples,
    //DownloadSection
  }
};
</script>
