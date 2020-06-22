<template>
  <div class="container">
    <img class="charles-picture"
         src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141159/Website%20assets/charles-michel_gavkej.jpg"
         alt="charles-michel">
    <div class="bio-content">
      <p>test</p>
      <p>{{ $t('Bio.p1') }}</p>
      <p>{{ $t('Bio.p2') }}</p>
      <p>{{ $t('Bio.p3') }}</p>
      <p>{{ $t('Bio.p4') }}</p>
      <p>{{ $t('Bio.p5') }}</p>
      <p>{{ $t('Bio.p6') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bio',
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.charles-picture {
  margin-top: 58px;
  border-radius: 50%;
  border: solid;
  margin-bottom: 30px;
  width: 200px;
  box-shadow: 4px 8px 5px black;
}

.bio-content {
  font-size: 1.3em;
  width: 70%;
  text-align: justify;
  margin-bottom: 30px;

  p {
    margin-bottom: 12px;
  }
}

@media screen and (max-width:768px) {
  .bio-content {
    width: 85%;
  }
}

.flags {
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  img {
    width: 40px;
    height: 27px;
    border-radius: 6px;
    cursor: pointer;
  }
  img:hover {
    border: 2px solid rgb(233, 233, 233);
  }
}

.france {
  margin: 0 10px;
}

.el-tooltip {
  font-family: Palanquin, sans-serif;
}

@media screen and (max-width:768px) {
  .flags {
    position: relative;
    right: unset;
    margin-top: 40px;
  }

  .france {
    margin: 0 20px;
  }
}
</style>