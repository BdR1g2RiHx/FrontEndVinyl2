import Vue from 'vue'
import Main from './Main.vue'
import VueRouter from 'vue-router'
import Home from './comps/Home.vue'
import Login from './comps/Login.vue'
import Reg from './comps/Reg.vue'
import Basket from './comps/Basket.vue'
import ProdCard from './comps/Product-card.vue'
import Checkout from './comps/Checkout.vue'
import Profile from './comps/Profile.vue'
import Bonuses from './comps/Bonuses.vue'
import About from './comps/About.vue'
import Assess from './comps/Assessment.vue'
import Catalog from './comps/Catalog.vue'
import Favorities from './comps/Favorities.vue'
import NotFound from './comps/Not-found.vue'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [
		{path: '/Home/:user', name: 'Home', component: Home},
		{path: '/Login/:user', name:'Login', component: Login},
		{path: '/Registry/:user', name:'Registry', component: Reg},
    {path: '/Basket/:user', name: 'Basket', component: Basket},
    {path: '/Card/:data', name: 'Card', component: ProdCard},
    {path: '/Checkout/:user', name: 'Checkout', component: Checkout},
    {path: '/Profile/:user', name: 'User', component: Profile},
    {path: '/Bonuses/:user', name:'Bonuses', component: Bonuses},
    {path: '/About/:user', name:'About', component: About},
    {path: '/Assessment/:user', name:'Assessment', component: Assess},
    {path: '/Catalog/:user', name: 'Catalog', component: Catalog},
    {path: '/Favorities/:user', name: 'Favorities', component: Favorities},
    {path: '*', component: NotFound},
	]
});

new Vue({
  el: '#app',
  router,
  components: {
  	Main,
  },
  /*render: h => h(App),*/
  template: '<Main/>',
})
