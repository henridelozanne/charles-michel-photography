<template>
  <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="editLabel">{{currentCategory | capitalizeAndClean}} / <span class="italic">{{modalTitle}}</span></h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetData">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" style="padding: 10px 25px">
          <div class="row d-flex" >
            <div class="left-block">
              <div class="mt-2 w-100 pl-2 pb-0">
                <h5>General information</h5>
              </div>
              <div style="padding: 15px 10px">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="product-file-name">File name</label>
                  </div>
                  <input type="text" v-model="product.fileName"
                        class="form-control" id="product-file-name">
                </div>
              </div>
              <div style="padding: 15px 10px">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="product-title">Title</label>
                  </div>
                  <input type="text" v-model="product.title"
                        class="form-control" id="product-title">
                </div>
              </div>
              <div style="padding: 15px 10px">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="product-colbw">Colour / B&W</label>
                  </div>
                  <select class="form-control" v-model="product.colBW" id="product-colbw">
                    <option selected :value="productColBW">{{productColBW}}</option>
                    <option :value="unselectedColBW">{{unselectedColBW}}</option>
                  </select>
                </div>
              </div>
              <div style="padding: 15px 10px">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="product-ratio">Ratio</label>
                  </div>
                  <input type="text" v-model="product.ratio"
                        class="form-control" id="product-ratio">
                </div>
              </div>
              <div style="padding: 15px 10px">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="product-size">Size</label>
                  </div>
                  <select class="form-control" v-model="product.size" id="product-size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
              <div style="padding: 15px 10px">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="product-price">Price</label>
                  </div>
                  <input type="number" v-model="product.price"
                        class="form-control" id="product-price">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-shutter">Shut.</label>
                    </div>
                    <input type="text" v-model="product.shutter"
                          class="form-control" id="product-shutter">
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-aperture">Apert.</label>
                    </div>
                    <input type="text" v-model="product.aperture"
                          class="form-control" id="product-aperture">
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-iso">ISO</label>
                    </div>
                    <input type="text" v-model="product.iso"
                          class="form-control" id="product-iso">
                  </div>
                </div>
              </div>
              <div class="mt-2 w-100 pl-2 pb-0">
                <h5>Dimensions</h5>
              </div>
              <div style="padding: 15px 10px">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="product-total-pixels">Total pixels</label>
                  </div>
                  <input type="number" v-model="product.totalPixels"
                        class="form-control" id="product-total-pixels">
                </div>
              </div>
              <div class="dimension-type-title">
                <h6>in pixels: <span class="italic font-weight-normal">{{product.dimensionsPixels}}<span v-if="product.dimensionsPixels">px</span></span></h6>
              </div>
              <div class="row" style="margin-left: 0">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-pixel-width">Width</label>
                    </div>
                    <input type="number" v-model="pixels.width"
                          class="form-control" id="product-pixel-width">
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-px-height">Height</label>
                    </div>
                    <input type="number" v-model="pixels.height"
                          class="form-control" id="product-px-height">
                  </div>
                </div>
              </div>
              <div class="dimension-type-title">
                <h6>in centimeters: <span class="italic font-weight-normal">{{product.dimensionsCentimeters}}<span v-if="product.dimensionsCentimeters">cm</span></span></h6>
              </div>
              <div class="row" style="margin-left: 0">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-cm-width">Width</label>
                    </div>
                    <input type="number" v-model="centimeters.width"
                          class="form-control" id="product-cm-width">
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-cm-height">Height</label>
                    </div>
                    <input type="number" v-model="centimeters.height"
                          class="form-control" id="product-cm-height">
                  </div>
                </div>
              </div>
              <div class="dimension-type-title">
                <h6>in inches: <span class="italic font-weight-normal">{{product.dimensionsInches}}<span v-if="product.dimensionsInches">''</span></span></h6>
              </div>
              <div class="row" style="margin-left: 0">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-inch-width">Width</label>
                    </div>
                    <input type="number" v-model="inches.width" readonly
                          class="form-control" id="product-inch-width">
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="product-inch-height">Height</label>
                    </div>
                    <input type="number" v-model="inches.height" readonly
                          class="form-control" id="product-inch-height">
                  </div>
                </div>
              </div>
            </div>

            <div class="right-block">
              <div class="w-100 mt-2">
                <h5>Images</h5>
              </div>
              <div>
                <div class="image-ctn">
                  <label for="product_image">High quality</label>
                  <input type="file" @click="setQuality('High')" @change="uploadImage" class="form-control">
                </div>
                <div class="text-left" v-if="imageHighIsLoaded">
                  <div class="image-thumb-ctn">
                    <img :src="product.imageHigh" alt="">
                    <span class="delete-img" @click="deleteImage(product.imageHigh, 'High')">X</span>
                  </div>
                </div>
              </div>
              <div>
                <div class="image-ctn">
                  <label for="product_image">Low quality</label>
                  <input type="file" @click="setQuality('Low')" @change="uploadImage" class="form-control">
                </div>
                <div class="text-left" v-if="imageLowIsLoaded">
                  <div class="image-thumb-ctn">
                    <img :src="product.imageLow" alt="">
                    <span class="delete-img" @click="deleteImage(product.imageLow, 'Low')">X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetData">Close</button>
          <button @click="callAddProduct()" type="button" class="btn btn-primary" v-if="modalType === 'new'">Create item</button>
          <button @click="callUpdateProduct()" type="button" class="btn btn-primary" v-if="modalType === 'edit'">Apply changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from '../firebase';

export default {
  name: 'ProductFormModal',
  props: {
    product: { type: Object, default: () => {}},
    modalType: { type: String, default: 'new'},
    currentCategory: { type: String, default: '' },
    productColBW: { type: String, default: '' },
  },
  computed: {
    imageHighIsLoaded() {
      return this.product.imageHigh !== undefined;
    },
    imageLowIsLoaded() {
      return this.product.imageLow !== undefined;
    },
    modalTitle() {
      if (this.modalType === 'new') {
        return 'Add product';
      } return 'Edit product';
    },
    unselectedColBW() {
      if (this.productColBW === 'B&W') {
        return 'Colour';
      } return 'B&W';
    },
  },
  watch: {
    'centimeters.height'() {
      if (this.centimeters.height) {
        this.inches.height = Math.round((this.centimeters.height * 0.393701 + Number.EPSILON) * 100) / 100;
      } else this.inches.height = undefined;
      if (this.centimeters.width && this.centimeters.height) {
        this.product.dimensionsCentimeters = `${this.centimeters.width}*${this.centimeters.height}`;
        this.product.dimensionsInches = `${this.inches.width}*${this.inches.height}`;
      } else {
        this.product.dimensionsCentimeters = undefined;
        this.product.dimensionsInches = undefined;
      }
    },
    'centimeters.width'() {
      if (this.centimeters.width) {
        this.inches.width = Math.round((this.centimeters.width * 0.393701 + Number.EPSILON) * 100) / 100;
      } else this.inches.width = undefined;
      if (this.centimeters.width && this.centimeters.height) {
        this.product.dimensionsCentimeters = `${this.centimeters.width}*${this.centimeters.height}`;
        this.product.dimensionsInches = `${this.inches.width}*${this.inches.height}`;
      } else {
        this.product.dimensionsCentimeters = undefined;
        this.product.dimensionsInches = undefined;
      }
    },
    'pixels.height'() {
      if (this.pixels.width && this.pixels.height) {
        this.product.dimensionsPixels = `${this.pixels.width}*${this.pixels.height}`;
      } else this.product.dimensionsPixels = undefined;
    },
    'pixels.width'() {
      if (this.pixels.width && this.pixels.height) {
        this.product.dimensionsPixels = `${this.pixels.width}*${this.pixels.height}`;
      } else this.product.dimensionsPixels = undefined;
    },
    product() {
      if (this.modalType === "edit") {
        [this.pixels.width, this.pixels.height] = this.product.dimensionsPixels && this.product.dimensionsPixels.split('*');
        [this.centimeters.width, this.centimeters.height] = this.product.dimensionsCentimeters && this.product.dimensionsCentimeters.split('*');
      }
    }
  },
  data() {
    return {
      centimeters: {
        width: undefined,
        height: undefined,
      },
      inches: {
        width: undefined,
        height: undefined,
      },
      pixels: {
        width: undefined,
        height: undefined,
      },
      currentQuality: undefined,
    };
  },
  filters: {
    capitalizeAndClean(value) {
      if (!value) return ''
      value = value.toUpperCase();
      value = value.replace(/_/g, " ")
      return value;
    }
  },
  methods: {
    callAddProduct() {
      this.$emit('addProduct');
    },
    callUpdateProduct() {
      this.$emit('updateProduct');
    },
    deleteImage(img, imgQuality) {
      let image = fb.storage().refFromURL(img);
      image
        .delete()
        .then(() => {
          this.product[`image${imgQuality}`] = undefined;
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log('err : ', err);
        })
    },
    resetData() {
      this.pixels = {
        width: undefined,
        height: undefined,
      };
      this.centimeters = {
        width: undefined,
        height: undefined,
      };
      this.inches = {
        width: undefined,
        height: undefined,
      };
      this.currentQuality = undefined;
    },
    setQuality(quality) {
      this.currentQuality = quality;
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref(`products_${this.currentQuality}/`+ Math.random() + '_'  + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', () => {}, function() {
          // Handle unsuccessful uploads
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.product[`image${this.currentQuality}`] = downloadURL;
          });
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.badges-ctn {
  margin-top: 5px;
  max-width: 100%;
  text-align: left;

  .badge-ctn {
    font-size: 20px;
    cursor: pointer;

    span:hover {
      background: #dc3545;
    }

    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
}

.image-ctn {
  margin-top: 20px;
}

.img-wrapper {
  img {
    height: 70px;
  }
}

.image-thumb-ctn {
  position: relative;
  display: inline-block;
  margin: 5px;

  img {
    height: 70px;
    width: 70px;
  }

  .delete-img {
    position: absolute;
    top: 0;
    right: 0;
    color: #dc3545;
    cursor: pointer;
  }
}

.italic {
  font-style: italic;
}

.dimension-type-title {
  padding-bottom: 0;
  margin-left: 10px;
  margin-top: 10px;

  h6 {
    margin-bottom: 0;
  }
}

.left-block {
  width: 67%;
}

.right-block {
  width: 33%;
}
</style>