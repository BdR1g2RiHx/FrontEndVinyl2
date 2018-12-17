<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params:{user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'Basket', params:{user}}">Корзина</router-link></li>
          <li><router-link :to="{name: 'Checkout', params:{user}}">Оформление заказа</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-10 offset-1 col-md-6 offset-md-0 col-xl-5 offset-xl-1">
        <div class="row no-gutters">
          <h3>Оформление заказа</h3>
          <div class="col-12 my-3">
            <label for="ch_lname">
              <h5>Имя<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_lname" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_fname">
              <h5>Фамилия<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_fname" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_phone">
              <h5>Мобильный телефон<span style="color: red">*</span></h5>
            </label>
            <br>
            <div style="display: inline-block;font-family: 'Proxima Nova Rg'">+7</div>
            <div style="display: inline-block;"><input style="font-family: 'Proxima Nova Rg'" type="text" id="ch_phone" class="lg-inp"></div>
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_country">
              <h5>Страна<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_country" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_city">
              <h5>Город<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_city" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_addres">
              <h5>Адрес<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_addres" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mt-3">
            <button id="checkout-btn">Оплатить</button>
          </div>
        </div>
    </div>
    <div class="d-none d-md-block offset-md-1 col-md-5 col-xl-4">
      <div class="row no-gutters">
        <div class="col-12 mb-3" style="font-family: 'Proxima Nova Rg'"><h3>Количество товаров - 3</h3></div>
        <div class="col-12 ch-basket mb-3">
          <app-basket-product :plate_id="123" :user="user"/>
          <app-basket-product :plate_id="123" :user="user"/>
          <app-basket-product :plate_id="123" :user="user"/>
        </div>
        <div class="col-6">
          <h5 style="font-family: 'Proxima Nova Rg'">Всего к оплате</h5>
        </div>
        <div class="col-6" style="text-align: right;">
          <h5 style="font-family: 'Proxima Nova Rg'">5910,00 руб.</h5>
        </div>
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


      plates_id: [] //id пластинок в корзине
    }
  },
  components: {
    'app-basket-product': BaskProduct,
  },
  created() {
    this.user = this.$route.params.user

    API.get('url_is_here') //получение id пластинок в корзине пользователя
    .then(response => response.data)
    .then(response => {
      this.plates_id = response;
    })
    .catch(e => {console.log(e)})
  }
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';

.ch-basket {
  height: 300px;
  overflow-y: scroll;
}
label {
  font-size: 14px;
}
h5, label {
  margin-bottom: 0;
}

.separator {
  background: url('img/separator.png');
  background-size: contain;
  background-repeat: repeat-y;
}

.reg-block ul {
  list-style-type: disc;
  padding-left: 25px;
}

.lg-inp {
  width: 100%;
  border: 1px $dark solid;
  background-color: $inpbg;
}

label {
  font-size: 20px;
}

#to-reg-btn {
  width: 100%;
  height: 48px;
  background: $dark;
  border: none;
  color: white;
  font-size: 2em;
  &:hover {
    background: $light;
    color: $dark;
  }
}

#checkout-btn {
  height: 48px;
  width: 100%;
  background: $dark;
  border: none;
  color: white;
  font-size: 2em;
  &:hover {
    background: $light;
    color: $dark;
  }
}

</style>
