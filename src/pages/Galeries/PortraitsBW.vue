<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

export default {
  name: 'PortraitsBW',
  components: {
    'app-galery': Galery,
  },
  methods: {
    fullImgIsVisible() {
      this.$emit('fullImgIsVisible');
    },
    fullImgIsNotVisible() {
      this.$emit('fullImgIsNotVisible');
    },
  },
  data() {
    return {
      imageList: [
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595722/Portraits/noir%20et%20blanc/IMG_9275_frct5a.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595716/Portraits/noir%20et%20blanc/IMG_9992-Edit_okbbhz.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595712/Portraits/noir%20et%20blanc/IMG_9872-1_WEB_lynzrl.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595712/Portraits/noir%20et%20blanc/2R3A1962-1_anyyre.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595712/Portraits/noir%20et%20blanc/2R3A2306-1_h00khd.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595707/Portraits/noir%20et%20blanc/IMG_6676-Edit-1_1_rczhr7.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595707/Portraits/noir%20et%20blanc/IMG_9950-Edit_m3qob1.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595702/Portraits/noir%20et%20blanc/IMG_7523_fxqxix.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595701/Portraits/noir%20et%20blanc/IMG_3403_rht8vw.jpg' ,
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595700/Portraits/noir%20et%20blanc/IMG_6702_wlyiqi.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595698/Portraits/noir%20et%20blanc/IMG_4216_pagbv7.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595690/Portraits/noir%20et%20blanc/IMG_9636_ull0ns.jpg'
        ],
    };
  },
}
</script>