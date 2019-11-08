<template>
  <div>
    <app-galery :imageList="imageList"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

import picture_1 from '../../photos/black-and-white/1.jpg';
import picture_2 from '../../photos/black-and-white/2.jpg';
import picture_3 from '../../photos/black-and-white/3.jpg';
import picture_4 from '../../photos/black-and-white/4.jpg';
import picture_5 from '../../photos/black-and-white/5.jpg';
import picture_6 from '../../photos/black-and-white/6.jpg';
import picture_7 from '../../photos/black-and-white/7.jpg';
import picture_8 from '../../photos/black-and-white/8.jpg';
import picture_9 from '../../photos/black-and-white/9.jpg';
import picture_10 from '../../photos/black-and-white/10.jpg';
import picture_11 from '../../photos/black-and-white/11.jpg';
import picture_12 from '../../photos/black-and-white/12.jpg';
import picture_13 from '../../photos/black-and-white/13.jpg';
import picture_15 from '../../photos/black-and-white/15.jpg';
import picture_16 from '../../photos/black-and-white/16.jpg';
import picture_17 from '../../photos/black-and-white/17.jpg';
import picture_18 from '../../photos/black-and-white/18.jpg';
import picture_19 from '../../photos/black-and-white/19.jpg';
import picture_20 from '../../photos/black-and-white/20.jpg';
import picture_21 from '../../photos/black-and-white/21.jpg';
import picture_22 from '../../photos/black-and-white/22.jpg';
import picture_23 from '../../photos/black-and-white/23.jpg';
import picture_24 from '../../photos/black-and-white/24.jpg';
import picture_25 from '../../photos/black-and-white/25.jpg';
import picture_26 from '../../photos/black-and-white/26.jpg';
import picture_27 from '../../photos/black-and-white/27.jpg';
import picture_28 from '../../photos/black-and-white/28.jpg';
import picture_29 from '../../photos/black-and-white/29.jpg';

export default {
  name: 'BlackAndWhite',
  components: {
    'app-galery': Galery,
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
          picture_29
        ],
    };
  },
}
</script>

<style>

</style>