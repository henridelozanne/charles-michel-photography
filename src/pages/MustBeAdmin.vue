<template>
  <div class="must-be-admin">
    <div>
      <h1>You must be the admin to access this page !</h1>
      <h2>Click <router-link to="/login">here</router-link> to login again</h2>
      <h2>Or go back to the <router-link to="/">site</router-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MustBeAdmin',
};
</script>

<style lang="scss" scoped>
.must-be-admin {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &>div {
    background: white;
    color: black;
    padding: 100px 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 30px;
    }
  }
}
</style>