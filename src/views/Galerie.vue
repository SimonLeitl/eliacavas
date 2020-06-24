<template>
    <div class="galerie-page">
        <!-- Header-->
        <section class="galerie">
            <!-- Header Text -->
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <h1 class="pt-100 text-white" style="padding-top: 15%;">Galerie</h1>
                </div>
            </div>
        </section>
        <section class="AmazonEbay" style="padding-right:15%; padding-left:15%;">
            <div class="row justify-content-center">
                <h1 class="pt-100 text-black" style="">Amazon und Ebay</h1>

            </div>
            <hr>

            <div class="row gallery">
                
                <div class="col gallery" style="">
                   <a href="/img/1 Startfoto.43af1340.jpg"> <img class="img" id="img1"
                            src="@/assets/Images/1 Startfoto.jpg"></a>                    
                </div>
                <div class="col gallery" style="">
                    <a href="img/1%20Startfoto.43af1340.jpg"><img class="img" src="@/assets/Images/1 Startfoto.jpg"></a>
                </div>
                <div class="col gallery" style="">
                    <a href="img/1%20Startfoto.43af1340.jpg"><img class="img" src="@/assets/Images/1 Startfoto.jpg"></a>
                </div>
                <div class="col gallery" style="">
                    <a href="img/1%20Startfoto.43af1340.jpg"><img class="img" src="@/assets/Images/1 Startfoto.jpg"></a>
                </div>
            </div>
            <div class="row gallery">
                <div class="col gallery" style="">
                   <a href="/img/1 Startfoto.43af1340.jpg"> <img class="img" id="img1"
                            src="@/assets/Images/1 Startfoto.jpg"></a>                    
                </div>
                <div class="col gallery" style="">
                    <a href="img/1%20Startfoto.43af1340.jpg"><img class="img" src="@/assets/Images/1 Startfoto.jpg"></a>
                </div>
                <div class="col gallery" style="">
                    <a href="img/1%20Startfoto.43af1340.jpg"><img class="img" src="@/assets/Images/1 Startfoto.jpg"></a>
                </div>
                <div class="col gallery" style="">
                    <a href="img/1%20Startfoto.43af1340.jpg"><img class="img" src="@/assets/Images/1 Startfoto.jpg"></a>
                </div>
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
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8" data-aos="flip-down" data-aos-offset="1450">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Du hast noch Fragen?</h4>
                            <p class="mt-0">Ich beantworte sie dir gerne!</p>
                            <base-input class="mt-5" alternative placeholder="Name" addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative placeholder="Email" addon-left-icon="ni ni-email-83"></base-input>
                            <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4" cols="80"
                                    placeholder="Nachricht"></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">Senden</base-button>
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
    

    AOS.init();


    export default {
        AOS,
        data() {
            return {
                showIconsAnimation: false
            };
        },
        methods: {
            onScroll(evt) {
                console.log(evt);
            }
        },
        name: "galerie",
        

    };

    window.onload = function () {

    }
</script>

<style scoped>
    .galerie {
        background-image: url(Shape5.png);
        background-repeat: no-repeat;
        background-size: auto;
        padding-bottom: 16%;
    }

    

    .img {
        width: 100%;

    }

    .img {
        display: block;
        width: 100%;
        height: auto;
    }

    .col.gallery{
        transition: 1s;
        padding: 2%;
    }

    .col.gallery:hover{
    transform: scale(1.04);
    filter: grayscale(100%);
} 
</style>