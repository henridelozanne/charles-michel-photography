<template>
  <div>
    <app-galery :imageList="imageList"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

import picture_1 from '../../photos/colors/1.jpg';
import picture_2 from '../../photos/colors/2.jpg';
import picture_3 from '../../photos/colors/3.jpg';
import picture_4 from '../../photos/colors/4.jpg';
import picture_5 from '../../photos/colors/5.jpg';
import picture_6 from '../../photos/colors/6.jpg';
import picture_7 from '../../photos/colors/7.jpg';
import picture_8 from '../../photos/colors/8.jpg';
import picture_9 from '../../photos/colors/9.jpg';
import picture_10 from '../../photos/colors/10.jpg';
import picture_11 from '../../photos/colors/11.jpg';
import picture_12 from '../../photos/colors/12.jpg';
import picture_13 from '../../photos/colors/13.jpg';
import picture_14 from '../../photos/colors/14.jpg';
import picture_15 from '../../photos/colors/15.jpg';
import picture_16 from '../../photos/colors/16.jpg';
import picture_17 from '../../photos/colors/17.jpg';
import picture_18 from '../../photos/colors/18.jpg';
import picture_19 from '../../photos/colors/19.jpg';
import picture_20 from '../../photos/colors/20.jpg';
import picture_21 from '../../photos/colors/21.jpg';
import picture_22 from '../../photos/colors/22.jpg';
import picture_23 from '../../photos/colors/23.jpg';
import picture_24 from '../../photos/colors/24.jpg';

export default {
  name: 'Colors',
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