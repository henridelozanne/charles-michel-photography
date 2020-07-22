<template>
  <div class="homepage">
    <div class="landing-img-ctn">
      <img :src="orderedList[currentImgIndex].image" alt="landing-image">
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'Homepage',
  data() {
    return {
      itemList: [],
      currentImgIndex: 0,
    };
  },
  computed: {
    orderedList() {
      function compare(a, b) {
        if ( a.index < b.index ){
          return -1;
        } else if ( a.index > b.index ){
          return 1;
        }
        return 0;
      };
      return this.itemList.sort(compare);
    },
  },
  methods: {
    changePicture() {
      setInterval(() => {
        if (this.currentImgIndex !== this.itemList.length - 1) this.currentImgIndex += 1;
        else this.currentImgIndex = 0;
      }, 6000);
    },
  },
  created() {
    db.collection('homepage_pictures').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.itemList.push(doc.data());
      });
    });
    setTimeout(() => {
      this.changePicture();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 100vh;
  width: 100%;

  .landing-img-ctn {
    height: 100%;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}

@media screen and (max-width:768px) {
  .homepage {
    height: calc(100vh - 70px);
  }
}
</style>