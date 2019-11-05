<template>
  <div>
    <div id="gallery" class="gallery">
      <div v-for="image in imageList" :key="image" @click="showImgFull" class="gallery-item"><img :src="image" alt=""></div>
    </div>
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
</template>

<script>
  export default {
    name: 'Galeries',
    data() {
      return {
        dialogIsVisible: false,
        currentPictureUrl: undefined,
        columnQuantity: undefined,
        fullImgIsVisible: false,
        imageList: [
          'https://images.unsplash.com/photo-1565597847806-605e7fc063cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3386&q=80',
          'https://images.unsplash.com/photo-1563558492234-462b1e226123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80',
          'https://images.unsplash.com/photo-1555414244-5d86ec19ea34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1546138823-07da5db6c7fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80',
          'https://images.unsplash.com/photo-1518835633655-f1e358a1d685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3412&q=80', 
          'https://images.unsplash.com/photo-1553323855-cc1abf1930d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2765&q=80',
          'https://images.unsplash.com/photo-1501890664351-4ef399c1524f?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80',
          'https://images.unsplash.com/photo-1528783848474-fe2140874d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3064&q=80',
          'https://images.unsplash.com/photo-1521296382126-7f742828640b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3310&q=80',
          'https://images.unsplash.com/photo-1527765519142-eb16ebaa1be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1709&q=80',
          'https://images.unsplash.com/photo-1532746091757-009cbbf267a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3333&q=80',
          'https://images.unsplash.com/photo-1521446370169-0f10e8a09f8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=3302&q=80',
          'https://images.unsplash.com/photo-1462558073967-9fd054c339d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80',
          'https://images.unsplash.com/photo-1467454815259-9176a7e143af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1477477384939-312ffc1177bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1466232373731-46205f0b668e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2304&q=80',
          'https://images.unsplash.com/photo-1554867459-f8e06014810a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2976&q=80',
          'https://images.unsplash.com/photo-1523191717306-8311d268647c?ixlib=rb-1.2.1&auto=format&fit=crop&w=3090&q=80',
          'https://images.unsplash.com/photo-1505116778535-d63c51911367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3296&q=80',
          'https://images.unsplash.com/photo-1539250398789-c396f53b8bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3264&q=80',
          'https://images.unsplash.com/photo-1524544774-328b1e40a132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2127&q=80',
          'https://images.unsplash.com/photo-1508764579556-cbb274b04d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1552627019-947c3789ffb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80',
          'https://images.unsplash.com/photo-1555857289-c8d82c1473d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          'https://images.unsplash.com/photo-1511211933040-aa3ef2529ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3402&q=80'
          ],
      };
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
</style>