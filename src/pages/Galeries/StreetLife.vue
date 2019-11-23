<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

import picture_1 from '../../photos/street-life/1.jpg';
import picture_2 from '../../photos/street-life/2.jpg';
import picture_3 from '../../photos/street-life/3.jpg';
import picture_4 from '../../photos/street-life/4.jpg';
import picture_5 from '../../photos/street-life/5.jpg';
import picture_6 from '../../photos/street-life/6.jpg';
import picture_7 from '../../photos/street-life/7.jpg';
import picture_8 from '../../photos/street-life/8.jpg';
import picture_9 from '../../photos/street-life/9.jpg';
import picture_10 from '../../photos/street-life/10.jpg';
import picture_11 from '../../photos/street-life/11.jpg';
import picture_12 from '../../photos/street-life/12.jpg';
import picture_13 from '../../photos/street-life/13.jpg';
import picture_14 from '../../photos/street-life/14.jpg';
import picture_15 from '../../photos/street-life/15.jpg';
import picture_16 from '../../photos/street-life/16.jpg';
import picture_17 from '../../photos/street-life/17.jpg';
import picture_18 from '../../photos/street-life/18.jpg';
import picture_19 from '../../photos/street-life/19.jpg';
import picture_20 from '../../photos/street-life/20.jpg';
import picture_21 from '../../photos/street-life/21.jpg';
import picture_22 from '../../photos/street-life/22.jpg';
import picture_23 from '../../photos/street-life/23.jpg';
import picture_24 from '../../photos/street-life/24.jpg';
import picture_25 from '../../photos/street-life/25.jpg';
import picture_26 from '../../photos/street-life/26.jpg';
import picture_27 from '../../photos/street-life/27.jpg';
import picture_28 from '../../photos/street-life/28.jpg';
import picture_29 from '../../photos/street-life/29.jpg';
import picture_30 from '../../photos/street-life/30.jpg';
import picture_31 from '../../photos/street-life/31.jpg';
import picture_32 from '../../photos/street-life/32.jpg';
import picture_33 from '../../photos/street-life/33.jpg';
import picture_34 from '../../photos/street-life/34.jpg';
import picture_35 from '../../photos/street-life/35.jpg';
import picture_36 from '../../photos/street-life/36.jpg';
import picture_37 from '../../photos/street-life/37.jpg';
import picture_38 from '../../photos/street-life/38.jpg';
import picture_39 from '../../photos/street-life/39.jpg';

export default {
  name: 'StreetLife',
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
          picture_24,
          picture_25,
          picture_26,
          picture_27,
          picture_28,
          picture_29,
          picture_30,
          picture_31,
          picture_32,
          picture_33,
          picture_34,
          picture_35,
          picture_36,
          picture_37,
          picture_38,
          picture_39
        ],
    };
  },
}
</script>
