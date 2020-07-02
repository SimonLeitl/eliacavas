<template>
    <section class="section leistungen">

            <div class="container" @mouseleave="showIconsAnimation = false">
                <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
                    <div class="col-lg-8 text-center">
                        <h1 class="mb-0" style="color: white;">Hiermit kann ich dir weiterhelfen</h1>
                        <p style="color:white">Produktfotos zu erstellen ist ein kreativer Prozess, den ich für dich ausführe. Mit meiner Erfahrung leite ich dich in meinem
                            Prozess von der Konzepterstellung zu den fertigen Produktfotos.</p>
                    </div>

                </div>
            </div>
                <div class="container" id="icons">
                    <div class="row ">
                        <div class="col-sm " style="padding-top:5%;">

                            <div data-aos="fade-down-right">  

                                <img class="icon2" src="@/assets/Images/Kamera_ic.png" style="width:30%; margin-bottom: -1%; ">
                            <h5  style="color:white; padding-top: 5px;">
                                 10 Jahre Erfahrung
                            </h5>
                            <p class="ic_text">Ich fotografiere seit 2010 und kann meine Erfahrung bestens

                                    nutzen um dein Produkt mit all seinen Vorteilen darzustellen.</p>                                                               
                        </div></div>   
                        <div class="col-sm" style="padding-top:5%; padding-right:1%">     
                            <div data-aos="fade-down">

                                <img class="icon2" src="@/assets/Images/Beratung_ic.png" style="width:30%; padding-bottom: 3%;">
                            <h5 style="color:white; padding-top: 5px;" >
                                Beratung
                            </h5>
                            <p class="ic_text"  >Du weißt noch nicht was du genau haben möchtest? Kein
Problem ich helfe dir bei der Ideenfindung und stehe dir

beratend zur Seite.</p>  
                              </div>                               
                        </div>
                        <div class="col-sm" style="padding-top:4%;"> 
                            <div data-aos="fade-down-left">    
                                <img class="icon2" src="@/assets/Images/CorperateDesign_ic.png" style="width:30%;">                            

                                <h5 style="color:white; margin-top: 4%;">
                               Coperate
Design
                            </h5>
                            <p class="ic_text">Ein eigens für dich angefertigtes Gesamtdesign schafft den
Wiedererkennungswert für deine Produkfotos und deine
Marke und gibt deinem Markenauftritt die nötige

Professionalität.</p>  
                               </div>                              

                        </div>
                    </div>
                </div>
                 <div class="container" style="padding-top:3%;">
                    <div class="row " style="">

                      <div class="col-sm " style=" padding-top:5%; padding-right:2.5%;">  
                          <div data-aos="fade-up-right">                            

                                <img class="icon2" src="@/assets/Images/Konzept_ic.png" style="width:30%;">
                                <h5 style="color:#282d8c; padding-top: 5%;" >
                                Konzepterstellung
                            </h5>
                            <p class="ic_text2">Ich erstelle für dich ein Fotokonzept, mit dem du dein Produkt
erfolgreich promoten kannst. Die Vorteile deines Produktes
werden dem Kunden explizit näher gebracht, was

verkaufsfördernd wirkt.</p>  
                           </div>                                  
                        </div>
                       <div class="col-sm" style="padding-left: 0%; padding-top:5.6%; padding-right:2.8%;"> 
                           <div data-aos="fade-up">

                              <img class="icon2" src="@/assets/Images/click_ic.png" style="width:30%;">
                                <h5 class="ic_title_dark" style="padding-top: 2%;"  >
                                Sichere dir den Klick
                            </h5>
                            <p  class="ic_text2" >Einfache
Packshots begeistern keinen mehr. Mit welchen Vorteilen
sticht dein Produkt aus der Masse heraus? Diese Vorteile arbeite ich in
aussagekräftigen, auffälligen und übersichtlichen Produktfotos heraus

und sichere dir so den Klick gegenüber deiner Konkurrenz.</p>  
                                    </div>                       
                        </div>                     
                            <div class="col-sm" style="padding-left: 0%; padding-top:7.4%;"> 
                                <div data-aos="fade-up-left">

                              <img class="icon2" src="@/assets/Images/Retouren_ic.png" style="width:30%;">
                                <h5 style="color:#282d8c; margin-top: -4.2%;">
                                Vermeide Retouren
                            </h5>
                            <p  class="ic_text2" >
22% der Retouren sind auf eine abweichende Darstellung des Produktes
auf die Realität zurückzuführen. Dieses Leid erspare ich dir, in dem ich dein

Produkt realitätsgetreu und mit all seinen Vorteilen darstelle.</p>  
                                   </div>                        
                        </div>         
                        </div>
                    </div>
                



    </section>



</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

export default {
    AOS,
  data() {
    return {
      showIconsAnimation: false
    };
  },

};
</script>
<style>

.col-sm{
    margin-left: 4%;
}

.ic_title_dark{
    color:#282d8c; margin-top: 1%;
}

.col-sm{
    transition: transform 0.8s;
}

.ic_text{
    color: white; padding-left: 0%;
}

.ic_text2{
    color: #282d8c; padding-left: 0%;
}
/* .icon2{
    display: block;
    margin-left: auto;
    margin-right: auto;
} */

/* .col-sm:hover{
    transform: scale(1.04);
} */

.section.leistungen{
    padding-top:15px;
    background-image: url(shape6.jpg);
    background-repeat: no-repeat;    
    background-size: auto;  

}
    #icons{
        margin-top:-30px;
    }
</style>
