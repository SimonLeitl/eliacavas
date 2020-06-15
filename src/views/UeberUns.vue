<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
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
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
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
                                    <p>Die Fotografie begleitet mich nun schon seit 10 Jahren durch mein Leben. Nach 12 Jahren Schule und 5 Jahren Studium habe ich dann auch endlich mal gemerkt, dass die Leidenschaft zur Fotografie mich so fesselt, dass ich ihr meine volle Aufmerksamkeit widmen wollte. So kam es zum Entschluss meinen abgeschlossenen Bachelor of Engineering auf Eis zu legen und seitdem agiere ich als Hochzeitsfotograf in Pforzheim.

                                        ​

                                        Nachdem ich die Hochzeiten meiner 42.923 Cousins und Cousinen, die mir alle zugesichert haben die Fotos seien besser als die des gebuchten Fotografen, fotografiert habe und ich dabei ein unglaublich erfüllendes Gefühl  hatte nach jedem eingefangenem Moment der Liebe und Freude war es für mich klar, das ist mein Ding!

                                        ​

                                        Meine geduldige Art übertrage ich gerne auf meine Fotografie. Ich lauere als Hochzeitsfotograf gerne im Hintergrund auf die magischen Momente eurer Zweisamkeit, anstatt euch mit überzogenen Posinganweisungen zu überschütten. Eine ins Ohr geflüsterte Liebesbekundung lässt eure Augen unendlich mal mehr strahlen als ein Hinterherziehen des Bräutigams an der Krawatte (sowas und andere gestellte Posen wird es bei mir nie geben! :D ).

                                        ​

                                        Eine Hochzeit kann durchaus eine stressige Angelegenheit werden, deshalb möchte ich mir mit euch die Zeit nehmen während den Shootings, damit ihr euch auf das konzentrieren könnt, was euch verbindet, nämlich eure Liebe.

                                        Dazwischen gibt es natürlich auch die schnell wechselnden Momente in denen ich einfach abliefern muss bei der Dokumentation Eurer Hochzeit. Aber kein Problem, genauso würde ich mein Leben beschreiben. Eine Mischung aus kurzen Leistungssprints gemischt mit Momenten des einfachen Seins.

                                        ​

                                        Wenn ich euch mit meinem mit Romantik und Esoterik geladenen Ausschweif über meine Leidenschaft begeistern konnte, würde ich mich freuen euch persönlich kennenzulernen! :)</p>
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