<template>
  <div class="galery-container">
    <div v-show="isLoading" class="loader-ctn">
      <div class="loader" />
    </div>
    <transition name="fade">
      <div v-show="!isLoading">
        <div id="gallery" class="gallery">
          <div v-for="image in imageList" :key="image" @click="showImgFull(image)" class="gallery-item">
            <transition name="fade">
              <img :src="image" alt="">
            </transition>
          </div>
        </div>
        <div class="img-ctn" v-if="fullImgIsVisible">
          <div class="img-ctn-inner">
            <i class="arrow el-icon-arrow-left" @click="goLeft"></i>
            <div class="inner-inner" @mouseover="toggleCloseIcon(true)" @mouseleave="toggleCloseIcon(false)">
              <img class="detail-img" :src="currentPictureUrl" alt="no-img">
              <transition name="fade-quicker">
                <i v-if="closeIconIsVisible" class="el-icon-close close-icon" @click="hideImgFull"></i>
              </transition>
            </div>
            <i class="arrow el-icon-arrow-right" @click="goRight"></i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Galery',
    props: {
      imageList: { type: Array, default: () => [] },
    },
    data() {
      return {
        closeIconIsVisible: false,
        dialogIsVisible: false,
        currentPictureUrl: undefined,
        columnQuantity: 'initial',
        previousColumnQuantity: undefined,
        fullImgIsVisible: false,
        isLoading: true,
      };
    },
    created() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2700);
    },
    mounted() {
      this.setColumnsAndLaunchMasonry();

      window.addEventListener('resize', this.setColumnsAndLaunchMasonryWithTrue);

      this.listenForArrows();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setColumnsAndLaunchMasonryWithTrue);
    },
    methods: {
      showImgFull(image) {
        this.currentPictureUrl = image;
        this.fullImgIsVisible = true;
        this.$emit('fullImgIsVisible');
      },
      hideImgFull() {
        this.fullImgIsVisible = false;
        this.closeIconIsVisible = false;
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
        const currentPictureIndex = this.imageList.indexOf(this.currentPictureUrl);
        if (currentPictureIndex === 0) {
          // if first, chose last
          this.currentPictureUrl = this.imageList[this.imageList.length - 1];
        } else {
          // else chose previous
          this.currentPictureUrl = this.imageList[currentPictureIndex - 1];
        }
      },
      goRight() {
        const currentPictureIndex = this.imageList.indexOf(this.currentPictureUrl);
        if (currentPictureIndex === this.imageList.length - 1) {
          // if last, chose first
          this.currentPictureUrl = this.imageList[0];
        } else {
          // else chose next
          this.currentPictureUrl = this.imageList[currentPictureIndex + 1];
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
        this.currentPictureUrl = e.srcElement && e.srcElement.src;
        this.dialogIsVisible = true;
      },
      toggleCloseIcon(value) {
        this.closeIconIsVisible = value;
      }
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

.detail-img {
  height: 100%;
}

.img-ctn {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
}

.img-ctn-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-quicker-enter-active, .fade-quicker-leave-active {
  transition: opacity 0.4s;
}
.fade-quicker-enter, .fade-quicker-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.close-icon {
  color: rgb(174, 174, 174);
  font-size: 2.5em;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    color: rgb(222, 222, 222);
  }
}

.inner-inner {
  height: 100%;
  position: relative;
}
</style>