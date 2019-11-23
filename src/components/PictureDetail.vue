<template>
  <div class="detail-ctn">
    <div class="detail-top">
      <img class="detail-img" :src="imgUrl" alt="no-img" @click="launchFullScreen">
    </div>
  </div>
</template>

<script>

export default {
  name: 'PictureDetail',
  props: [ 'imgUrl' ],
  data() {
    return {
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