<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand" to="/">

                <img src="img/brand/ecavasLogo.png" alt="logo">
                <!--<h5 style="color:white;">Elia Cavas Fotografie</h5>-->

            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">

                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link nav-link-icon">Produktfotos</router-link>
                  <!--  <a class="nav-link nav-link-icon" href="https://ecavas.uber.space/">
                        Produktfotos
                    </a>-->
                </li>
                <li class="nav-item">
                   <!-- <a class="nav-link nav-link-icon" href="https://ecavas.uber.space/#/leistungen">
                        Leistungen
                    </a>-->
                    <router-link to="/leistungen" class="nav-link nav-link-icon">Leistungen</router-link>
                </li>
                <li class="nav-item">


                    <router-link to="/galerie" class="nav-link nav-link-icon">Galerie</router-link>
                </li>
                <li class="nav-item">
                  <!--  <a class="nav-link nav-link-icon" href="#">

                        Über uns
                    </a>-->
                    <router-link to="/ueberuns" class="nav-link nav-link-icon">Über uns</router-link>
                    <!--<router-link to="/ueberuns" class="nav-link nav-link-icon">Über uns</router-link>-->
                </li>
            <!--    <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        Kontakt
                    </a>
                </li>-->

            </ul>


            <!-- <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                 <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                     <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                         <i class="ni ni-ui-04 d-lg-auto"></i>
                         <span class="nav-link-inner--text">Produktfotos</span>
                     </a>
                     <div class="dropdown-menu-inner">
                         <a href="#"
                            class="media d-flex align-items-center">
                             <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                 <i class="ni ni-spaceship"></i>
                             </div>
                             <div class="media-body ml-3">
                                 <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                 <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                     world's most popular framework for building responsive sites.</p>
                             </div>
                         </a>
                         <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                            class="media d-flex align-items-center">
                             <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                 <i class="ni ni-ui-04"></i>
                             </div>
                             <div class="media-body ml-3">
                                 <h5 class="heading text-warning mb-md-1">Components</h5>
                                 <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                     compiling Scss, change brand colors and more.</p>
                             </div>
                         </a>
                     </div>
                 </base-dropdown>
                 <base-dropdown tag="li" class="nav-item">
                     <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                         <i class="ni ni-collection d-lg-none"></i>
                         <span class="nav-link-inner--text">Examples</span>
                     </a>
                     <router-link to="/landing" class="dropdown-item">Landing</router-link>
                     <router-link to="/profile" class="dropdown-item">Profile</router-link>
                     <router-link to="/login" class="dropdown-item">Login</router-link>
                     <router-link to="/register" class="dropdown-item">Register</router-link>
                 </base-dropdown>
             </ul>-->
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

    };
</script>
<style>
</style>
