<template>
  <div class="app-products mb-4" @mouseover="active=true" @mouseout="active=false">
    <div class="row justify-content-center">
      <div class="col-10 mb-4 mb-md-0">
        <router-link :to="{name: 'Card', params: {data: Object.assign({},{user},{plate_id})}}">
          <img src="img/box1.png" class="box" alt="">
          <img src="img/disk.png" class="disk" alt="">
        </router-link>
      </div>
    </div>
    <div class="row no-gutters justify-content-center">
      <div class="col-10 h-p-title mb-1" style="line-height: 1">
        <router-link :to="{name: 'Card', params: {data: Object.assign({},{user},{plate_id})}}"><strong>Stealin' Home'75</strong></router-link>
      </div>
      <div class="col-10 mb-1" style="line-height: 1">
        <router-link :to="{name: 'Card', params: {data: Object.assign({},{user},{plate_id})}}" class="uppercase"><u>BABE RUTH</u></router-link>
      </div>
      <div class="col-10 h-p-company" style="line-height: 1">
        <router-link :to="{name: 'Card', params: {data: Object.assign({},{user},{plate_id})}}" class="uppercase">CAPITOL RECORD, США</router-link>
      </div>
    </div>
    <div class="row no-gutters justify-content-end">
      <div class="col-8 col-md-5 col-lg-4 col-xl-3 pt-2 pr-1" style="text-align: right; font-family: 'Proxima Nova Rg';"><h5>1978р.</h5></div>
      <div class="col-auto">
        <div @click="addToBask()" class="h-p-buy pointer"></div>
        
      </div>
    </div>
    <transition name="cont-menu">
      <div class="cont_menu" v-if="active">
        <div class="row no-gutters align-items-center" style="height: 100%">
          <div class="col-12 c-menu-opt">
            <img src="img/prod_like.png" @click="intoFavor()" class="pointer" alt="like">
          </div>
          <div class="col-12 c-menu-opt pt-1">
            <router-link :to="{name: 'Card', params: {data: Object.assign({},{user},{plate_id})}}"><img src="img/prod_more.png" alt="more"></router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {API} from './../api-common.js'

export default {

  data () {
    return {
      active: false,//для анимации

      plate_title: '',
      band: '',
      country: '',
      cover: '', //url обложки
    }
  },
  props: [
    'user',
    'plate_id',
  ],
  methods: {
    addToBask() {
      if (this.user.logged)
      {
        alert('Запрос на добавление в корзину');

        API.post('url_is_here') //должен быть запрос на добавление в корзину
          .catch(e => {console.log(e)})
      }
      else 
        this.$router.push({name: 'Login', params: {user: this.user}});
    },
    intoFavor() {
      if (this.user.logged)
      {
        alert('Запрос на добавление в избранное');

        API.post('url_is_here') //должен быть запрос на добавление в избранное
          .catch(e => {console.log(e)})
      }
      else 
        this.$router.push({name: 'Login', params: {user: this.user}});
    },
  },
  created() { //получение сведений об этой пластинке
    API.get('url_is_here')
    .then(response => response.data)
    .then(response => {
      this.plate_title = response.plate_title;
      this.band = response.band;
      this.country = response.country;
      this.cover = response.cover;
    })
    .catch(e => console.log(e))
  }

}
</script>

<style lang="scss" scoped>
@import "../style/data.scss";
*{
.app-products {
  width: 100%;
  overflow: hidden;

  .cont_menu{
    width: 50px;
    height: 100px;
    background: $light075;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    .c-menu-opt {
      height: 40px;
    }
    img {
      width: 70%; margin-left: 8px;
    }
    img[alt="like"] {
      margin-top: 5px;
    }
  }
  .box {
    position: relative;
    width: 100%;
    z-index: 2;
  }
  .disk {
    z-index: 1;
  }
  .uppercase {
    text-transform: uppercase;
  }
}
.h-p-buy {
  width: 43px;
  height: 41px;
}

.cont-menu-enter-active {
  animation: c-menu-show .5s;
}
.cont-menu-leave-active {
  animation: c-menu-show .5s reverse;
}
@keyframes c-menu-show {
  0% {
    opacity: 0;
    right: -25px;
  }
  100% {
    opacity: 1;
    right: 0px;
  }
}
}

a, a:hover, a:active, a.visited {
  color: black;
  margin: 0;
  div{
    line-height: 0;
  }
  
}
.disk, .box {
  -webkit-transition: margin .5s ease-out 0s;
  -moz-transition: margin .5s ease-out 0s;
  -o-transition: margin .5s ease-out 0s;
  transition: margin .5s ease-out 0s;
}

@media (max-width: 768px) {
  a {
    font-size: .75rem;
  }
  .h-p-title a {
    font-size: 1rem;
  }
  .h-p-company a {
    font-size: .65rem;
  }

  .disk {
    width: 94%;
    position: relative;
    margin-top: 0%;
    margin-left: -100%;
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  a {
    font-size: .75rem;
  }
  .h-p-title a {
    font-size: 1rem;
  }
  .h-p-company a {
    font-size: .65rem;
  }

  .disk {
    width: 94%;
    position: relative;
    margin-top: -118%;
  }

  .app-products:hover {
    .disk {
      margin-left: -10%;
    }
    .box {
      margin-left: 10%;
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  a {
    font-size: .9rem;
  }
  .h-p-title a {
    font-size: 1rem;
  }
  .h-p-company a {
    font-size: .75rem;
  }

  .disk {
    width: 94%;
    position: relative;
    margin-top: -114%;
  }

  .app-products:hover {
    .disk {
      margin-left: -10%;
    }
    .box {
      margin-left: 10%;
    }
  }
}
@media (min-width: 1200px) {
  a {
    font-size: 1rem;
  }
  .h-p-title a {
    font-size: 1.1rem;
  }
  .h-p-company a {
    font-size: .8rem;
  }

  .disk {
    width: 94%;
    position: relative;
    margin-top: -114%;
  }

  .app-products:hover {
    .disk {
      margin-left: -10%;
    }
    .box {
      margin-left: 10%;
    }
  }
}
</style>
