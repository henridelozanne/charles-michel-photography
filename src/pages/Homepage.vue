<template>
  <div class="homepage">
    <div class="landing-img-ctn">
      <img v-for="image in orderedList" :key="image.index"
           v-show="currentImgIndex == image.index - 1"
           class="landing-img" :src="orderedList[currentImgIndex].image"
           alt="landing-image">
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import gsap from "gsap";

let imageInterval;

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
      imageInterval = setInterval(() => {
        this.fadeOut();
      }, 6300);
    },
    fadeOut() {
      let tl = gsap.timeline();
      tl.to(".landing-img", {
        opacity: 0,
        duration: .5,
        onComplete: this.changeIndex
      });
      return tl;
    },
    changeIndex() {
      if (this.currentImgIndex !== this.itemList.length - 1) {
        this.currentImgIndex += 1;
      } else this.currentImgIndex = 0;
      this.fadeIn();
    },
    fadeIn() {
      let tl = gsap.timeline();
      tl.fromTo(".landing-img", {
        opacity: 0,
        ease: 'Power2.easeIn'
      }, {
        opacity: 1,
        ease: 'Power2.easeIn',
        duration: .8,
      });
      return tl;
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
  beforeDestroy() {
    clearInterval(imageInterval);
  }
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