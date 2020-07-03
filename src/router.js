import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Leistungen from "./views/Leistungen.vue";
import Galerie from "./views/Galerie.vue";
import UeberUns from "./views/UeberUns.vue";



Vue.use(Router);

const router = new  Router({
  linkExactActiveClass: "active", 
  
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
   
    {
      path: '/leistungen',
      name: 'leistungen',
      components: {
        header: AppHeader,
        default: Leistungen,
        footer: AppFooter
      }
    },
    {
      path: "/galerie",
      name: "galerie",
      components: {
        header: AppHeader,
        default: Galerie,
        footer: AppFooter
      }
    },
      {
      path: "/ueberuns",
      name: "ueberuns",
      components: {
        header: AppHeader,
        default: UeberUns,
        footer: AppFooter
      }
    },
  
  ],
 
});

export default router;


