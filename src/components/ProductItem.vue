<template>
  <div class="product-item">
    <i v-if="arrowsAreVisible" class="arrow el-icon-arrow-left" @click="goLeft"></i>
    <div class="product-outer-ctn" id="product-outer-ctn"
         @mouseover="toggleCloseIcon(true)" @mouseleave="toggleCloseIcon(false)">
      <div class="product-inner-ctn">  
        <div class="img-ctn" :class="isHorizontal ? 'horizontal' : 'vertical'"
            oncontextmenu="return false;" :style="`background-image: url(${activeProduct.imageLow})`">
          <img class="full-screen-picture" style="visibility: hidden"
              :src="activeProduct.imageLow" alt="no-img"
              id="full-screen-picture" @click="hideImgFull">
        </div>
        <div class="product-info-ctn">
          <p>{{activeProduct.title}}</p>
          <div class="dimensions-ctn">
            <div><span class="bold">{{activeProduct.size | capitalize}}</span> &bull; {{activeProduct.dimensionsPixels}} pixels</div>
            <div>{{activeProduct.dimensionsCentimeters}} cm &bull; 300DPI</div>
          </div>
          <div class="buy-ctn">
            <p>Price: <span class="bold">{{activeProduct.price}}$</span></p>
            <button class="buy-btn">Buy</button>
          </div>
        </div>
        <i class="el-icon-close close-icon" @click="hideImgFull"></i>
      </div>
    </div>
    <i v-if="arrowsAreVisible" class="arrow el-icon-arrow-right" @click="goRight"></i>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    arrowsAreVisible: { type: Boolean, default: true },
    activeProduct: { type: Object, default: () => {}},
    fullImgIsVisible: { type: Boolean, default: false },
  },
  data() {
    return {
      closeIconIsVisible: false,
      imgHeight: undefined,
      imgHeightIsReady: false,
      isHorizontal: undefined,
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  mounted() {
    this.checkRatio();
  },
  watch: {
    fullImgIsVisible() {
      const that = this;
      setTimeout(() => {
        this.getImgHeight();
        that.imgHeightIsReady = true;
      }, 2300);
    },
    'activeProduct.fileName'() {
      this.checkRatio();
    }
  },
  methods: {
    checkRatio() {
      let width, height;
      [width, height] = this.activeProduct.ratio.split(':');
      if (width > height) {
        this.isHorizontal = true;
      } else this.isHorizontal = false;
    },
    getImgHeight() {
      this.imgHeight = document.getElementById('full-screen-picture').height;
    },
    goLeft() {
      this.$emit('goLeft');
    },
    goRight() {
      this.$emit('goRight');
    },
    hideImgFull() {
      this.$emit('hideImgFull');
      this.imgHeightIsReady = false;
      this.closeIconIsVisible = false;
    },
    toggleCloseIcon(value) {
      this.closeIconIsVisible = value;
    }
  },
};
</script>

<style lang="scss" scoped>
.product-item {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;

  .product-outer-ctn {
    height: 100%;
    background: rgba(72, 72, 72, 0.5);
    padding: 15px;
    display: flex;
    align-items: center;
    position: relative;

    .product-inner-ctn {
      display: flex;
      justify-content: center;
      align-items: center;

      .img-ctn {
        max-width: 100%;
        max-height: 100%;
        background-size: cover;

        img {
          visibility: hidden;
        }

        .full-screen-picture {
          max-height: 100vh;
          max-width: 100%;
        }
      }

      .horizontal {
        height: fit-content;
      }

      .vertical {
        height: 100%;
      }

      .close-icon {
        color: rgb(174, 174, 174);
        background: rgba(72, 72, 72, 0.5);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 20px;
        position: absolute;
        top: 0;
        right: -20px;
        cursor: pointer;
        padding: 3px;

        &:hover {
          color: rgb(222, 222, 222);
        }
      }

      .product-info-ctn {
        align-self: flex-start;
        background: rgb(19, 19, 19);
        padding: 30px;
        margin-left: 15px;
        width: 30%;
        max-width: 260px;
        height: 100%;

        .bold {
          font-weight: bold;
        }

        .dimensions-ctn {
          margin: 20px 0;
        }

        .buy-ctn {
          display: flex;
          justify-content: space-between;

          .buy-btn {
            background: white;
            color: black;
            padding: 5px 15px;
            border-radius: 5px;
            min-width: 100px;

            &:hover {
              background-color: #e2ac6b;
              background-image: linear-gradient(315deg, #e2ac6b 0%, #cba36d 74%);
              color: white;
            }
          }
        }
      }
    }
  }

  .arrow {
    color: rgb(159, 159, 159);
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 2em;
    font-weight: 900 !important;
  }
}
</style>