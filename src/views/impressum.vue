<template>

    <div class="profile-page">
        <section class="section-profile-cover my-0 ueberuns" id="ueberuns">
            <div>
            </div>
        </section>
        <section class="section section-skew" id="eliaSection">
            <div class="container" id="cardElia">

                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">

                           <!-- <div class="col-lg-3 order-lg-1">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/eliacavas.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>-->
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <!-- <base-button type="info" size="sm" class="mr-4">Kontakt</base-button>-->
                                    <!--<base-button type="default" size="sm" class="float-right">Kontakt</base-button>-->
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-2">
                                <div class="card-profile-stats d-flex justify-content-center">

                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Impressum

                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Produktfotos-Prime</div>
                            <!--  <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer</div>-->
                          <!--  <div><i class="ni education_hat mr-2"></i>Produktfotos Prime</div>-->
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p style="text-align:left;"><b>Angaben gemäß § 5 TMG</b><br>
                                        Elia Cavas<br>
                                        Fotograf<br>
                                        Lärchenstraße 10<br>
                                        75217 Birkenfeld<br><br>

                                        <b>Kontakt</b><br>
                                        Telefon: 01771629782<br>
                                        E-Mail: info@produktfotos-prime.de<br><br>

                                        <b>Umsatzsteuer-ID</b><br>
                                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
                                        42 539 790 812<br><br>

                                        <b>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</b><br>
                                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.<br><br>

                                        <b>Haftung für Inhalte</b><br>
                                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br>

                                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br>

                                        <b>Haftung für Links</b><br>
                                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                                        <br><br>
                                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
<br><br>
                                        <b>Urheberrecht</b><br>
                                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
<br>
                                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
<br><br>
                                        Quelle: eRecht24
                                    </p>
                                    <!-- <a href="#">Show more</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>

        </section>
        </div>



</template>

<script>
    export default {
        name: "impressum"
    }
</script>

<style scoped>
    #ueberuns{
        background-image: url(components/shape7.jpg);
        background-repeat: no-repeat;
        background-size: 2000px;
        height:760px;
    }
    #cardElia{
        margin-top:-500px;
    }
</style>