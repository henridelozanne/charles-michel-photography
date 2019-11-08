<template>
  <div>
    <app-galery :imageList="imageList"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

import picture_1 from '../../photos/children/1.jpg';
import picture_2 from '../../photos/children/2.jpg';
import picture_3 from '../../photos/children/3.jpg';
import picture_4 from '../../photos/children/4.jpg';
import picture_5 from '../../photos/children/5.jpg';
import picture_6 from '../../photos/children/6.jpg';
import picture_7 from '../../photos/children/7.jpg';
import picture_8 from '../../photos/children/8.jpg';
import picture_9 from '../../photos/children/9.jpg';
import picture_10 from '../../photos/children/10.jpg';
import picture_11 from '../../photos/children/11.jpg';
import picture_12 from '../../photos/children/12.jpg';
import picture_13 from '../../photos/children/13.jpg';
import picture_14 from '../../photos/children/14.jpg';
import picture_15 from '../../photos/children/15.jpg';

export default {
  name: 'Children',
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
          picture_15
        ],
    };
  },
}
</script>

<style>

</style>