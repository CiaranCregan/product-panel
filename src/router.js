import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Products from './views/Products.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/products',
      name: "products",
      component: Products
    }
  ]
});
