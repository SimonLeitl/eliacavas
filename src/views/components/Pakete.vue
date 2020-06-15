<template>
    <section class="section-pakete section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="row text justify-content-center" @mouseover="showIconsAnimation = true">
            <div class="col-lg-8 text-center">
                <h1 class="mb-0" style="color:white;padding-top:25px;">Pakete</h1>
            </div>
        </div>

        <div class="row section-testimonials test justify-content-center text-center">

          <!--  <div class="col-sm-4 ">
                <div data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom">
                    <div class="shadow-lg  mb-5 bg-white rounded">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Amazon/Ebay</h5>
                            </div>
                            <div class="card-body" id="amazon">
                                <p class="card-text">Test</p>
                            </div>
                            <div class="card-footer bg-secondary">
                                <a href="#" class="button">Preise auf Anfrage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
            <div id="amazonEbay" class="col-sm-4 ">
                <div data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-delay="200">
                    <div class="shadow-lg  mb-5 bg-white rounded">
                        <div class="card1">
                            <div class="card-header">
                                <h5 class="card-title" style="font-weight:bold;">Amazon/Ebay</h5>
                            </div>
                            <div class="card-body" id="onlineshop">
                                <p class="card-text"> Ich hole in Rahmen der Foto-Richtlinien das beste aus deinen Fotos heraus, damit du dich von deinen Mitbewerbern hervorhebst und dir so den Klick des Kunden sicherst.
                                </p>
                            </div>
                            <div class="card-footer bg-secondary">
                                <a href="#" class="button">Preise auf Anfrage</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-sm-4">
                <div data-aos="fade-up"

                     data-aos-delay="100">
                    <div class="shadow-lg  mb-5 rounded" style="background-color:#282d8c">
                        <div class="card2">
                            <div class="card-header">
                                <h5 class="card-title" style="font-weight:bold;">Social Media Paket</h5>
                            </div>
                            <div class="card-body " id="socialMedia">

                                <p class="card-text">Du benötigst regelmäßig Content zum vermarkten
                                    deiner Produkte? Ich helfe dir mit Social- Media optimiertem
                                    Poduktfotos deine Zielgruppe zu erreichen.<br>Wir legen ein
                                    gemeinsames Bildkonzept und den Umfang des Paketes zusammen fest.
                                    <br><br>Mögliche Konstellationen:</p>


                                <ul class="list-group list-group-flush" style="color:black; width:217px; margin-left:10px;">
                                    <li class="list-group-item">30 Fotos/Monat</li>
                                    <li class="list-group-item">15 Fotos/Monat</li>
                                    <li class="list-group-item">10 Fotos/Monat</li>
                                </ul>
                            </div>
                            <div class="card-footer bg-secondary">
                                <a href="#" class="button">Preise auf Anfrage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="onlineshopCard" class="col-sm-4 ">
                <div data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-delay="200">
                    <div class="shadow-lg  mb-5 bg-white rounded">
                        <div class="card3">
                            <div class="card-header">
                                <h5 class="card-title" style="font-weight:bold;">Onlineshop-Paket</h5>
                            </div>
                            <div class="card-body" id="onlineshop">
                                <p class="card-text">Im Vergleich zu Amazon und Ebay gelten hier
                                    deine eigenen Spielregeln und unserer Kreativität sind keine
                                    Grenzen gesetzt.
                                </p>
                            </div>
                            <div class="card-footer bg-secondary">
                                <a href="#" class="button">Preise auf Anfrage</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "Pakete"
    }
</script>

<style scoped>
    #onlineshop, #amazon{
        height:300px;
        vertical-align: middle;
    }
    #onlineshop, #amazonebay p{
        display: table-cell;
        vertical-align:middle;
    }
    #amazon p{
        display: table-cell;
        vertical-align: middle;
    }
    #socialMedia{
        color:white;
    }
    .section-testimonials{
        padding-top:5%;
        padding-right: 20%;
        padding-left: 20%;
        background-image: url(ShapeTest.png);
        background-size: cover ;
        background-repeat: no-repeat;
    }

    .card-title{
        border: 2px grey;
        margin-bottom: 0;
    }

    .firma{
        color:white;
    }
    .card-text{
        padding:5%;

    }

    .quote{
        padding-top: 5%;
    }

    .card1{
        margin-top:150px;
        background-size:  500% 95px;
        background-repeat: no-repeat;
        background-position-x: 0px;



    }
    .card2{

        background-size:  500% 95px;
        background-repeat: no-repeat;
        background-position-x: -500px;
    }
    .card3{
        margin-top:150px;
        background-size:  500% 95px;
        background-repeat: no-repeat;
        background-position-x: -1000px;
    }
</style>