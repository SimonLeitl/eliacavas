
<template> 
<section class="section-testimonials">
    <div class="container" style="padding-bottom: 40px">
        <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
            <div class="col-lg-8 text-center">
                <h1 class="mb-0" style="">Das sagen meine Kunden</h1>
                <p>Lies hier was meine bisherigen Kunden zu meinem Produktfoto-Prozess sagen..</p>
            </div>
        </div>
    </div>
<div class="row test justify-content-center text-center">
    
  <div class="col-sm-4 ">
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <div class="shadow-lg  mb-5 bg-white rounded"> 
    <div class="card1">        
      <div class="card-body">         
        <h5 class="card-title">Martin Bergmann</h5>
        <p class="firma">expoed UG</p>
        <img  class="quote" src="@/assets/Images/quote.png" style="width: 10%;">
        <p class="card-text">Motivation und Engagement - das bringt Elia mit und so wird es eine Freude an gemeinsamen Projekten zu arbeiten. Es gelingt ihm, sich mit Bedacht in Projekte einzudenken und frische Ideen beizusteuern. Das braucht es für moderne Firmenauftritte. Danke für die Zusammenarbeit!</p>
      </div>
    </div>
    </div>
    </div>   
  </div>
  <div class="col-sm-4">
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-delay="100">
      <div class="shadow-lg  mb-5 bg-white rounded"> 
    <div class="card2">
      <div class="card-body">
        <h5 class="card-title">Amina Mohammed</h5>
        <p class="firma">free Spirit</p>
        <img class="quote" src="@/assets/Images/quote.png" style="width: 10%;">
        <p class="card-text">Elia ist ein Professioneller Fotograf und nimmt sich zeit um das Briefing genau zu erstellen. Die fertigen Produktbildern die ich für Amazon nutzen werde sind Top.Ich bin sehr zufrieden mit den Fotos,das Ergebnis ist wirklich gut geworden.</p>
         </div>
      </div>
    </div>
    </div>
  </div>
 

  <div id="test" class="col-sm-4 ">
     <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-delay="200">
      <div class="shadow-lg  mb-5 bg-white rounded"> 
    <div class="card3">
      <div class="card-body">
        <h5 class="card-title">Manuel </h5>
        <p class="firma">PG Digital Marketing Agency</p>
       <img  class="quote" src="@/assets/Images/quote.png" style="width: 10%;">
        <p class="card-text">Während der Zusammenarbeit mit Elia haben wir die unkomplizierte Abwicklung sehr geschätzt. Er hat uns ein starkes 3D-Mockup unseres Produktes erstellt. Sehr gerne wieder!
        </p>
         </div>
      </div>
      </div>
    
    </div>
  </div>
</div>

</section>
</template>

<script type="text/javascript">
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

export default {
 AOS
 
};

</script>
<style lang="scss" scoped>

.row.text{
    padding-bottom:5%;
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
    color: white;
    margin-bottom: 0;
}

.firma{
    color:white;
}
.card-text{
    padding:5%;
    color: gray;
}

.quote{
    padding-top: 5%;
}

.card1{
    background-image: url(TestimonialBackground.png);
    background-size:  500% 95px;
    background-repeat: no-repeat;
    background-position-x: 0px; 
    height:450px;
   
      
}
.card2{
    background-image: url(TestimonialBackground.png);
    background-size:  500% 95px;
    background-repeat: no-repeat;
    background-position-x: -500px;
    height:450px;
}
.card3{
    background-image: url(TestimonialBackground.png);
    background-size:  500% 95px;
    background-repeat: no-repeat;
    background-position-x: -1000px;
    height:450px;
}


</style>
