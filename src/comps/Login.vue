<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params: {user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'Login', params: {user}}">Авторизация</router-link></li>
        </ul>
    </nav>
    </div>
    <div class="col-10 offset-1 col-md-5 offset-md-0 offset-xl-1">
        <div class="row no-gutters">
          <h3>Авторизация</h3>
          <div class="col-12 my-3">
            <label for="lg-email">
              <h5>Email<span style="color: red">*</span></h5>
            </label>
            <input type="text" name="email" id="lg-email" class="lg-inp" v-model="login">
            <span style="color: red;"></span>
          </div>
          <div class="col-12 mb-2 mb-md-0">
            <label for="lg-pass">
              <h5>Пароль<span style="color: red">*</span></h5>
            </label>
            <input type="password" name="passwd" id="lg-pass" class="lg-inp" v-model="password">
            <span style="color: red"></span>
          </div>
          <div class="col-6 mt-3 pt-2">
            <input type="checkbox" name="remember" id="rem-ch">
            <label for="rem-ch">Запомнить меня</label>
          </div>
          <div class="col-6 mt-3">
            <button id="lg-btn" @click="log_in()">Войти</button>
          </div>
        </div>
    </div>
    <div class="d-none d-md-block col-md-1 separator"></div>
    <div class="col-10 offset-1 mt-4 col-md-6 mt-md-0 col-xl-5 offset-md-0 reg-block">
      <div class="row no-gutters">
        <div class="col-12">
          <h4>Регистрация нового пользователя</h4>
            <ul>
              <li>Используйте введенные ранее данные</li>
              <li>Накапливайте и тратьте бонусы</li>
              <li>Отслеживайте стоимость товара</li>
              <li>Сохраняйте историю заказов</li>
            </ul>
        </div>
        <div class="col-12 col-lg-10">
          <router-link :to="{name: 'Registry', params: {user}}">
            <button id="to-reg-btn" >Регистрация</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {API} from './../api-common.js'

export default {


  data () {
    return {
      login: '',
      password: '',
      status: 1,
      remember: false,

      user: {},
    }
  },
  created() {
    this.user = this.$route.params.user;
  },
  mounted() { /*типо успешно вошли*/
    
  },
  computed: {
    msg() {
      if (this.status == 0)
      {
        return 'Неверный пароль';
      }
      else return '';
    }
  },
  methods: {
    log_in() { //вход и получение id пользователя
      API.get('url_is_here')
      .then(response => response.data)
      .then(response => {
        if (this.status == 1)
          this.user.user_id = response.user_id;

        this.status = response.status;
      })
      .catch(e => {console.log(e)})

      if (this.status == 1)
      {
        API.get('url_is_here') //получение данных пользователя, который только что вошел
        .then(response => response.data)
        .then(response => {
          this.user.login = response.login; // логин, который возвращает сервер
          this.user.basket = response.basket; // количество товаров в корзине, которое возвращает сервер
          this.user.photo = response.photo; // url на фото, который возвращает сервер
          this.user.bonuses = response.bonuses; // количество бонусов, которое возвращает сервер
          this.$emit('logged', this.user);
          this.$router.push({name: 'Home', params: Object.assign({logged: true},this.user)});
        })
        .catch(e => {console.log(e)})
      }

      //код выше не работает, поэтому пример успешного входа показан ниже
      alert('Пример успешной авторизации');
      this.$emit('logged', {user_id: 123, bonuses: 1251, basket: 20, photo: '', login: 'Abrabra'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';

label {
  font-size: 14px;
}
h5, label {
  margin-bottom: 0;
}

.separator {
  /* background: url('img/separator.png'); */
  background-size: contain;
  background-repeat: repeat-y;
}

.reg-block ul {
  list-style-type: disc;
  padding-left: 25px;
  li {
    margin-bottom: 12px;
    font-size: 16px;
  }
}

.lg-inp {
  width: 100%;
  border: 1px $dark solid;
  background-color: $inpbg;
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

#lg-btn {
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
