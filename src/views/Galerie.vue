<template>
    <div class="galerie-page">
        <!-- Header-->
        <section class="galerie">
            <!-- Header Text -->
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    
                    <h1 class="pt-100 text-white" style="padding-top: 15%;" data-aos="fade-in" data-aos-duration="1000">
                        Galerie</h1>
                </div>
            </div>
        </section>
      <section class="AmazonEbay" style="">
         
            <div class="row justify-content-center">
                <h1 class="pt-100 text-black" style="color: #282d8c" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1000">Amazon und Ebay</h1>
            </div>         

            <hr>

            <div class="row gallery">
                <ul style="text-align: center;" class="ulist">                     
                    <li v-for="(image, index) in media.slice(0,19)" :key="index"
                     style="display: inline-block; padding:1%;" class="list" data-aos="fade-down">                       
                        <div class="overlay">
                            <a class="icon" title="User Profile">
                                <i class="icon icon-sm ni ni-zoom-split-in"></i>
                            </a>
                        </div>
                        <img v-lazy="image.src || image.thumb" class="liimg" style=" height: 15em;"
                         @click="openGallery(index)" >                         
                    </li>
                </ul>
                <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" />
            </div>
        </section>
        <section class="Socialmedia" style="" >
            <!-- xs -->
            <div class="row justify-content-center ">                
                <div class="col d-block d-sm-none" align="center">
                <h1 class="pt-100 text-black " style="color: #282d8c" data-aos="fade-in" data-aos-duration="1000" 
                data-aos-delay="0">Socialmedia und Onlineshop</h1>
                </div>
            </div>
            <!-- all other -->
            <div class="row justify-content-center">
                <div class="col d-none d-sm-block" align="center" >
                <h1 class="pt-100 text-black" style="color: #282d8c" data-aos="fade-in" data-aos-duration="1000" 
                data-aos-delay="0">Socialmedia und Onlineshop</h1>
                </div>
            </div>
            <hr>

            <div class="row gallery justify-content-center" >
                 <ul style="text-align: center;" class="ulist">                     
                    <li v-for="(image, index) in media_sm" :key="index"
                     style="display: inline-block; padding:1%;" class="list" data-aos="fade-down">                       
                        <div class="overlay">
                            <a class="icon" title="User Profile">
                                <i class="icon icon-sm ni ni-zoom-split-in"></i>
                            </a>
                        </div>
                        <img v-lazy="image.src || image.thumb" class="liimg" style=" height: 15em;"
                         @click="openGallery2(index)">                                                 
                    </li>
                </ul>
             
     
                
            </div>
        </section> 
        <!-- Kontakt Hintegrund Shape-->
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <!-- Kontakt Überschrift -->
            <div class="row text-center justify-content-center">
                <div class="col-lg-10">
                    <h2 class="display-3 text-white">Kontakt</h2>
                </div>
            </div>
            <div class="container pt-lg pb-200">
                <!-- Kontakthintergrund Containergröße-->
            </div>
        </section>
        <!-- Kontaktformular-->
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container" id="contact">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8" data-aos="flip-down" >
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Du hast noch Fragen?</h4>
                            <p class="mt-0">Ich beantworte sie dir gerne!</p>
                            <base-input class="mt-5" alternative placeholder="Name"  addon-left-icon="ni ni-user-run">
                                <input type="name" class="form-control" name="name" placeholder="Name">
                            </base-input>
                            <base-input alternative placeholder="Email" addon-left-icon="ni ni-email-83" name="mail">
                                <input type="email" class="form-control" name="email" placeholder="E-Mail">
                            </base-input>
                            <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="nachricht" rows="4" cols="80"
                                          placeholder="Nachricht"></textarea>
                            </base-input>
                            <base-button v-on:click="mailTest" type="default" round block size="lg">Senden</base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import AOS from "aos";
    import "aos/dist/aos.css"; 
    import media from './media'
    import media_sm from './Socialmediaimg'
    import LightBox from 'vue-image-lightbox'
    import $ from "jquery";
    require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
    AOS.init({
        duration:1000,
        offset: 200,
    });
    export default {
        AOS,
        name: "galerie",
        media,
        media_sm,
   
        components: {
            LightBox,
        },
        methods:{
          removeelements(){
           
        },
        openGallery(index) {
                this.$refs.lightbox.showImage(index)
        },
         openGallery2(index) {
                this.$refs.lightbox.showImage(index+19)
            },

                mailTest(){
                    const field = "Name: " + document.querySelector("input[name=name]").value + "\n Email: " + document.querySelector("input[name=email]").value +  "\n Nachricht: " + document.querySelector("textarea[name=nachricht]").value

                    var data = {name:field , rank: "MID RANGE"};

                    $.post('mailElia.php', data)
                }

        },

            data () {
                
    return {
    media,
    media_sm,
    }
  },
    };
    

    window.onload = function () {
        
       
    }
   
</script>

<style scoped>

    .galerie {
        background-image: url(components/shape6.jpg);
        background-repeat: no-repeat;
        background-size: 2000px;
        padding-bottom: 410px;
    }

    .AmazonEbay {
        padding-right: 5%;
        padding-left: 5%;
        

    }

    .Socialmedia {
        padding-right: 5%;
        width: 100%;
        padding-left: 5%;
        padding-top: 0%;
        padding-bottom: 10%;;
    }    

    .img {
        display: block;
        padding: 0.5%;        
        height: auto;
        transition: 0.8s;
    }   

    ul li{
        position: relative;
    }

    ul li img{
        display: block;
        opacity: 1;
    }

    ul li:hover img{opacity: 0.1;}  

    /* The overlay effect (full height and width) - lays on top of the container and over the image */
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: auto;
        opacity: 1;
        transition: .3s ease;
        background-color: white;
        z-index: -1;
    }

   
    /* The icon inside the overlay is positioned in the middle vertically and horizontally */
    .icon {
        color: #282d8c;
        font-size: 200%;
        position: absolute;
        right:37%;
        top: 45%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    .icon-sm {
        color: #282d8c;
        font-size: 200%;
        position: absolute;
        bottom: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    /* When you move the mouse over the icon, change color */
    .fa-user:hover {
        color: #eee;
    }
</style>