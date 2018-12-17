<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params: {user: this.$route.params.data.user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'Catalog', params: {user: this.$route.params.data.user}}">Каталог</router-link></li>
          <li><router-link :to="{name: 'Card', params: this.$route.params.data}">Slealin' Home'75</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-12 mb-4">
      <div class="row no-gutters">
        <div class="col-12 col-md-6 col-xl-5 offset-xl-1">
          <div class="row no-gutters">
            <div class="col-12 mb-3"><h4><b>Stealin' Home'75</b></h4></div>
            <div class="col-12 mb-3"><h6 class="uppercase">Babe Ruth</h6></div>
            <div class="col-12">
              <div class="row no-gutters">
                <div class="col-5 mb-1 h">Жанр</div>
                <div class="col-7 col-md-5 p" style="text-align: right;">Rock'n'Roll</div>
                <div class="col-2 d-none d-md-block"></div>
                <div class="col-5 mb-1 h">Страна</div>
                <div class="col-7 col-md-5 p" style="text-align: right;">США</div>
                <div class="col-2 d-none d-md-block"></div>
                <div class="col-5 mb-1 h">Год издания</div>
                <div class="col-7 col-md-5 p" style="text-align: right;">1975</div>
                <div class="col-2 d-none d-md-block"></div>
                <div class="col-5 mb-1 h">Год выпуска</div>
                <div class="col-7 col-md-5 p" style="text-align: right;">1976</div>
                <div class="col-2 d-none d-md-block"></div>
                <div class="col-5 h">Состояние</div>
                <div class="col-7 col-md-5 p" style="text-align: right;">Stil Sealed</div>
                <div class="col-2 d-none d-md-block"></div>
              </div>
            </div>
            <div class="col-12 mt-5">
              <div class="row no-gutters align-items-center">
                <div class="col-3"><h3>1978р.</h3></div>
                <div class="col-5 col-md-7"><button @click="addToBasket()" id="bask-btn"></button></div>
                <div class="col-2 p-3" style="height: 0%"><img @click="intoFavor()" class="pointer" src="img/like.png" style="max-height: 100%; width: 100%" alt=""></div>
                <div class="col-12" style="text-align: center; font-size: 1.35rem">
                  +197 бонусов<router-link :to="{name: 'Bonuses', params: {user}}">
                    <img src="img/help.png" style="display: inline-block; margin-left: 5px;" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-5 mt-4 mt-md-0">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="img/prod1.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/prod2.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/prod3.png" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/prod4.png" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/prod5.png" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="row no-gutters mt-3">
            <div class="col p-2"><img style="width: 100%" src="img/prod1.png" alt=""></div>
            <div class="col p-2"><img style="width: 100%" src="img/prod2.png" alt=""></div>
            <div class="col p-2"><img style="width: 100%" src="img/prod3.png" alt=""></div>
            <div class="col p-2"><img style="width: 100%" src="img/prod4.png" alt=""></div>
            <div class="col p-2"><img style="width: 100%" src="img/prod5.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-12 col-xl-10 offset-xl-1 mb-5">
      <div class="row no-gutters">
        <div class="col-12 mb-2"><h4>Трек-лист</h4></div>
        <div class="col-12">dfhsf dsafhdsfj yuddhsua hd - 3:50</div>
        <div class="col-12">dfhsf dewhdsfj yuddhsua hd - 2:50</div>
        <div class="col-12">dfhsf dsafhdsfj yuddhsua hd - 3:50</div>
        <div class="col-12">dfhsf ertr yuddhsua hd - 3:50</div>
        <div class="col-12">df dsafhdsfj ydddhsua hd - 3:50</div>
        <div class="col-12">dfhsf dsafhdsfj yudddddffsua hd - 6:57</div>
        <div class="col-12">dfhsf dsfd yuddhsua hd - 3:50</div>
        <div class="col-12">dfh afhdsfj yuddhsua hd - 3:50</div>
        <div class="col-12">dfhsf dsafhdsfj yuddhsua hd - 3:50</div>
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
        plate_id: 0,
        user: {},

        //данные о пластинке
        title: '',
        group: '',
        janr: '',
        country: '',
        god_izd: 1975,
        god_vip: 1975,
        sostoyanie: ''
      }
    },
    methods: {
      intoFavor() {
        if (this.user.logged)
        {
          alert('Запрос на добавление в избранное');

          API.post('url_is_here') //должен быть запрос на добавление в избранное
          .catch(e => {console.log(e)})
        }
        else
        {
          this.$router.push({name: 'Login', params: {user: this.user}});
        }
      },
      addToBasket() {
        if (this.user.logged)
        {
          alert('Запрос на добавление в корзину');

          API.post('url_is_here') //должен быть запрос на добавление в корзину
          .catch(e => {console.log(e)})
        }
        else
        {
          this.$router.push({name: 'Login', params: {user: this.user}});
        }
      }
    },
    created() {
      this.plate_id = this.$route.params.data.plate_id;
      this.user = this.$route.params.data.user;

      API.get('url_is_here') //запрос на получение данных по id пластинки
      .then(response => response.data)
      .then(response => {
        this.title = response.title;
        this.group = response.group;
        this.janr = response.janr;
        this.country = response.country;
        this.god_izd = response.god_izd;
        this.god_vip = response.god_vip;
        this.sostoyanie = response.sostoyanie;
      })
    },
    components: {
      'app-basket-product': BaskProduct,
    },
  }
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
.h {
  color: grey;
}
.p {
  font-size: 1.15rem;
}
</style>
