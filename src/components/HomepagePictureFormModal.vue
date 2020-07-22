<template>
  <div class="modal fade" id="homepage-pics" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="editLabel">Set homepage picture</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" style="padding: 10px 25px">
          <div class="row d-flex" >
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="product-index">Index</label>
              </div>
              <input type="number" v-model="homepageItem.index"
                    class="form-control" id="product-index">
            </div>
            <div class="w-100 mt-2">
              <h5>Images</h5>
            </div>
            <div>
              <div class="image-ctn">
                <label for="product_image">Set homepage image</label>
                <input type="file" @change="uploadImage" class="form-control">
              </div>
              <div class="text-left" v-if="imageIsLoaded">
                <div class="image-thumb-ctn">
                  <img :src="homepageItem.image" alt="">
                  <span class="delete-img" @click="deleteImage(homepageItem.image)">X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button @click="callSetGaleryPicture" type="button" class="btn btn-primary">Apply changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from '../firebase';

export default {
  name: "HomepagePictureFormModal",
  computed: {
    imageIsLoaded() {
      return this.homepageItem.image !== undefined;
    },
  },
  props: {
    homepageItem: { type: Object, default: () => {}},
  },
  methods: {
    callSetGaleryPicture() {
      this.$emit('setGaleryPicture');
    },
    deleteImage(img) {
      let image = fb.storage().refFromURL(img);
      image
        .delete()
        .then(() => {
          this.homepageItem.image = undefined;
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log('err : ', err);
        })
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref('homepage_pictures/'+ Math.random() + '_'  + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', () => {}, function() {
          // Handle unsuccessful uploads
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.homepageItem.image = downloadURL;
          });
        });
      }
    },
  },
};
</script>
