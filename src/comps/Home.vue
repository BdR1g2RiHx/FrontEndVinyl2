<template>
  <div id="Home">
    <app-slider/>
    <div class="row d-flex d-md-none no-gutters mb-3">
      <div class="col-12">
        <router-link :to="{name: 'Catalog', params: {user}}"><button id="cat-btn-sm">Каталог</button></router-link>
      </div>
    </div>
    <!-- Новинки -->
    <div id="novelty" class="mb-4">
      <div class="row mb-2">
        <div class="col-4">
          <h3>Новинки</h3>
        </div>
        <div class="col-8 pr-3" style="text-align: right;">
          <router-link :to="{name: 'Catalog', params: {user}}" class="show-all">Смотреть все</router-link>
        </div>
      </div>
      <div class="d-none d-md-flex row">
        <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
        <!-- <div v-for="i in novelty_id" class="col-3">
          <app-product :user="user" :plate_id="1"/>
        </div> -->
        <div class="col-3">
          <app-product :user="user" :plate_id="1"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="2"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="3"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="4"/>
        </div>
      </div>
      <div class="d-flex d-md-none row no-gutters" style="overflow-x: hidden;">
        <div class="col-12 home-product-tape">
          <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
          <!-- <div v-for="i in novelty_id" class="home-product">
            <app-product :user="user" :plate_id="1"/>
          </div> -->
          <div class="home-product">
            <app-product :user="user" :plate_id="1"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="2"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="3"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="4"/>
          </div>
        </div>
      </div>
    </div>
    <!-- Подборки -->
    <div id="sels" class="mb-4">
      <div class="row mb-2">
        <div class="col-12">
          <h3>Подборки</h3>
        </div>
      </div>
      <div class="d-none d-md-flex row">
        <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
        <!-- <div v-for="i in sels_id" class="col-4">
          <app-sel :user="user" :plate_id="i"/>
        </div> -->
        <div class="col-4">
          <app-sel :user="user" :plate_id="5"/>
        </div>
        <div class="col-4">
          <app-sel :user="user" :plate_id="6"/>
        </div>
        <div class="col-4">
          <app-sel :user="user" :plate_id="7"/>
        </div>
      </div>
      <div class="d-flex d-md-none row no-gutters" style="overflow-x: hidden;">
        <div class="col-12 home-product-tape">
          <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
          <!-- <div v-for="i in sels_id" class="home-product">
            <app-sel :user="user" :plate_id="i"/>
          </div> -->
          <div class="home-product">
            <app-sel :user="user" :plate_id="5"/>
          </div>
          <div class="home-product">
            <app-sel :user="user" :plate_id="6"/>
          </div>
          <div class="home-product">
            <app-sel :user="user" :plate_id="7"/>
          </div>
        </div>
      </div>
    </div>
    <!-- Бестселлеры -->
    <div id="bestsellers"  class="mb-4">
      <div class="row mb-2">
        <div class="col-4">
          <h3>Бестселлеры</h3>
        </div>
        <div class="col-8 pr-3" style="text-align: right;">
          <router-link :to="{name: 'Catalog', params: {user}}" class="show-all">Смотреть все</router-link>
        </div>
      </div>
      <div class="d-none d-md-flex row">
        <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
        <!-- <div v-for="i in bestsellers_id" class="col-3">
          <app-product :user="user" :plate_id="8"/>
        </div> -->
        <div class="col-3">
          <app-product :user="user" :plate_id="8"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="9"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="10"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="11"/>
        </div>
      </div>
      <div class="d-flex d-md-none row no-gutters" style="overflow-x: hidden;">
        <div class="col-12 home-product-tape">
          <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
          <!-- <div v-for="i in bestsellers_id" class="home-product">
            <app-product :user="user" :plate_id="8"/>
          </div> -->
          <div class="home-product">
            <app-product :user="user" :plate_id="8"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="9"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="10"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="11"/>
          </div>
        </div>
      </div>
    </div>
    <!-- Предзаказы -->
    <div id="preorders"  class="mb-4">
      <div class="row mb-2">
        <div class="col-4">
          <h3>Предзаказы</h3>
        </div>
        <div class="col-8 pr-3" style="text-align: right;">
          <router-link :to="{name: 'Catalog', params: {user}}" class="show-all">Смотреть все</router-link>
        </div>
      </div>
      <div class="d-none d-md-flex row">
        <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
        <!-- <div v-for="i in preorders_id" class="col-3">
          <app-product :user="user" :plate_id="12"/>
        </div> -->
        <div class="col-3">
          <app-product :user="user" :plate_id="12"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="13"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="14"/>
        </div>
        <div class="col-3">
          <app-product :user="user" :plate_id="15"/>
        </div>
      </div>
      <div class="d-flex d-md-none row no-gutters" style="overflow-x: hidden;">
        <div class="col-12 home-product-tape">
          <!-- здесь должны через v-for выводиться пластинки по полученному массиву id -->
          <!-- <div v-for="i in preorders_id" class="home-product">
            <app-product :user="user" :plate_id="12"/>
          </div> -->
          <div class="home-product">
            <app-product :user="user" :plate_id="12"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="13"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="14"/>
          </div>
          <div class="home-product">
            <app-product :user="user" :plate_id="15"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {API} from './../api-common.js'

  import Slider from './Slider.vue'

  import Product from './Home-product.vue'
  import Sel from './Home-sel.vue'


  export default {
    data () {
      return {
        user: {},

        novelty_id: [], //массивы id новинок
        sels_id: [], //массивы id подборок
        bestsellers_id: [], //массивы id бестселлеров
        preorders_id: [], //массивы id предзаказов
      }
    },
    components: {
      'app-slider': Slider,

      'app-product': Product,
      'app-sel': Sel,
    },
    created() {
      this.user = this.$route.params.user;


      API.get('url_is_here') //получить массив новинок
      .then(response => response.data)
      .then(response => {
       this.novelty_id = response;
     })
      .catch(e => {console.log(e)})


      API.get('url_is_here') //получить массив выборок
      .then(response => response.data)
      .then(response => {
       this.sels_id = response;
     })
      .catch(e => {console.log(e)})


      API.get('url_is_here') //получить массив бестселлеров
      .then(response => response.data)
      .then(response => {
       this.bestsellers_id = response;
     })
      .catch(e => {console.log(e)})


      API.get('url_is_here') //получить массив предзаказов
      .then(response => response.data)
      .then(response => {
       this.preorders_id = response;
     })
      .catch(e => {console.log(e)})

    }
  }
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
* {
  font-family: 'Raleway';
  outline:0 none !important;
  label {
    cursor: pointer;
  }
}
#cat-btn-sm {
  width: 100%;
  height: 50px;
  font-size: 32px;
  background: $dark;
  border: none;
  color: white;
  &:hover {
  background: $light;
  color: $dark;
  }
}

.home-product-tape {
  font-size: 0;
  overflow-x: scroll;
  white-space: nowrap;
}

.home-product {
  width: 200px;
  display: inline-block;
  position: relative;
}

/*Новинки, бестселлеры, предзаказы*/
.show-all {
  font-size: 1.35rem;
  text-decoration: underline;
  color: $dark;
}

#slider-tape {
  width: 400%;
}
</style>
