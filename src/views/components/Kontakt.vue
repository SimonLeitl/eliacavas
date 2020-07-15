<template>

    <section class="section section-lg" id="kontakt">


    <container class="hidden-sm-down">

        <div class="row row-grid">

           <div class="col col-md-5  " id="kontakt-links">

               <div class="row row-grid justify-content-center">
                    <h3 class="text-secondary" style="padding-top:20px" id="terminTitelMobil">Lass uns über Dein Produkt reden!</h3>

                </div>
               <div class="row  justify-content-center">
                   <p style="color:white"> Jetzt einen kostenlosen Skype-Termin vereinbaren</p>
               </div>

             <div class="row row-grid justify-content-center" style="margin-top:45px" id="terminFelderMobil">
                 <div class="col-lg-4 col-sm-6" >
                     <input type="name" class="form-control" name="nameTermin" aria-describedby="emailHelp" placeholder="Name">
                     <base-input  addon-left-icon="ni ni-calendar-grid-58" cols="8" style="margin-top:30px">
                         <flat-picker slot-scope="{focus, blur}"
                                      @on-open="focus"
                                      @on-close="blur"
                                      :config="configs.termin"
                                      class="form-control datepicker"
                                      v-model="dates.simple"

                         >
                         </flat-picker>
                     </base-input>
                 </div>
                 <div class="col-lg-4 col-sm-6" id="emailMobil">
                     <input type="email" class="form-control" name="emailTermin" aria-describedby="emailHelp" placeholder="E-Mail">
                     <select id="inputState" class="form-control" cols="8" style="margin-top:30px;" name="uhrzeit">
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
             </div>

                   <div class="row  justify-content-center">





                   </div>
               <div class="row row-grid justify-content-center" style="margin-top: 30px">
                   <base-button v-on:click="terminMail" style="background-color:white;color:darkblue">Termin vereinbaren</base-button>
               </div>




            </div>

          <div class="col-md col-md-7 bg-secondary text-center">
              <div class="mb-3">
                <h3 style="padding-top:20px">Kontakt</h3>
              </div>
              <form id="kontaktTest" action="mailElia.php" method="POST">
              <div class="row row-grid justify-content-center">
                  <div class="col-lg-4 col-sm-6">
                      <input type="name" class="form-control " name="name" id="validationDefault01" aria-describedby="emailHelp" placeholder="Name" required>
                      <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="E-Mail" style="margin-top:25px;">
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <input type="name" class="form-control" name="nachname" aria-describedby="emailHelp" placeholder="Nachname">
                      <input type="tel" class="form-control" name="tel" aria-describedby="emailHelp" placeholder="Telefon" style="margin-top:25px;">

                  </div>


              </div>
              <div class="row row-grid justify-content-center" style="margin-top:-1px">
                  <div class="col-lg-8" rows="5" style="margin-top:25px">
                      <textarea class="form-control" name="nachricht" rows="6" placeholder="Nachricht"></textarea>
                  </div>

              </div>
              <div class="form-check" style="margin-bottom:15px; margin-top:17px">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                      Ich akzeptiere ...
                  </label>
              </div>
              <div class="row">
                  <div class="col">
                      <base-button v-on:click="mailTest" type="submit" >absenden</base-button>
                  </div>

              </div>

              </form>
            </div>


        </div>
        <div id="alertKontakt" class="alert alert-success alert-dismissible fade show" role="alert">
            Erfolgreich!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </container>
    </section>
</template>

<script>
    import $ from 'jquery'
    import DatePickers from "./JavascriptComponents/DatePickers";
    import flatPicker from "vue-flatpickr-component";
    import "flatpickr/dist/flatpickr.css";
    export default {
        components: {flatPicker},

        data() {
            return {
                dates: {
                    simple: "2020-07-14"
                },
                configs:{
                    termin:{
                        "disable": [
                            function(date) {
                                // return true to disable
                                return (date.getDay() === 0 || date.getDay() === 6);

                            }
                        ],
                        "locale": {
                            "firstDayOfWeek": 1 // start week on Monday
                        }
                    }
                }

            };
        },
        methods: {
            databse() {
                $.post("db_connection.php")/*   {
                        name: name,
                        nachname: nachname,
                        mail: mail,
                        telefon: telefon,
                        nachricht:nachricht
                    },*/
                /*     function (data) {

                        // die textausgabe zurück ins feld schreiben
                        $('#nachricht').val(data);
                    });*/
            },

            sendMail() {

                var name = $('input[name=name]').val();
                var nachname = $('input[name=nachname]').val();
                var mail = $('input[name=mail]').val();
                var telefon = $('input[name=telefon]').val();
                var nachricht = $('input[name=nachricht]').val();
                let json = '{"heroes":[{"id":"1","name":"CEO Steve Jobs"},{"id":"2","name":"Bill Gates"},{"id":"3","name":"Paul Allen"},{"id":"4","name":"Sundar Pichai"}]}';
                var test='test';
                var request = new XMLHttpRequest();
                request.open("GET", "produktfotos-prime.de/mailElia.php", true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(json);

                $.post("mailElia.php",
                    {
                        name: 'hallo'

                    },
                    function (data) {

                        // die textausgabe zurück ins feld schreiben
                        $('#nachricht').val(data);
                    });


            },
             mailTest(){
                 const field = "Name: " + document.querySelector("input[name=name]").value + " " + document.querySelector("input[name=nachname]").value + "\n Email: " + document.querySelector("input[name=email]").value + "\n Telefon: " + document.querySelector("input[name=tel]").value + "\n Nachricht: " + document.querySelector("textarea[name=nachricht]").value

                var data = {name:field , rank: "MID RANGE"};

            $.post('mailElia.php', data)
                 document.querySelector("input[name=name").value = 'Name';
                 document.querySelector("input[name=nachname").value = 'Nachname';
                 document.querySelector("input[name=email").value = 'E-Mail';
                 document.querySelector("input[name=tel").value = 'Telefon';
                 document.querySelector("textarea[name=nachricht").value = 'Nachricht';

                 document.getElementById("alertKontakt").style.visibility = "visible";
             },
            terminMail(){


                const datum=this.dates
                var myJSON = JSON.stringify(datum);
                const field = "Name: " + document.querySelector("input[name=nameTermin]").value + " " + "\n Email: " + document.querySelector("input[name=emailTermin]").value + "\n Uhrzeit: " + document.querySelector("select[name=uhrzeit]").value + "Datum: " + myJSON
                const mail= document.querySelector("input[name=emailTermin]").value

                var data = {name:field ,mail:mail };

                $.post('terminMail.php', data)

                document.querySelector("input[name=nameTermin").value = 'Name';
                document.querySelector("input[name=emailTermin").value = 'Email';
                document.getElementById("alertKontakt").style.visibility = "visible";
            }

        }

    }


</script>

<style scoped>
#alertKontakt{
    visibility: hidden;
}
    @media only screen and (max-width: 430px){
        #kontakt-links{

            margin-bottom:10px;
            padding-bottom:20px;
        }
        #emailMobil{
            margin-top:12px;
        }
        #terminTitelMobil {
            text-align: center;
            font-size: 22px;
        }
        #terminFelderMobil{
            margin-top:-25px;
        }
        #inputState{

        }

    }
</style>