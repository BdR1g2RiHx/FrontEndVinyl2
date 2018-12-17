<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params: {user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'User', params: {user}}">Профиль</router-link></li>
        </ul>
    </nav>
    </div>
    <div class="col-12 col-md-8 offset-md-2">
        <div class="row no-gutters">
          <div class="col 5">
            <img src="img/podborka.png" style="width: 100%" alt="">
            <br>
            <br>
            <button id="photo-btn">Выберите файл</button>
          </div>
          <div class="col-7">
            <div class="pl-4 row no-gutters">
              <div class="col-12 mb-3"><h4>Славик</h4></div>
              <div class="col-6 mb-2" style="color: grey; font-family: 'Proxima Nova Rg'"><h5>Бонусный счет</h5></div>
              <div class="col-6" style="font-family: 'Proxima Nova Rg';"><h5>111 б.</h5></div>
            </div>
          </div>
          <div class="col-12 mt-4">
            <router-link :to="{name: 'Favorities', params: {user: this.user}}"><a href="#" class="pg-path">Избранное</a></router-link>
            <router-link :to="{name: 'Basket', params: {user: this.user}}"><a href="#" class="pg-path">Корзина</a></router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      /*тут с помощью запроса получать все нужные данные*/
      user: {},
    }
  },
  created() {
    if (this.$route.params.user.logged)
    {
      this.user = this.$route.params.user;
    }
    else
      this.$router.push({name: "Login", params: {user: this.$route.params.user}});
  }
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';

/* div {
  border: 1px red solid;
} */
label {
  font-size: 14px;
}
h5, label {
  margin-bottom: 0;
}

.pg-path {
  font-size: 1.35rem;
  text-decoration: underline;
  color: $dark;
  margin-right: 32px;
}


#photo-btn {
  height: 30px;
  width: 80%;
  background: $dark;
  border: none;
  color: white;
  font-size: 1rem;
  &:hover {
    background: $light;
    color: $dark;
  }
}
</style>
