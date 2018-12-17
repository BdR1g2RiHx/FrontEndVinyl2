<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home', params: {user}}">Главная</router-link></li>
          <li><router-link :to="{name: 'Bonuses', params: {user}}">Бонусная программа</router-link></li>
        </ul>
    </nav>
    </div>
    <div class="col-12 col-md-8 offset-md-2 mb-5" style="font-size: 1.75rem">
        Покупай эффективно, используй бонусы
    </div>
    <div class="w-100"></div>
    <div class="col-6 col-md-4 offset-md-2">
      <h3><span style="color: red; font-family: 'Proxima Nova Rg'">10 %</span></h3>
      <span style="font-size: 1.35rem">Cash back со всех покупок</span>
    </div>
    <div class="col-6 col-4">
      <h3><span style="color: red; font-family: 'Proxima Nova Rg'">до 30 %</span></h3>
      <span style="font-size: 1.35rem">Оплата товара бонусами</span>
    </div>
    <div class="w-100"></div>

    <div class="col-12 col-md-8 offset-md-2 my-5">
      Каждая ваша покупка даёт скидку на следующие. Копите Бонусы и оплачивайте ими до 30% стоимости!
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  created() {
    this.user = this.$route.params.user
  }
}
</script>

<style lang="scss" scoped>

</style>
