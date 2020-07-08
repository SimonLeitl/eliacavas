<template>

    <section class="section-hero section-shaped my-0">
       
       
        <video autoplay muted autobuffer preload class="video-container__video" id="vid">            
            <source src="@/assets/Images/cameraframe_rendered.mp4" type="video/mp4">
        </video>

        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <!-- "Bereitstellen der Bilder für Carousel, aufgrund von Bug" -->
                    <img class="none" src="@/assets/Images/mute_ic.png" style="width:10%;" />
                    <img class="none" src="@/assets/Images/unmute_ic.png" style="width:10%;" />
                    <img class="none" src="@/assets/Images/repeat_ic.png" style="width:10%;" />
                    <div id="background" class="col-lg-7 text-center pt-lg">
                        <!--<img src="img/brand/white.png" style="width: 200px;" class="img-fluid">-->
                        <h1 style="color:white">Elia Cavas Produktfotografie</h1>
                        <p class="lead text-white mt-4 mb-5"></p>
                        <div class="btn-wrapper">
                            <base-button tag="a" href="#" class="mb-3 mb-sm-0" type="primary"
                                icon="ni ni-camera-compact">
                                jetzt Strategiegespräch vereinbaren
                            </base-button>
                            <base-button tag="a" href="#" class="mb-3 mb-sm-0"  type="white" icon="ni ni-circle-08">
                                Mehr Erfahren
                            </base-button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="container shape-container" style="posistion: absolute;  right: -25%; bottom: 0; opacity:0.15;">
            <img  v-on:click="mute" id="mutebtn" src="@/assets/Images/mute_ic.png" style="width: 5%; height: auto; float: right;" />
            <img v-on:click="repeat" id="repeatbtn" src="@/assets/Images/repeat_ic.png" style="width: 5%; height: auto; float: right;" />
        </div>
    </section>
</template>
<script>   
 export default {       
        methods:{
          mute(){
                 var vid = document.getElementById('vid');              
        
        
            if (vid.muted) {
                vid.muted = false;
                document.getElementById('mutebtn').src =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAP///////////////////////////////////////////////////////////////7eV4oIAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAC9klEQVRoQ+2Y25aCMAxFrXgdL/D/XzuQfcTQMmtBtPPEfkpbyYGkCcXdxsbGxsb/k64yKpFunaw6NM+uqsCh7aoKnAf/9QTSz+C+nkCf3qoCQ3pBE1/maOE3NFOwv8uIcJXzAU3l7J9dWGEMv6HJjN5/1wWrvHngWWh2ivnvuqOGq7Dqcmh6StJNNBqvgOpyaD5jz2KbNF5K8ukFreQcWP3RcCHT9IKWCs4s7zVcxLu6HFobaZ4KPDdzY7CIPL2gxRf9TSjwifXleb7M+s8E7CEf2BdbX1pur+ZZoHVIBJG4aDDzCM2p5G4/nkHXCO0CKuxk9kwWeLaF6JoXVNiTAY9Q1sInAolMnWzAI2B7YgK6UZy2ZrORyhiFBNLtjEFcuG2zEfNEBIYiJ7VHm+a26SwHsx0BAWsiLX3B3TY972K2IyDA9qS1cbmLkQrvTUDAtzZSi5iVZ5GESA7Y/+TZxYgkmOmICBBt5xUTV3mpRQR29BKLkfPKlsrbUUjA7UjnlRdbvk9DAni1vYNpXomcSnAkJIArE2jMtLKbL4QPnsC8Ehcz0crbXUiASjCv9DvLt9NyhASoZfOKlplofWMX7e09QFNAy0yn5YgI4JTjrmtAvMnNdAQE1Itsa5JYtExXL9A3AQHqmJcAl5PYr3VTO063lkxO1py+2ETfeB+YWwqWaPmH+cYbbVAg6jpuuQgVr4OYwC7RlLmYAyPpLo/wMQFoOBcRFRzlddz/6FzCG2sGXSOmh1MTW/iVk/46nGodXl8o/gHKc9cflF9PhlZBH39Kt4/WEmjIOVoUpqCsrnyAHiVwitZe9AoPgk77W/GF06MITNDSSLrjUulY+ZmppunRQgEpo3usoagRzeeovQb+rtAX9oimM5QupWMd2deyZqcowesDZExrTpMZ9pO2bBIL8TWnqZxBIT9vrUApHNBMwT36fxS8a04TJddIgt+MNadxBVRzGtWAmtOgClZzsusw1JzMSvQ1J6saH232jY2NjY0Yu90vV1qRD8gWI5gAAAAASUVORK5CYII=";
            } else {
                vid.muted = true;
               document.getElementById('mutebtn').src =
                 "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAP///////////////////////////////////////////////////////////////7eV4oIAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB+UlEQVRoQ+2ZyXLDIBBEJS+xnTiJ/v9rw/IsARoQhYfKhXcx9DDdZY9K3qbBYDAY/BcPHjsxfy2s+nB6Ll0Dzj9L14Drr/HvGHC39v0C5k/v3yvAXD6AoIwbrwdFl4sbrwdJlVvg3yFgHa8HVY9tvB5kNYLxetC1CMfroaBENF4PFRXmB6Yh1DRIx+uhqMBuvB6q77Mfr4fy2wjj9bzqHywiZHWitQ7fYvIFL1ltCXDPb+clqwbXWItt4PVLvGTV4vRazHmcEi9ZdVCow5y/sYy8Vv/ljrJBoQ7bICSU/FuGzGZNKPo3BKQJZf+WgDjhwL8pIEw48m8LCBKO/BsDggTI+bcGpAlZ/+aAOCHv3x4QJhT83wlY5xveNXZwpA56HIF/MYETddBjifxLCRyogx5D4l9IoF4HPYJ/PoFyHfQE/vftWsokUK2DnsDfbFjmEijW4Vsi/8MEanW4jsT/KIFSHbZh53+QQKUOc17wP3oOe7bzCWEt8M+peS4cT7E1vBInWc1T+vjuvHZOsppnftqGFF8zXoKTrBYofIW6iU6yWoCfcEKoaLEfNQU1zus1D+h6zN84A7Im8bdZRFWiUaPpcsXcgqRMMGoUbbZRI+jzGjXbDnDfYNcDfztm0wU3atZ9OJlRs+yEeYtg1Y3Of7EMBoPBIGGa/gDY8If1z5PBtgAAAABJRU5ErkJggg==";
            
        }},
        repeat() {
             var vid = document.getElementById('vid');             
            vid.load();
            vid.play();
        }
        },    
           
    
  };
   
    window.onload = function () {
        
      
    }
</script>
<style>
    .none {
        display: none;
    }


    .container.shape-container {
        position: absolute;
        bottom: 45%;
        left: 22%;
        width: 100%;
    }
</style>