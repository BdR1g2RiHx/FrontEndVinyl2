<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params: {user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'Registry', params: {user}}">Регистрация</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-10 offset-1 col-md-6 offset-md-3">
        <div class="row no-gutters">
          <h3>Регистрация</h3>
          <div class="col-12 my-3">
            <label for="rg-name">
              <h5>Имя<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="rg-name" class="lg-inp" v-model="name">
            <span style="color: red; font-size: 1.25rem">{{name_err}}</span>
          </div>
          <div class="col-12 mb-3">
            <label for="rg-email">
              <h5>Email<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="rg-email" class="lg-inp" v-model="email">
            <span style="color: red; font-size: 1.25rem">{{email_err}}</span>
          </div>
          <div class="col-12">
            <label for="rg-pass">
              <h5>Пароль<span style="color: red">*</span></h5>
            </label>
            <input type="password" id="rg-pass" class="lg-inp" v-model="password">
            <span style="color: #aaa">Пароль должен содержать не менее 6 символов</span>
            <br>
            <span style="color: red; font-size: 1.25rem">{{pass_err}}</span>
          </div>
          <div class="col-10 mt-3 pt-2">
            <div class="row no-gutters">
              <div class="col-12">
                <input type="checkbox" id="agr-ch" v-model="confrm">
                <label for="agr-ch" style="width: 100%">Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности. Узнать больше</label>
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button id="reg-btn" @click="registrat()">Регистрация</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { API } from './../api-common.js'

export default {

  data () {
    return {
      name: '',
      email: '',
      password: '',

      confrm: false,

      status: 1, //1- все ок, 2-некорректный email, 3-некорректный пароль, 4-некорр. имя

      user: {},
    }
  },
  created() {
    this.user = this.$route.params.user
  },
  methods: {
    registrat() {
      alert('тут будет запрос на регистрацию');
      
      if (this.confrm == true)
      {
      API.get('url_is_here')
      .then(response => response.data)
      .then(response => {
      this.status = response.status;
        if (response.status == 1)
        {
          this.user.user_id = response.user_id;  // id, который возвращает сервер
          this.user.login = response.login; // логин, который возвращает сервер
          this.user.basket = response.basket; // количество товаров в корзине, которое возвращает сервер
          this.user.photo = response.photo; // url на фото, который возвращает сервер
          this.user.bonuses = response.bonuses; // количество бонусов, которое возвращает сервер
          this.$emit('logged', this.user);
          this.$router.push({name: 'Home', params: Object.assign({logged: true},this.user)});
        }
      })
      .catch(e => console.log(e))

      //код выше не работает, поэтому пример успешного входа показан ниже
      alert('Пример успешной регистрации');
      this.$emit('logged', {user_id: 123, bonuses: 1251, basket: 20, photo: '', login: 'Abrabra'});
    }
    else
      alert('Вы должны ознакомиться с политикой конфиденциальности');
  }
  },
  computed: {
    name_err() {
      if (this.status == 4)
        return 'Имя имеет неверный формат';
      else
        return '';
    },
    email_err() {
      if (this.status == 2)
        return 'Email имеет неверный формат';
      else
        return '';
    },
    pass_err() {
      if (this.status == 3)
        return 'Пароль имеет неверный формат';
      else
        return '';
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

#reg-btn {
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
