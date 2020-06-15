<template>
        <div class="leistungen-page">
        <!-- Header-->
        <section class="section-shaped my-0 pb-300">
            <div class="shape shape-style-1 shape-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <!-- Header Text -->
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                        <h1 class="pt-100 text-white">Leistungen</h1>
                        <h3 class="text-white">Verkaufsförderndes und ansprechendes Bildmaterial für dein Produkt</h3>
                        <p style="text-align:center;color:white">Produktfoto ist nicht gleich Produktfoto. Es gibt verschiedene Arten dein Produkt darzustellen. Die verschiedenen Möglichkeiten möchte ich dir hier vorstellen.</p>
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
        name: "leistungen"
    }
</script>

<style scoped>

</style>