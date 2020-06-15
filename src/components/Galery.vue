<template>
  <div class="galery-container">
    <div v-show="isLoading" class="loader-ctn">
      <div class="loader" />
    </div>
    <transition name="fade">
      <div v-show="!isLoading">
        <div id="gallery" class="gallery">
          <div v-for="product in productList" :key="product.fileName" @click="showImgFull(product)" class="gallery-item">
            <transition name="fade">
              <div oncontextmenu="return false;" class="background-div" :style="`background-image: url(${product.imageLow})`">
                <img :src="product.imageLow" alt="">
              </div>
            </transition>
          </div>
        </div>
        <product-item v-if="fullImgIsVisible"
                      :fullImgIsVisible="fullImgIsVisible"
                      :activeProduct="activeProduct"
                      :arrowsAreVisible="arrowsAreVisible"
                      @goLeft="goLeft" @goRight="goRight"
                      @hideImgFull="hideImgFull" />
      </div>
    </transition>
  </div>
</template>

<script>
import ProductItem from './ProductItem';

export default {
  name: 'Galery',
  props: {
    productList: { type: Array, default: () => [] },
  },
  components: {
    'product-item': ProductItem,
  },
  data() {
    return {
      dialogIsVisible: false,
      activeProduct: undefined,
      columnQuantity: 'initial',
      previousColumnQuantity: undefined,
      fullImgIsVisible: false,
      isLoading: true,
      arrowsAreVisible: true,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  mounted() {
    this.setColumnsAndLaunchMasonry();

    window.addEventListener('resize', this.setColumnsAndLaunchMasonryWithTrue);

    this.listenForArrows();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setColumnsAndLaunchMasonryWithTrue);
  },
  watch: {
    fullImgIsVisible() {
      if (window.innerWidth < 768) {
        this.arrowsAreVisible = false;
      } else {
        this.arrowsAreVisible = true;
      }   
    },
  },
  methods: {
    showImgFull(product) {
      this.activeProduct = product;
      this.fullImgIsVisible = true;
      this.$emit('fullImgIsVisible');
    },
    hideImgFull() {
      this.fullImgIsVisible = false;
      this.$emit('fullImgIsNotVisible');
    },
    listenForArrows() {
      const that = this;
      function checkKey(e) {
          e = e || window.event;
          if (e.keyCode === 37) {
            if (that.fullImgIsVisible) {
              that.goLeft();
            }
          } else if (e.keyCode === 39) {
            if (that.fullImgIsVisible) {
              that.goRight();
            }
          } else if ((e.keyCode === 27) || (e.keyCode === 32)) {
            that.hideImgFull();
          }
      }
      document.onkeydown = checkKey;
    },
    goLeft() {
      const currentPictureIndex = this.productList.indexOf(this.activeProduct);
      if (currentPictureIndex === 0) {
        // if first, chose last
        this.activeProduct = this.productList[this.productList.length - 1];
      } else {
        // else chose previous
        this.activeProduct = this.productList[currentPictureIndex - 1];
      }
    },
    goRight() {
      const currentPictureIndex = this.productList.indexOf(this.activeProduct);
      if (currentPictureIndex === this.productList.length - 1) {
        // if last, chose first
        this.activeProduct = this.productList[0];
      } else {
        // else chose next
        this.activeProduct = this.productList[currentPictureIndex + 1];
      }
    },
    masonryLayout(containerElem, itemsElems, resize = false) {
      if (resize) {
        const column1 = document.getElementsByClassName('column-1')
        const column2 = document.getElementsByClassName('column-2')
        const column3 = document.getElementsByClassName('column-3')
        if (this.previousColumnQuantity === 3) {
          containerElem.classList.remove("columns-3");
          containerElem.removeChild(column1[0]); 
          containerElem.removeChild(column2[0]); 
          containerElem.removeChild(column3[0]); 
        } else if (this.previousColumnQuantity === 2) {
          containerElem.classList.remove("columns-2");
          containerElem.removeChild(column1[0]); 
          containerElem.removeChild(column2[0]); 
        } else {
          containerElem.classList.remove("columns-1");
          containerElem.removeChild(column1[0]); 
        }
      }
      containerElem.classList.add('masonry-layout', `columns-${this.columnQuantity}`);

      let columnsElements = [];

      for (let i = 1; i <= this.columnQuantity; i++) {
        let column = document.createElement('div');
        column.classList.add('masonry-column', `column-${i}`);
        containerElem.appendChild(column);
        columnsElements.push(column);
      }        
      
      for (let m = 0; m < Math.ceil(itemsElems.length / this.columnQuantity); m++) {
        for (let n = 0; n < this.columnQuantity; n++) {
          let item = itemsElems[m * this.columnQuantity + n];
          if (item) {
            columnsElements[n].appendChild(item);
            item.classList.add('masonry-item');
          }
        }
      }
    },
    setColumnsAndLaunchMasonryWithTrue() {
      this.setColumnsAndLaunchMasonry(true);
    },
    setColumnsAndLaunchMasonry(resize = false) {
      const width = window.innerWidth;
      if (this.columnQuantity === 3) {
        if (width < 1400) {
          this.setColumnQuantity();
          if (resize) {
            this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), true);
          } else this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'));
        }
      } else if (this.columnQuantity === 2) {
        if ((width < 1100) || (width >= 1400)) {
          this.setColumnQuantity();
          if (resize) {
            this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), true);
          } else this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'));
        }
      } else if (this.columnQuantity === 1) {
        if (width >= 1100) {
          this.setColumnQuantity();
          if (resize) {
            this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), true);
          } else this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'));
        }
      } 
      else if (this.columnQuantity === 'initial') {
        this.setColumnQuantity();
        if (resize) {
          this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), true);
        } else this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'));
      }
    },
    setColumnQuantity() {
      if (this.columnQuantity !== undefined) {
        this.previousColumnQuantity = this.columnQuantity;
      }
      if (window.innerWidth >= 1400) {
        this.columnQuantity = 3;
      } else if ((window.innerWidth >= 1100) && (window.innerWidth < 1400)) {
        this.columnQuantity = 2;
      } else {
        this.columnQuantity = 1;
      }
    },
    showModal(e){
      this.activeProduct = e.srcElement && e.srcElement.src;
      this.dialogIsVisible = true;
    },
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.galery-container {
  height: 100vh;
}

.arrow:hover {
  color: rgb(222, 222, 222);
  cursor: pointer;
}

.loader-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loader {
  border: 5px solid rgb(194, 194, 194);
  border-radius: 50%;
  border-top: 5px solid #525252;
  width: 34px;
  height: 34px;
  -webkit-animation: spin 1.7s linear infinite; /* Safari */
  animation: spin 1.7s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.full-height {
  height: 100%;
}

.full-width {
  width: 100%;
}
</style>