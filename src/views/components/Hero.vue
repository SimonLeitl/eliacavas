<template>

    <section class="section-hero section-shaped my-0">
<!--        <div class="shape shape-style-1 shape-primary">-->
<!--            <span class="span-150"></span>-->
<!--            <span class="span-50"></span>-->
<!--            <span class="span-50"></span>-->
<!--            <span class="span-75"></span>-->
<!--            <span class="span-100"></span>-->
<!--            <span class="span-75"></span>-->
<!--            <span class="span-50"></span>-->
<!--            <span class="span-100"></span>-->
<!--            <span class="span-50"></span>-->
<!--            <span class="span-100"></span>-->
<!--        </div>-->

       <div class="video-background">
           <div class="video-foreground">
        <iframe width="560" height="100" src="https://www.youtube.com/embed/lRTtMcx6rSM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"
         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>

        <!-- <video src="video.mp4" type="mp4/video" autoplay="autoplay">
        </video>        
         -->
        <div class="container shape-container d-flex align-items-center">

            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <!--<img src="img/brand/white.png" style="width: 200px;" class="img-fluid">-->
                        <h1 style="color:white">Elia Cavas Produktfotografie</h1>
                        <p class="lead text-white mt-4 mb-5">Willkommen auf meiner neuen Website!</p>
                        <div class="btn-wrapper">
                            <base-button tag="a"
                                         href="#"
                                         class="mb-3 mb-sm-0"
                                         type="primary"
                                         icon="ni ni-camera-compact">
                                Mehr erfahren
                            </base-button>
                            <base-button tag="a"
                                         href="#"
                                         class="mb-3 mb-sm-0"
                                         type="white"
                                         icon="ni ni-circle-08">
                                Kontakt
                            </base-button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
</script>
<style>
    .container.shape-container{
        padding-top: 20%;
    }

    .video-background {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -99;
        overflow: hidden;
    }
    .video-foreground,
    .video-background iframe {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;

    }

    @media (min-aspect-ratio: 16/9) {
        .video-foreground { height: 200%; top: -55%; }
    }
</style>
