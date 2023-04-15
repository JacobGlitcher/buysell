<template>
  <div>
    <div v-for="product in allProducts">
      <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import config from "@/config/buysell";

const uri = config.endpoints.products.getLimited + 15;

const { data: allProducts } = await useFetch(uri);
</script>

<style lang="scss" scoped></style>
