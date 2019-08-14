<template>
  <div class="container">
    <div class="page-title">
      <div>Charles Michel Photography</div>
    </div>
    <div class="menu-outter-ctn">
      <div class="menu-inner-ctn desktop-view">
        <div>Galeries</div>
        <div>Contact</div>
        <div>Bio</div>
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
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .page-title {
    flex-basis: 180px;
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
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .menu-inner-ctn div {
    padding: 5px 25px;
  }

  .menu-inner-ctn div:hover {
    cursor: pointer;
    background: rgb(215, 214, 214);
    color: rgb(24, 24, 24);
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
</style>

