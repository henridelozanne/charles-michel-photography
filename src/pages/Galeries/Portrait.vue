<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

import picture_1 from '../../photos/portrait/1.jpg';
import picture_2 from '../../photos/portrait/2.jpg';
import picture_3 from '../../photos/portrait/3.jpg';
import picture_4 from '../../photos/portrait/4.jpg';
import picture_5 from '../../photos/portrait/5.jpg';
import picture_6 from '../../photos/portrait/6.jpg';
import picture_7 from '../../photos/portrait/7.jpg';
import picture_8 from '../../photos/portrait/8.jpg';
import picture_9 from '../../photos/portrait/9.jpg';
import picture_10 from '../../photos/portrait/10.jpg';
import picture_11 from '../../photos/portrait/11.jpg';

export default {
  name: 'Portrait',
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
          picture_1,
          picture_2,
          picture_3,
          picture_4,
          picture_5,
          picture_6,
          picture_7,
          picture_8,
          picture_9,
          picture_10,
          picture_11,
        ],
    };
  },
}
</script>

<style>

</style>