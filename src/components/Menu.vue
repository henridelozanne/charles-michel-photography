<template>
  <div class="container">
    <div class="page-title">
      <div><span class="bold">CHARLES MICHEL</span><br><span class="photography">PHOTOGRAPHY</span></div>
    </div>
    <div class="horizontal-bar"></div>
    <div class="menu-outter-ctn">
      <div class="menu-inner-ctn desktop-view">
        <div>
          <div class="horizontal-bar"></div>
          <div class="menu-title" @click="goToPage('galeries')">Galeries</div>
          <div class="horizontal-bar"></div>
        </div>
        <div>
          <div class="horizontal-bar"></div>
          <div class="menu-title" @click="goToPage('bio')">Bio</div>
          <div class="horizontal-bar"></div>
        </div>
        <div>
          <div class="horizontal-bar"></div>
          <div class="menu-title" @click="goToPage('contact')">Contact</div>
          <div class="horizontal-bar"></div>
        </div>
      </div>
      <div class="menu-inner-ctn smartphone-view">
        <i class="el-icon-menu"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    methods: {
      goToPage(page) {
        this.$router.push(page);
      },
    },
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }

  .page-title {
    flex-basis: 180px;
    text-align: center;
    color: rgb(240, 240, 240);
  }

  .horizontal-bar {
    /* border-bottom: 1px solid #393838; */
    width: 100%;
    height: 1px;
    background: radial-gradient(#464646, rgb(18, 18, 18));
  }

  .menu-outter-ctn {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .menu-inner-ctn {
    flex-basis: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .menu-inner-ctn div {
    width: 100%;
    text-align: center;
    -webkit-transition: background-color .5s ease-out;
    -moz-transition: background-color .5s ease-out;
    -o-transition: background-color .5s ease-out;
    transition: background-color .5s ease-out;
    
    &:hover {
      cursor: pointer;
      background-color: rgb(205, 205, 205);
      color: rgb(24, 24, 24);
    }
  }

  .menu-inner-ctn .menu-title {
    padding: 15px 25px;
    font-size: 1.2em;
  }

  .smartphone-view {
    display: none;
  }


  /* Trouver une meilleure façon de centrer */
  i {
    font-size: 1.7em;
    margin-top: 22px;
    margin-left: 22px;
  }

  .page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
  }

  .photography {
    font-size: 0.8em;
  }

  @media screen and (max-width:768px) {
    .container {
      flex-direction: row;
    }

    .menu-outter-ctn {
      align-items: flex-end;
    }

    .menu-inner-ctn {
      flex-basis: 70px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 70px;
      margin-right: 25px;
    }

    .smartphone-view {
      display: block;
    }

    .desktop-view {
      display: none;
    }

    .page-title {
      font-size: 0.7em;
    }
  }

  .bold {
    font-size: 1.2em;
  }
</style>

