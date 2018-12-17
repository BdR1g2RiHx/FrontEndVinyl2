<template>
  <div class="app-selection">
    <div class="row justify-content-center">
      <div class="col-11">
        <img @click="redirect()" src="img/podborka.png" class="box pointer" alt="">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-11">
        <router-link :to="{name: 'Card', params: {data: Object.assign({},{user},{plate_id})}}" class="s-title">Рок 90-х: главное</router-link>
        <br>
        <router-link :to="{name: 'Card', params: {data: Object.assign({},{user},{plate_id})}}" class="s-desc">Гранж, брит-поп, рэп-метал и другие тренды судьбоносной эпохи</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import {API} from './../api-common.js'

export default {

  data () {
    return {
      plate_title: '',
      band: '',
      country: '',
      cover: '', //url обложки
    }
  },
  props: [
    'user',
    'plate_id'
  ],
  methods: {
    redirect() {
      this.$router.push({name: 'Card', params: {data: Object.assign({},{user: this.user},{plate_id: this.plate_id})}})
    }
  },
  created() {//получение сведений об этой пластинке
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
.app-selection {
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
  .s-title {
    font-size: 1rem;
  }
  .s-desc {
    font-size: .75rem;
  }

  .disk {
    width: 94%;
    position: relative;
    margin-top: 0%;
    margin-left: -100%;
  }

  .app-products:hover {
    .disk {
      margin-left: -120%;
    }
    .box {
      margin-left: 10%;
    }
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .s-title {
    font-size: 1.1rem;
  }
  .s-desc {
    font-size: .85rem;
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
@media (min-width: 992px) and (max-width: 1200px) {
  .s-title {
    font-size: 1.2rem;
  }
  .s-desc {
    font-size: .95rem;
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
  .s-title {
    font-size: 1.3rem;
  }
  .s-desc {
    font-size: 1rem;
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
