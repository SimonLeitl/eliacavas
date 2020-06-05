
<template> 
<section class="section-testimonials">
    <div class="row text justify-content-center" @mouseover="showIconsAnimation = true">
                    <div class="col-lg-8 text-center">
                        <h1 class="mb-0" style="color: #282d8c;">Testemonials</h1>                    
                    </div>
                    
                </div>   
<div class="row test justify-content-center text-center">
    
  <div class="col-sm-4 ">
      <div class="shadow-lg  mb-5 bg-white rounded"> 
    <div class="card1">        
      <div class="card-body">         
        <h5 class="card-title">Julian Zoller</h5>
        <p class="firma">Harmony Design</p>
        <img  class="quote" src="@/assets/Images/quote.png" style="width: 10%;">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.</p>        
      </div>
    </div>
    </div>   
  </div>
  <div class="col-sm-4">
      <div class="shadow-lg  mb-5 bg-white rounded"> 
    <div class="card2">
      <div class="card-body">
        <h5 class="card-title">Simon Leitl</h5>
        <p class="firma">Harmony Design</p>
        <img class="quote" src="@/assets/Images/quote.png" style="width: 10%;">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.</p>     
         </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
      <div class="shadow-lg  mb-5 bg-white rounded"> 
    <div class="card3">
      <div class="card-body">
        <h5 class="card-title">Elia Cavas</h5>
        <p class="firma">Harmony Design</p>
       <img  class="quote" src="@/assets/Images/quote.png" style="width: 10%;">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.</p>     
         </div>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>


export default {
 
 
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
    border-radius: 2px;   
      
}
.card2{
    background-image: url(TestimonialBackground.png);
    background-size:  500% 95px;
    background-repeat: no-repeat;
    background-position-x: -500px;        
}
.card3{
    background-image: url(TestimonialBackground.png);
    background-size:  500% 95px;
    background-repeat: no-repeat;
    background-position-x: -1000px;        
}

</style>
