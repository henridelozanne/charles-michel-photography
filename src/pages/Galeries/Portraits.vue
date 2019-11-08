<template>
  <div>
    <app-galery :imageList="imageList"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

import picture_1 from '../../photos/portraits/1.jpg';
import picture_2 from '../../photos/portraits/2.jpg';
import picture_3 from '../../photos/portraits/3.jpg';
import picture_4 from '../../photos/portraits/4.jpg';
import picture_5 from '../../photos/portraits/5.jpg';
import picture_6 from '../../photos/portraits/6.jpg';
import picture_7 from '../../photos/portraits/7.jpg';
import picture_8 from '../../photos/portraits/8.jpg';
import picture_9 from '../../photos/portraits/9.jpg';
import picture_10 from '../../photos/portraits/10.jpg';
import picture_11 from '../../photos/portraits/11.jpg';

export default {
  name: 'Portraits',
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
        ],
    };
  },
}
</script>

<style>

</style>