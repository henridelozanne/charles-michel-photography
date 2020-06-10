<template>
  <div class="basket">
    <h1 class="basket-title">{{ $t('Basket.title') }}</h1>
    <div class="horizontal-bar"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.basket {
  text-align: center;
  font-family: 'Raleway', sans-serif !important;

  .basket-title {
    margin-top: 50px;
  }

  .horizontal-bar {
    width: 50%;
    margin: auto;
    height: 3px;
    background: radial-gradient(#242424, rgb(0, 0, 0));
  }
}
</style>