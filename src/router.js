import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Leistungen from "./views/Leistungen.vue";
import Galerie from "./views/Galerie.vue";
import UeberUns from "./views/UeberUns.vue";
import Impressum from "./views/impressum.vue";


Vue.use(Router);

export default new Router({
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
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {

      path: "/leistungen",
      name: "leistungen",
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
    {
      path: "/impressum",
      name: "impressum",
      components: {
        header: AppHeader,
        default: Impressum,

        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
