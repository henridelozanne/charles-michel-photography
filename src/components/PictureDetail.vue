<template>
  <div class="detail-ctn">
    <div class="detail-top">
      <img class="detail-img" :src="imgUrl" alt="no-img" @click="launchFullScreen">
    </div>
    <!-- <div class="detail-bottom">
      <img src="https://cdn.shopify.com/s/files/1/0116/0042/9115/products/nls-prints-iceland-2014-12_6598-04-frame-matte_1200x.jpg?v=1561046822" alt="">
      <img src="https://cdn.shopify.com/s/files/1/0116/0042/9115/products/nls-prints-iceland-2014-12_6598-01-frame-matte_1200x.jpg?v=1561046822" alt="">
      <img src="https://cdn.shopify.com/s/files/1/0116/0042/9115/products/nls-prints-iceland-2014-12_6598-05-frame_1200x.jpg?v=1561046822" alt="">
    </div> -->
    <!-- <img v-show="showFullScreen" @click="showFullScreen = false" :src="imgUrl" alt="" class="fullscreen-img"> -->
  </div>
</template>

<script>
import { Select, Option, Button } from 'element-ui';

export default {
  name: 'PictureDetail',
  props: [ 'imgUrl' ],
  components: {
    'el-button': Button,
    'el-select': Select,
    'el-option': Option,
  },
  data() {
    return {
      formatOptions: [
        {
          value: '40 x 60 CM',
          label: '40 x 60 CM',
        },
        {
          value: '50 x 75 CM',
          label: '50 x 75 CM',
        },
        {
          value: '60 x 90 CM',
          label: '60 x 90 CM',
        },
      ],
      formatSelected: '',
      showFullScreen: false,
    };
  },
  methods: {
    launchFullScreen() {
      this.showFullScreen = true;
    },
  },
}
</script>

<style scoped>
  img {
    max-width: 900px;
    max-height: 700px;
  }

  .detail-ctn {
    display: flex;
    flex-direction: column;
  }

  .detail-top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .picture-description {
    width: 500px;
  }

  .detail-bottom {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .detail-bottom img {
    max-width: 400px;
    margin-bottom: 30px;
  }

  .detail-bottom img:not(:last-child) {
    max-width: 400px;
    margin-bottom: 30px;
    margin-right: 7px;
  }

  .detail-img {
    cursor: pointer;
  }

  .fullscreen-img {
    position: fixed;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    overflow: auto;
  }
</style>

<style lang="scss">
.el-dialog__header {
  display: none !important;
}

.el-dialog__body {
  padding: 5px 5px !important;
}
</style>