<template>
  <div>
    <h1><i class="material-icons">home</i> Home</h1>

    <p>{{ data.message }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/message");
</script>

<style lang="scss" scoped>
h1 {
  @include page-heading;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
}

i {
  @include material-icon-default;
}
</style>
