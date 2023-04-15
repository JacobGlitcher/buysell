<template>
  <div class="product">
    <div v-for="product in allProducts" class="product-child">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
import config from "@/config/buysell";

const uri = config.endpoints.products.getLimited + 15;

const { data: allProducts } = await useFetch(uri);
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  &-child {
    flex-basis: 20%;
    background-color: #fff;
    border-radius: 18px;
    padding: 15px;
  }
}
</style>
