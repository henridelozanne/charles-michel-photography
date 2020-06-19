<template>
  <div class="product-item">
    <i v-if="arrowsAreVisible" class="arrow el-icon-arrow-left" @click="goLeft"></i>
    <div class="product-outer-ctn" id="product-outer-ctn"
         @mouseover="toggleCloseIcon(true)" @mouseleave="toggleCloseIcon(false)">
      <div class="product-inner-ctn">
        <div :style="`background-image: url(${activeProduct.imageLow}); background-size: cover`">
          <div class="img-ctn watermark"
               :class="[ isHorizontal ? 'horizontal' : 'vertical', watermarkFormat ]"
               oncontextmenu="return false;">
            <img class="full-screen-picture" style="visibility: hidden"
                :src="activeProduct.imageLow" alt="no-img"
                id="full-screen-picture" @click="hideImgFull">
          </div>
        </div>
        <div class="product-info-ctn" v-if="isLargeScreen || mobileInfoAreVisible">
          <div class="product-title-ctn">
            <p>{{activeProduct.title}}</p>
            <i class="el-icon-close close-mobile-details-icon" v-if="mobileInfoAreVisible" @click="hideMobileInfo"></i>
          </div>
          <div class="dimensions-ctn">
            <div><span class="bold">{{activeProduct.size | capitalize}}</span> &bull; {{activeProduct.dimensionsPixels}} pixels</div>
            <div>{{activeProduct.dimensionsCentimeters}} cm &bull; 300DPI</div>
          </div>
          <div class="technical-ctn">
            <div><shutter-svg /><span>{{activeProduct.shutter}}</span></div>
            <div><aperture-svg /><span>{{activeProduct.aperture}}</span></div>
            <div><iso-svg /><span>{{activeProduct.iso}}</span></div>
          </div>
          <div class="buy-ctn">
            <p>Price: <span class="bold">{{activeProduct.price}}$</span></p>
            <button class="buy-btn">Buy</button>
          </div>
        </div>
        <i class="el-icon-close close-icon" @click="hideImgFull" v-if="!mobileInfoAreVisible"></i>
        <info-svg class="info-icon" @showMobileInfo="showMobileInfo" v-if="!mobileInfoAreVisible" />
      </div>
    </div>
    <i v-if="arrowsAreVisible" class="arrow el-icon-arrow-right" @click="goRight"></i>
  </div>
</template>

<script>
import ApertureSvg from './ApertureSvg';
import IsoSvg from './IsoSvg';
import ShutterSvg from './ShutterSvg';
import InfoSvg from './InfoSvg';

export default {
  name: "ProductItem",
  props: {
    arrowsAreVisible: { type: Boolean, default: true },
    activeProduct: { type: Object, default: () => {}},
    fullImgIsVisible: { type: Boolean, default: false },
  },
  components: {
    'aperture-svg': ApertureSvg,
    'iso-svg': IsoSvg,
    'shutter-svg': ShutterSvg,
    'info-svg': InfoSvg,
  },
  data() {
    return {
      closeIconIsVisible: false,
      imgHeight: undefined,
      imgHeightIsReady: false,
      isHorizontal: undefined,
      mobileInfoAreVisible: false,
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  computed: {
    isLargeScreen() {
      return window.innerWidth > 1024 ;
    },
    watermarkFormat() {
      switch (this.activeProduct.ratio) {
        case '1:1':
          return 'watermark-1_1';
        case '2:3':
          return 'watermark-2_3';
        case '3:2':
          return 'watermark-3_2';
        case '3:4':
          return 'watermark-3_4';
        case '4:3':
          return 'watermark-4_3';
      }
    }
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
    showMobileInfo() {
      this.mobileInfoAreVisible = true;
    },
    hideMobileInfo() {
      this.mobileInfoAreVisible = false;
    },
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
.watermark {
  background-size: cover;
}

.watermark-1_1 {
  background-image: url(../assets/watermarks/watermark_1_1.png);
}

.watermark-2_3 {
  background-image: url(../assets/watermarks/watermark_2_3.png);
}

.watermark-3_2 {
  background-image: url(../assets/watermarks/watermark_3_2.png);
}

.watermark-3_4 {
  background-image: url(../assets/watermarks/watermark_3_4.png);
}

.watermark-4_3 {
  background-image: url(../assets/watermarks/watermark_4_3.png);
}

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
  z-index: 2000;

  .product-outer-ctn {
    height: 100%;
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
        border-radius: 5px;
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

      .info-icon {
        display: none;
      }

      .product-info-ctn {
        align-self: flex-start;
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

        .technical-ctn {
          margin-bottom: 20px;

          >div {
            display: flex;
            align-items: center;

            span {
              margin-left: 10px;
            }
          }

          div:not(:last-of-type) {
            margin-bottom: 4px;
          }
        }

        .buy-ctn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-width: 165px;

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

@media screen and (max-width: 1024px) {
  .product-item {
    min-height: 100%;
    height: unset;
    overflow-y: scroll;

    .product-outer-ctn {
      padding: 0;

      .product-inner-ctn {
        flex-direction: column;

        .product-info-ctn {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin-left: 0;
          max-width: unset;
          background:rgba(0, 0, 0, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: center;

          .product-title-ctn {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .close-mobile-details-icon {
              border-radius: 50%;
              border: 1px solid white;
              padding: 2px;
              font-size: 0.8em;
            }
          }
        }

        .close-icon {
          right: 0;
          border-radius: 5px;
        }

        .info-icon {
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }

    .arrow {
      display: none;
    }
  }
}

</style>