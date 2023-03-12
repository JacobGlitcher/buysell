<template>
  <div>
    <p>Product details for {{ id }}</p>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "products-layout",
  })

  const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>
