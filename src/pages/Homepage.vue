<template>
  <div class="homepage">
    <div v-for="category in categories" :key="category.title" class="homepage-item-outer-ctn">
      <div class="homepage-item-ctn" :style="`background-image: url('${category.image}')`">
        <router-link :to="category.link">
          <img class="item-img" :src="category.image" :alt="category.title">
        </router-link>
      </div>
      <router-link :to="category.link" class="category-link">
        <p class="item-title">{{category.title}}</p>
      </router-link>
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
      categories: [
        {
          title: 'Street life / Black & White',
          galery: 'street_life_bw',
          link: '/street-life-bw',
          image: undefined,
        },
        {
          title: 'Street life / Colour',
          galery: 'street_life_colour',
          link: '/street-life-colour',
          image: undefined,
        },
        {
          title: 'Portraits / Black & White',
          galery: 'portraits_bw',
          link: '/portraits-bw',
          image: undefined,
        },
        {
          title: 'Portraits / Colour',
          galery: 'portraits_colour',
          link: '/portraits-colour',
          image: undefined,
        },
        {
          title: 'People at work / Black & White',
          galery: 'people_at_work_bw',
          link: '/people-at-work-bw',
          image: undefined,
        },
        {
          title: 'People at work / Colour',
          galery: 'people_at_work_colour',
          link: '/people-at-work-colour',
          image: undefined,
        },
      ],
    };
  },
  mounted() {
    db.collection('homepage_pictures').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const correspondingItem = this.categories.filter(cat => cat.galery === doc.data().galery)[0];
        correspondingItem.image = doc.data().image;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 75%;
  width: 100%;
  display: grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-template-rows:  auto auto;
  grid-gap: 3%;
  align-items: center;
  margin: auto 20px;

  .homepage-item-outer-ctn {
    .homepage-item-ctn {
      position: relative;
      height: fit-content;
      background-size: cover;

      .item-img {
        visibility: hidden;
      }
    }

    .category-link {
      text-decoration: none;

      .item-title {
        text-align: center;
        width: 100%;
        color: white;
        margin-top: 15px;
        font-weight: 500;
        font-size: 22px;
      }
    }
  }
}

@media screen and (max-width: 1350px) {
  .homepage {
    grid-template-columns:  1fr 1fr;
    grid-template-rows:  auto auto auto;
    height: 100%;
    padding: 20px 0;
  }
}

@media screen and (max-width: 1020px) {
  .homepage {
    grid-template-columns:  1fr;
    grid-template-rows:  auto auto auto auto auto;
    height: 100%;
    padding: 20px 0;
  }
}

@media screen and (max-width: 768px) {
  .homepage {
    // margin-top: 70px;
    padding: 10px;
    margin: 70px 0 0;
  }
}
</style>