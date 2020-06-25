<template>

        <section class="section section-lg overflow-hidden my-0">
            <div class="container hidden-sm-down">
            <div class="row row-grid justify-content-center">
                <div class="col-lg-10 text-center">
                    <h2 class="display-3">Ablauf
                      <!--  <span class="text-success">Ablauf</span>-->
                    </h2>
                    <tabs fill class="flex-column flex-md-row">

                        <card shadow slot-scope="{activeTabIndex}">

                            <tab-pane key="tab1">
                                <template slot="title">
                                    Strategiegespräch
                                </template>

                                <p class="description" style="text-align: left">In einem ersten Telefonat, klären wir ab, wer deine Zielgruppe ist. Weiterhin ist es wichtig zu wissen, ob es Varianten deines Produktes gibt, die es zu fotografieren gilt.
                                    Hast du schon Vorstellungen und Wünsche oder brauchst du noch Beratung dazu, was am besten zu deinem Produkt und deiner Marke passt?</p>

                            </tab-pane>

                            <tab-pane key="tab2">
                                <template slot="title">
                                  Foto-Briefing
                                </template>

                                <p class="description" style="text-align: left;">Es wird detailliert aufgeschrieben, welche Art von Fotos erstellt wird und was genau auf den Fotos zu sehen sein wird. Weiterhin halten wir fest, welche Fotos der Konkurrenz wir überbieten müssen, damit du dich klar von deinen Konkurrenten abheben kannst. Das Fotobriefing ist dann auch die Checkliste für das Fotoshooting.
                                    Im Fotobriefing wird also ein Fotokonzept festgehalten. Nachdem wir das Fotobriefing gemeinsam durchgesprochen haben einigen wir uns auf ein Fotokonzept.</p>
                            </tab-pane>

                            <tab-pane key="tab3">
                                <template slot="title">
                                    Fotoshooting
                                </template>

                                <p class="description" style="text-align: left;">Hier beginne ich dein Fotokonzept umzusetzen
                                    Dein Produkt wird hochwertig in allen wichtigen Ansichten abgebildet. Zusätzlich werden emotionale Moodshots und Lifestyle-Bilder erstellt. Falls erwünscht können wir auch Fotos mit Model erstellen.</p>
                            </tab-pane>
                            <tab-pane key="tab4">
                                <template slot="title">
                                    Coporate Design
                                </template>

                                <p class="description" style="text-align: left;">Ein eigens für dich angefertigtes Gesamtdesign schafft den Wiedererkennungswert für deine Produktfotos und deine Marke und gibt deinem Markenauftritt die nötige Professionalität. Hier fließen deine Unternehmenswerte bei der Erstellung des Designs mit ein.</p>
                            </tab-pane>
                            <tab-pane key="tab5">
                                <template slot="title">
                                   Bildbearbeitung
                                </template>

                                <p class="description" style="text-align: left">Jetzt beginnt der zeitintensivste Teil meiner Arbeit. Beginnend beim Freistellen deines Produktes für die Hintergrundanforderungen für z.B. Amazon und E-Bay wird eine exakte und verkaufsfördernde Darstellung deines Produktes erschaffen. Kratzer und Staub werden wegretuschiert. Deine Kunden möchten nicht von Text erschlagen werden in deiner Produktdarstellung. Gezielte und prägnante Infografiken, die über deine Vorteile informieren erzeugen Vertrauen beim Kunden, was wiederrum verkaufsfördernd wirkt. Die Infografiken werden dann noch in dein Coperate Design eingearbeitet.</p>
                            </tab-pane>
                            <tab-pane key="tab6">
                                <template slot="title">
                                   Feedback
                                </template>

                                <p class="description" style="text-align: left">Ich stelle dir deine fertigen Produktfotos persönlich vor. In einer anschließenden Revisionsrunde, werden deine Änderungswünsche eingebaut und die fertigen Bilddateien werden dir per Downloadlink zur Verfügung gestellt.</p>
                            </tab-pane>


                          <!--  <tab-pane key="tab3">
                                <template slot="title">
                                    <i class="ni ni-calendar-grid-58 mr-2"></i>Abgabe
                                </template>

                                <p class="description">Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                                    keffiyeh dreamcatcher synth.</p>
                            </tab-pane>-->
                        </card>

                    </tabs>
                </div>
            </div>
            </div>

        </section>
</template>

<script>
    import Tabs from "@/components/Tabs/Tabs.vue";
    import TabPane from "@/components/Tabs/TabPane.vue";
    export default {
        name: "ablauf",
        components: {
            Tabs,
            TabPane
        }
    }
</script>

<style scoped>

</style>