<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand" to="/">

                <img class="navbar-brand" src="img/brand/ecavasLogo.png" alt="logo">
                <!--<h5 style="color:white;">Elia Cavas Fotografie</h5>-->

            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">

                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

      

            <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                    
                    <!-- <a class="nav-link nav-link-icon" href="http://localhost:8080/#/">Produktfotos</a> -->                    
                    <router-link class="nav-link nav-link-icon" to="/">Produktfotos</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link nav-link-icon" href="http://localhost:8080/#/leistungen">Produktfotos</a>                     -->
                    <router-link class="nav-link nav-link-icon" to="/leistungen">Leistungen</router-link>
                </li>
                <li class="nav-item">
                     <!-- <a class="nav-link nav-link-icon" href="http://localhost:8080/#/galerie">Produktfotos</a>    -->
                    <router-link to="/galerie" class="nav-link nav-link-icon">Galerie</router-link>

                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link nav-link-icon" href="http://localhost:8080/#/ueberuns">Produktfotos</a>  -->
                    <router-link to="ueberuns" class="nav-link nav-link-icon">Über uns</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        Kontakt
                    </a>
                </li>
            </ul> 
        

            
        </base-nav>
    </header>
</template>
<script>
    import BaseNav from "@/components/BaseNav";
    import BaseDropdown from "@/components/BaseDropdown";
    import CloseButton from "@/components/CloseButton";

    export default {
        components: {
            BaseNav,
            CloseButton,
            BaseDropdown
        },      
    }
</script>
<style>
</style>