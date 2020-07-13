<template>

    <section class="section section-lg" id="kontakt">


    <container class="hidden-sm-down">

        <div class="row row-grid">

           <div class="col col-sm-5 hidden-sm-down" id="kontakt-links">

               <div class="row row-grid justify-content-center">
                    <h3 class="text-secondary" style="padding-top:20px">Lass uns über Dein Produkt reden!</h3>

                </div>
               <div class="row  justify-content-center">
                   <p style="color:white"> Jetzt einen kostenlosen Skype-Termin vereinbaren</p>
               </div>

             <div class="row row-grid justify-content-center">
                    <div id="datepickerKontakt" >
                        <date-pickers></date-pickers>
                     </div>
             </div>
                   <div class="row  justify-content-center">
                       <form>
                       <div class="form-group col-md-4">
                           <label for="inputState" style="color:white;"></label>
                           <select id="inputState" class="form-control" style="width:120px">
                               <option selected>8:00 Uhr</option>
                               <option>9:00 Uhr</option>
                               <option>10:00 Uhr</option>
                               <option>11:00 Uhr</option>
                               <option>12:00 Uhr</option>
                               <option>13:00 Uhr</option>
                               <option>14:00 Uhr</option>
                               <option>15:00 Uhr</option>
                               <option>16:00 Uhr</option>
                               <option>17:00 Uhr</option>
                               <option>18:00 Uhr</option>
                           </select>
                       </div>
                   </form>
                   </div>
               <div class="row row-grid justify-content-center" style="margin-top: 30px">
                   <base-button style="background-color:white;color:darkblue">Termin vereinbaren</base-button>
               </div>




            </div>

          <div class="col col-sm-7 bg-secondary text-center">
              <div class="mb-3">
                <h3 style="padding-top:20px">Kontakt</h3>
              </div>
              <div class="row row-grid justify-content-center">
                  <div class="col-lg-4 col-sm-6">
                      <base-input alternative
                                  placeholder="Name" id="name">

                      </base-input>
                      <base-input alternative
                                  placeholder="Email"
                                  addon-left-icon="" id="mail">
                      </base-input>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <base-input alternative
                                  placeholder="Nachname" id="nachname">
                      </base-input>
                      <base-input alternative
                                  placeholder="Telefon"
                                  addon-right-icon="" id="telefon">
                      </base-input>
                  </div>


              </div>
              <div class="row row-grid justify-content-center" style="margin-top:-1px">
                  <div class="col-lg-8" rows="5">
                      <base-input>
                          <textarea class="form-control form-control-alternative" name="name" rows="6"
                                    cols="80" placeholder="Deine Nachricht" id="nachricht"></textarea>
                      </base-input>
                  </div>

              </div>
              <div class="form-check" style="margin-bottom:15px;">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                      Ich akzeptiere ...
                  </label>
              </div>
              <div class="row">
                  <div class="col">
                      <base-button v-on:click="sendMail()">absenden</base-button>
                  </div>

              </div>
            </div>

        </div>

    </container>
    </section>
</template>

<script>

    import DatePickers from "./JavascriptComponents/DatePickers";
    export default {
        components: {DatePickers},
        data() {
            return {
                dates: {
                    simple: "2019-07-1"
                }
            };
        }
    };

    function sendMail(){

        var name=$('input[name=name]').val();
        var nachname=$('input[name=nachname]').val();
        var mail=$('input[name=mail]').val();
        var telefon=$('input[name=telefon]').val();
        var nachricht=$('input[name=nachricht]').val();

        $.post("mailElia.php",
            {
                name: name,
                nachname: nachname,
                mail: mail,
                telefon: telefon,
                nachricht:nachricht
            },
            function (data) {

                // die textausgabe zurück ins feld schreiben
                $('#nachricht').val(data);
            });
    }


</script>

<style scoped>

</style>