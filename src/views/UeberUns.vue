<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0" style="background-image: url(components/shape6.png)">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">

                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">

                            <div class="col-lg-3 order-lg-1">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/eliacavas.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                   <!-- <base-button type="info" size="sm" class="mr-4">Kontakt</base-button>-->
                                    <base-button type="default" size="sm" class="float-right">Kontakt</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-2">
                                <div class="card-profile-stats d-flex justify-content-center">

                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Elia Cavas

                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Inhaber</div>
                          <!--  <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer</div>-->
                            <div><i class="ni education_hat mr-2"></i>Produktfotos Prime</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p style="text-align:left;">Studiotür zu, Rollladen runter, Blitze und Musik an und Kopf in Kreativmodus. In meiner Zone fühle ich mich am wohlsten und das gibt mir Energie. Genau die Energie, die es braucht, um aus deinen Produktfotos das gewisse Extra für die Kaufentscheidung des Kunden herauszuholen.<br><br>
                                        Grundschule, Abitur, Studium, Bürojob – diese Kette habe ich nach meinem Bachelor-Studium (erst mal brav abgeschlossen) unterbrochen, weil ich mich nicht in einem „Nine to Five Job“ gesehen habe. Meine Gedanken waren ständig bei der Fotografie bis mich die Gedanken ans Fotografieren nächtelang wachgehalten haben. Aus diesem Hamsterrad bin ich ausgebrochen und habe mich nach 9 Jahren Fotografie selbstständig gemacht. Mittlerweile sind wir schon in Jahr 11. Jetzt dreht sich jeder Tag um die Fotografie und das ist perfekt so! Vor 5 Jahren habe ich meine Liebe zur persönlichen Weiterentwicklung entdeckt und seitdem liebe ich es neuen Herausforderungen entgegen zu sehen und daran zu wachsen, persönlich und fotografisch.
                                        <br><br>Hilfsbereit, empathisch, immer am lächeln und gut für eine kreative Idee – das bin Ich.
                                        Der Name Produktfotos Prime ist dadurch entstanden, dass ich Dinge die auf dem Schreibtisch liegen gerne schnell und qualitativ hochwertig abarbeite.
                                        Wenn du bis hier hin gelesen hast, dann lass uns doch gerne mal quatschen darüber wie wir deine Produktfotos auch auf das Prime-Level bringen.
                                    </p>
                                        <!-- <a href="#">Show more</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>

        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="row text-center justify-content-center">
                <div class="col-lg-10">
                    <h2 class="display-3 text-white">Kontakt</h2>

                </div>
            </div>
            <div class="container pt-lg pb-200">


            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Du hast noch Fragen?</h4>
                            <p class="mt-0">Ich beantworte sie dir gerne!</p>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Name"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Nachricht"></textarea>
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
    export default {
        name: "UeberUns"
    }
</script>

<style scoped>

</style>