<template>
  <div class="detail-ctn">
    <div class="detail-top">
      <img :src="imgUrl" alt="no-img">
      <div>
        <h2>Title</h2>
        <br>
        <div class="picture-description">
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, amet. Ducimus optio beatae asperiores suscipit quam, quasi voluptas itaque exercitationem ipsum dicta sunt ad. Dolorum voluptas dolorem placeat pariatur expedita?</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureDetail',
  props: [ 'imgUrl' ],
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
</style>