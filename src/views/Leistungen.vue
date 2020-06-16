<template>
    <div class="leistungen-page">
        <!-- Header-->
        <section class="leistung">
            <!-- Header Text -->
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <h1 class="pt-100 text-white" style="padding-top: 15%;">Leistungen</h1>
                    <h3 class="text-white" style="padding-top: 5%; text-align:center;" data-aos="fade-in"
                        data-aos-easing="ease-in-sine" data-aos-delay="200">Verkaufsförderndes und ansprechendes
                        Bildmaterial für dein Produkt</h3>
                    <p style="text-align:center;color:white" data-aos="fade-in" data-aos-delay="500"
                        data-aos-easing="ease-in-sine">Produktfoto ist nicht gleich Produktfoto. Es gibt verschiedene
                        Arten dein Produkt darzustellen. Die verschiedenen Möglichkeiten möchte ich dir hier vorstellen.
                    </p>
                </div>
            </div>
        </section>
        <!-- Beschreibung der Leistungen -->
        <section class="beschreibung" style="padding-right:15%; padding-left:15%;">            
                <!-- Heroshot -->
                <div class="row justify-content-center" style="padding-bottom:20%; width:100%; padding-top: 5%;">
                    <div class="col-lg " style="width:100%;  padding-right:10%; margin-top:-1%;" data-aos="fade-right"
                        data-aos-offset="500">
                        <img class="icon2" src="@/assets/Images/Heroshot.jpg" style="width:100%;">
                        <!-- "Bereitstellen der Bilder für Carousel, aufgrund von Bug" -->
                        <img class="none" src="@/assets/Images/Slider für Anwendungs-Montage (vorher (1).jpg"
                            style="width:100%;">
                        <img class="none" src="@/assets/Images/Slider für Anwendungs-Montage (nacher(2).jpg"
                            style="width:100%;">
                    </div>
                    <div class="col-lg">
                        <h1 style="color:#282d8c;">Heroshot</h1>
                        <hr>
                        <p class="text">Sichere dir den Klick deines
                            Kundens , dadurch dass
                            sich dein Startbild von der Masse der anderen
                            Produktfotos abhebt. Ich sorge dafür, dass sich dein
                            Produkt hervorhebt auch unter den Richtlinien von
                            Amazon und co.</p>
                    </div>
                </div>
                <!-- Anwendungsmontagen -->
                <div class="row justify-content-center" style="padding-bottom:20%; width:100%;">
                    <div class="col-lg">
                        <h1 style="color:#282d8c;">Anwendungsmontagen</h1>
                        <hr>
                        <p class="text">Fotoshooting mit echten Models können sehr
                            kostenintensiv sein. Mit einer Photoshop Montage
                            bestehend aus einem Stockfoto und deinem Produkt
                            gibt es eine kostengünstigere Variante. Dein Produkt
                            wird in der Perspektive des Stockfotos fotografiert. In
                            der Bildbearbeitung werden die Farbe, Schärfe und
                            Lichtreflexe der Umgebung angepasst.</p>
                    </div>
                    <div class="col-lg" style="padding-left: 10%; width:100%; margin-top: 1%;" data-aos="fade-left"
                        data-aos-offset="500">
                        <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                            <b-carousel id="carousel1" controls indicators>

                                <b-carousel-slide img-src="/img/Slider für Anwendungs-Montage (vorher (1).5f56f1bb.jpg">
                                    <p class="carousel-text" style="color:white;">Vorher</p>
                                </b-carousel-slide>
                                <b-carousel-slide img-src="/img/Slider für Anwendungs-Montage (nacher(2).b0c0c9ad.jpg">
                                    <p class="carousel-text">Nachher</p>
                                </b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>
                </div>
                <!-- Feature Grafik -->
                <div class="row justify-content-center" style="padding-bottom:20%; width:100%;">
                    <div class="col-lg" style="padding-right:10%; width:100%; margin-top: 1%;" data-aos="fade-right"
                        data-aos-offset="1000">
                        <img class="icon2" src="@/assets/Images/Infografik.jpg"
                            style="width:100%; padding-rihgt:20%; margin-top:0%;">
                    </div>
                    <div class="col-lg" style="">
                        <h1 style="color:#282d8c;">Feature
                            Grafik</h1>
                        <hr>
                        <p class="text">Dein Produkt wird sich besser verkaufen, wenn du deiner Zielgruppe alle Vorteile
                            deines Produktes näherbringst. Die Feauture Grafik ist dafür das passende
                            Instrument. Durch passende Icons und Texten überzeugen wir deinen Kunden von
                            deinem Produkt und sorgen so für das Vertrauen, das ausschlaggebend für die
                            Kaufentscheidung ist.</p>
                    </div>
                </div>
                <!-- Mood Shot -->
                <div class="row justify-content-center" style="padding-bottom:20%; width:100%;">
                    <div class="col-lg">
                        <h1 style="color:#282d8c;">Mood
                            Shot</h1>
                        <hr>
                        <p class="text">95% der Kaufentscheidungen werden durch Emotionen im Unterbewusstsein
                            ausgelöst. Ein Moodshot bündelt die Emotionen, die dein Produkt ausstrahlt und
                            kommuniziert diese auf dem visuellen Weg an deinen Kunden.</p>
                    </div>
                    <div class="col-lg" style="padding-left: 10%; width:100%; margin-top: 1%;" data-aos="fade-left"
                        data-aos-offset="1200">
                        <img class="icon2" src="@/assets/Images/Moodshot.jpg"
                            style="width:100%; padding-rihgt:20%; margin-top:0%;">
                    </div>
                </div>
                <!-- Social Proof -->
                <div class="row justify-content-center" style="padding-bottom:20%; width:100%;">
                    <div class="col-lg" style="padding-right:10%; width:100%; margin-top: 1%;" data-aos="fade-right"
                        data-aos-offset="1900">
                        <img class="icon2" src="@/assets/Images/Socialproof.jpg"
                            style="width:100%; padding-rihgt:20%; margin-top:0%;">
                    </div>
                    <div class="col-lg" style="">
                        <h1 style="color:#282d8c;">Social
                            Proof</h1>
                        <hr>
                        <p class="text">Dein Kunde nimmt deine Produktdarstellung schneller und vertrauenswürdiger
                            auf, wenn sich darin Kundenbewertungen befinden. Wir sammeln deine
                            Kundenbewertungen in einer Grafik und setzen sie visuell in Bezug zu deinem
                            Produkt.</p>
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
                    <div class="col-lg-8" data-aos="flip-down" data-aos-offset="2300">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Du hast noch Fragen?</h4>
                            <p class="mt-0">Ich beantworte sie dir gerne!</p>
                            <base-input class="mt-5" alternative placeholder="Name" addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative placeholder="Email" addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4" cols="80"
                                    placeholder="Nachricht"></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Senden
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    AOS.init();


    import {
        BCarousel
    } from "bootstrap-vue/esm/components/carousel/carousel";
    import {
        BCarouselSlide
    } from "bootstrap-vue/esm/components/carousel/carousel-slide";


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
        name: "leistungen",
        components: {
            BCarousel,
            BCarouselSlide
        }
    }
</script>

<style scoped>
    .none {
        display: none;
    }

    .text{
        font-size: 100%;
    }

    .carousel-text {
        color: white;
        font-size: 200%;
        position: absolute;
        right: -20%;
        bottom: -100%;
    }

    .leistung {
        background-image: url(Shape5.png);
        background-repeat: no-repeat;
        background-size: auto;
        padding-bottom: 12.5%;
    }

    .beschreibung {
        margin-top: 0;
    }
</style>