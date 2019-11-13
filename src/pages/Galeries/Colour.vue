<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

import picture_1 from '../../photos/colour/1.jpg';
import picture_2 from '../../photos/colour/2.jpg';
import picture_3 from '../../photos/colour/3.jpg';
import picture_4 from '../../photos/colour/4.jpg';
import picture_5 from '../../photos/colour/5.jpg';
import picture_6 from '../../photos/colour/6.jpg';
import picture_7 from '../../photos/colour/7.jpg';
import picture_8 from '../../photos/colour/8.jpg';
import picture_9 from '../../photos/colour/9.jpg';
import picture_10 from '../../photos/colour/10.jpg';
import picture_11 from '../../photos/colour/11.jpg';
import picture_12 from '../../photos/colour/12.jpg';
import picture_13 from '../../photos/colour/13.jpg';
import picture_14 from '../../photos/colour/14.jpg';
import picture_15 from '../../photos/colour/15.jpg';
import picture_16 from '../../photos/colour/16.jpg';
import picture_17 from '../../photos/colour/17.jpg';
import picture_18 from '../../photos/colour/18.jpg';
import picture_19 from '../../photos/colour/19.jpg';
import picture_20 from '../../photos/colour/20.jpg';
import picture_21 from '../../photos/colour/21.jpg';
import picture_22 from '../../photos/colour/22.jpg';
import picture_23 from '../../photos/colour/23.jpg';
import picture_24 from '../../photos/colour/24.jpg';

export default {
  name: 'Colour',
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
          picture_12,
          picture_13,
          picture_14,
          picture_15,
          picture_16,
          picture_17,
          picture_18,
          picture_19,
          picture_20,
          picture_21,
          picture_22,
          picture_23,
          picture_24
        ],
    };
  },
}
</script>

<style>

</style>