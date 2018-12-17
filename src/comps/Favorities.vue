<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params: {user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'Favorities', params: {user}}">Избранное</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-12 col-md-10 offset-md-1">
      <div class="row no-gutters">
        <!-- здесь должны выводиться пластинки по полученному массиву id -->
        <!-- <div v-for="i in plates_id" class="col-12 col-sm-6 col-md-4 col-xl-3"> 
          <app-product :user="user" :plate_id="i"/>
        </div> -->
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <app-product :user="user" :plate_id="1"/>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <app-product :user="user" :plate_id="2"/>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <app-product :user="user" :plate_id="3"/>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <app-product :user="user" :plate_id="4"/>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <app-product :user="user" :plate_id="5"/>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <app-product :user="user" :plate_id="6"/>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <app-product :user="user" :plate_id="7"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Home-product'
import {API} from './../api-common.js'

export default {
  data () {
    return {
      user: {},
      plates_id: [], //id избранных пластинок
    }
  },
  created() {
    if (this.$route.params.user.logged)
    {
      this.user = this.$route.params.user;
      
      API.get('url_is_here') //получить массив id избранных пластинок
      .then(response => response.data)
      .then(response => {
        this.plates_id = response;
      })
      .catch(e => {console.log(e)})
    }
    else
      this.$router.push({name: "Login", params: {user: this.$route.params.user}});
  },
  components: {
    'app-product': Product,
  },
}
</script>

<style lang="scss" scoped>
</style>
