<template>
  <div>
    <div v-show="isLoading" class="loader-ctn">
      <div class="loader" />
    </div>
    <transition name="fade">
      <div v-show="!isLoading">
        <div id="gallery" class="gallery">
          <div v-for="image in imageList" :key="image" @click="showImgFull" class="gallery-item">
            <img :src="image" alt="">
          </div>
        </div>
        <!-- <img v-for="image in imageList" :key="image" src="../photos/black-and-white/1.jpg" alt="marche pas"> -->
        <!-- <el-dialog top="13px" :visible.sync="dialogIsVisible">
          <app-picture-detail :imgUrl="currentPictureUrl" />
        </el-dialog> -->
        <div class="img-ctn" v-if="fullImgIsVisible">
          <div class="img-ctn-inner">
            <i class="arrow el-icon-arrow-left" @click="goLeft"></i>
            <img class="detail-img" :src="currentPictureUrl" alt="no-img" @click="hideImgFull">
            <!-- <span class="arrow">A</span> -->
            <i class="arrow el-icon-arrow-right" @click="goRight"></i>
          </div>
          <!-- <i class="fas fa-chevron-right"></i> -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import picture_1 from '../photos/black-and-white/1.jpg';
  import picture_2 from '../photos/black-and-white/2.jpg';
  import picture_3 from '../photos/black-and-white/3.jpg';
  import picture_4 from '../photos/black-and-white/4.jpg';
  import picture_5 from '../photos/black-and-white/5.jpg';
  import picture_6 from '../photos/black-and-white/6.jpg';
  import picture_7 from '../photos/black-and-white/7.jpg';
  import picture_8 from '../photos/black-and-white/8.jpg';
  import picture_9 from '../photos/black-and-white/9.jpg';
  import picture_10 from '../photos/black-and-white/10.jpg';
  import picture_11 from '../photos/black-and-white/11.jpg';
  import picture_12 from '../photos/black-and-white/12.jpg';
  import picture_13 from '../photos/black-and-white/13.jpg';
  import picture_14 from '../photos/black-and-white/14.jpg';
  import picture_15 from '../photos/black-and-white/15.jpg';
  import picture_16 from '../photos/black-and-white/16.jpg';
  import picture_17 from '../photos/black-and-white/17.jpg';
  import picture_18 from '../photos/black-and-white/18.jpg';
  import picture_19 from '../photos/black-and-white/19.jpg';
  import picture_20 from '../photos/black-and-white/20.jpg';
  import picture_21 from '../photos/black-and-white/21.jpg';
  import picture_22 from '../photos/black-and-white/22.jpg';
  import picture_23 from '../photos/black-and-white/23.jpg';
  import picture_24 from '../photos/black-and-white/24.jpg';
  import picture_25 from '../photos/black-and-white/25.jpg';
  import picture_26 from '../photos/black-and-white/26.jpg';
  import picture_27 from '../photos/black-and-white/27.jpg';
  import picture_28 from '../photos/black-and-white/28.jpg';
  import picture_29 from '../photos/black-and-white/29.jpg';

  export default {
    name: 'Galeries',
    data() {
      return {
        dialogIsVisible: false,
        currentPictureUrl: undefined,
        columnQuantity: undefined,
        fullImgIsVisible: false,
        isLoading: true,
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
          picture_29
        ],
      };
    },
    created() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2300);
    },
    mounted() {
      this.setColumnsAndLaunchMasonry()

      window.addEventListener('resize', () => {
        clearTimeout(resizeId);
        const resizeId = setTimeout(this.setColumnsAndLaunchMasonry(), 500);
      });

      this.listenForArrows();
    },
    methods: {
      showImgFull(e) {
        this.currentPictureUrl = e.srcElement && e.srcElement.src;
        this.fullImgIsVisible = true;
      },
      hideImgFull() {
        this.fullImgIsVisible = false;
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
      masonryLayout(containerElem, itemsElems) {
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
      setColumnsAndLaunchMasonry() {
        this.setColumnQuantity();
        this.masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'));
      },
      setColumnQuantity() {
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
    },
  }
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.detail-img {
  // margin: auto;
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
  // top: 200px;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 2em;
  // height: 100vh;
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
</style>