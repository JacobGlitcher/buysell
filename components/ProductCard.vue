<template>
  <div class="product-child-inner">
    <div class="product-image-wrapper">
      <img :src="product.image" alt="product thumb" />
    </div>
    <p class="product-title">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`" class="product-link">
      View Details
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.product-child-inner {
  @include make-flex;
  max-width: 150px;
  margin: 0 auto;
  flex-direction: column;
  height: 100%;
  .product-image-wrapper {
    max-width: 70%;
    max-height: 115px;
    text-align: center;
    margin-bottom: 20px;
    flex: 1 1;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .product-title {
    @include make-ellipsis;
    max-width: 100%;
    margin-bottom: 10px;
  }

  .product-link {
    color: $link-standard-color;
    transition: $project-wide-transition;
    &:hover {
      color: $link-hovered-color;
    }
  }
}
</style>
