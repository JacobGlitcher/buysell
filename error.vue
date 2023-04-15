<template>
  <div class="error-wrapper">
    <p>Oops!</p>
    <p class="error-code">{{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
    <button class="btn" @click="clearError({ redirect: '/' })">
      Take me home please, I am scared!
    </button>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style lang="scss">
body {
  background-color: $default-background-color;
  padding: 50px;
}

.error-wrapper {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px #b5b5b5;
  .error-code {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .btn {
    cursor: pointer;
    padding: 10px;
    font-size: 1.2rem;
    background-color: #fff;
  }
}
</style>
