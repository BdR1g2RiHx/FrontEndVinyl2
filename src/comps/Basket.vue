<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params: {user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'Basket', params: {user}}">Корзина</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-12 col-md-7 col-xl-6 offset-xl-1">
      <div class="row no-gutters">
        <div class="col-12 mt-3 mb-3">
          <h3>Моя корзина</h3>
        </div>
        <app-basket-product :plate_id="123" :user="user"/>
        <app-basket-product :plate_id="123" :user="user"/>
        <app-basket-product :plate_id="123" :user="user"/>
      </div>
    </div>
    <div class="col-12 col-md-5 col-xl-4 mt-md-3 total">
      <div class="row no-gutters">
        <div class="col-12"><h3>Итого</h3></div>
        <div class="col-6 mb-2 t">Всего</div>
        <div class="col-6 p" style="font-size: 1.35rem">5910 руб.</div>
        <div class="col-12 my-3">
          <input type="checkbox" id="use_bon" name="use_bon">
          <label for="use_bon">Использовать бонусы</label>
          <router-link :to="{name: 'Bonuses', params: {user}}">
            <img style="margin-left: 5px" src="img/help.png" alt="">
          </router-link>
        </div>
        <div class="col-6 mb-2 t" style="color: grey; font-size: .85rem">С учетом бонусов</div>
        <div class="col-6 p" style="color: grey;font-size: 1.35rem">5710 руб.</div>
        <div class="col-6 mb-4 t">Бонусов получите</div>
        <div class="col-6 p" style="font-size: 1.35rem">50 б.</div>
        <div class="col-12"><button id="pay" @click="$router.push({name: 'Checkout', params: {user}})">Оплатить</button></div>
        
      </div>
    </div>
  </div>
</template>

<script>
import BaskProduct from './Basket-product'
import {API} from './../api-common.js'

export default {
  data () {
    return {
      user: {},


      plates_id: [] //id пластинок в корзине юзера (получить через запрос)
    }
  },
  created() {
    if (this.$route.params.user.logged)
    {
      this.user = this.$route.params.user;
      
      API.get('url_is_here') //получить массив id пластинок в корзине
      .then(response => response.data)
      .then(response => {
       this.novelty_id = response;
     })
      .catch(e => {console.log(e)})
    }
    else
      this.$router.push({name: 'Login', params: {user: this.$route.params.user}});
  },
  components: {
    'app-basket-product': BaskProduct,
  },
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
.p {
  text-align: right;
}
.total * {
  font-family: 'Proxima Nova Rg'
}
.total button {
  font-family: 'Raleway'
}

#pay {
  width: 100%;
  height: 50px;
  font-size: 32px;
  background: $dark;
  border: none;
  color: white;
}
#pay:hover {
  background: $light;
  color: $dark;
}
#pay:active {
  padding: 0 !important;
  border: 6px $dark solid;
}
</style>
