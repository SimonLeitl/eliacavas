<template>
    <section class="section leistungen">
         <div class="shape shape-style-1 shape-primary">
           <span class="span-150"></span>
            <span class="span-50"></span>
           <span class="span-50"></span>
           <span class="span-75"></span>
           <span class="span-100"></span>
            <span class="span-75"></span>
           <span class="span-50"></span>
           <span class="span-100"></span>
           <span class="span-50"></span>
           <span class="span-100"></span>
       </div>
            <div class="container" @mouseleave="showIconsAnimation = false">
                <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
                    <div class="col-lg-8 text-center">
                        <h1 class="display-3" style="color: white;">Leistungen</h1>                    
                    </div>
                </div>
            </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm text-center"> 
                            <div class="icons-container mt-5">
                                <i class="ni ni-album-2 large" style="color:white; font-size:80px;"></i>
                                <h3 style="color:white;">
                                Leistung 1
                            </h3> 
                            </div> 
                                 
                        </div>
                        <div class="col-sm text-center">
                            <div class="icons-container blur-item mt-5">
                                <i class="ni ni-album-2 large" style="color:white; font-size:80px;"></i>
                                <h3 style="color:white;">
                                Leistung 2
                            </h3> 
                            </div> 
                                
                        </div>
                        <div class="col-sm text-center">
                            <div class="icons-container blur-item mt-5">
                                <i class="ni ni-album-2 large" style="color:white; font-size:80px;"></i>
                                <h3 style="color:white;">
                                Leistung 3
                            </h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                 <div class="container" style="padding-top:5%;">
                    <div class="row">
                        <div class="col-sm text-center"> 
                            <div class="icons-container mt-5">
                                <i class="ni ni-album-2 large" style="color:#6584f5; font-size:80px;"></i>
                                <h3 style="color:#6584f5;">
                                Leistung 1
                            </h3>  
                            </div> 
                                
                        </div>
                        <div class="col-sm text-center">
                            <div class="icons-container blur-item mt-5">
                                <i class="ni ni-album-2 large" style="color:#6584f5; font-size:80px;"></i>
                                <h3 style="color:#6584f5;">
                                Leistung 2
                            </h3>   
                            </div> 
                              
                        </div>
                        <div class="col-sm text-center">
                            <div class="icons-container blur-item mt-5">
                                <i class="ni ni-album-2 large" style="color:#6584f5; font-size:80px;"></i>
                                <h3 style="color:#6584f5;">
                                Leistung 3
                            </h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
        
    </section>
</template>
<script>
export default {
  data() {
    return {
      showIconsAnimation: false
    };
  },
  methods: {
    onScroll(evt) {
      console.log(evt);
    }
  }
};
</script>
<style>
.icons-container{
    transition: transform 0.8s;
}

.icons-container:hover{
    transform: scale(1.1);
}

.section.leistungen{
    background-image: url(Shape1.png);
    background-repeat: no-repeat;
    height: 800px;    
}
</style>
