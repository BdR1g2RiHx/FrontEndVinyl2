<template>
  <div class="row no-gutters my-5">
    <div class="col-12 col-md-7 col-xl-6 offset-xl-1">
      <div class="row no-gutters">
        <div class="col-12 mb-3">
          <div class="row no-gutters">
            <div class="col-10" style="font-size: 3rem; font-weight: bold">Ой!</div>
            <div class="col-2 d-md-none"><img src="img/404.png" style="width: 100%" alt=""></div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <h3>Похоже мы не можем найти нужную вам страницу.</h3>
        </div>
        <div class="col-12 mb-3">
          <span style="color: grey; font-size: 1.15rem">Код ошибки: 404</span>
        </div>
      </div>
    </div>
    <div class="d-none d-md-block col-md-5 col-xl-4">
      <div class="row no-gutters align-items-center">
        <div class="col-12">
          <img src="img/404.png" style="width: 100%" alt="">
        </div>
      </div>
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
    this.user = this.$route.params.user;
  }
}
</script>

<style lang="scss" scoped>

</style>
