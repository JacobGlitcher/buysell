<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-image">
        <img :src="productById.image" alt="product image" />
      </div>
      <div class="card-text">
        <h2>{{ productById.title }}</h2>

        <p class="item-price">${{ productById.price }}</p>

        <h3>Product Description:</h3>
        <p class="item-description">{{ productById.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { productById } = defineProps(["productById"]);
</script>

<style lang="scss" scoped>
.card-wrapper {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 25px #cdcdcd;
  .card {
    @include make-flex;
    justify-content: stretch;
    gap: 100px;
    padding: 30px;
    &-image {
      padding: 30px 30px 30px 15%;
      max-width: 350px;
      img {
        width: 100%;
      }
    }

    &-text {
      max-width: 40%;
      h2 {
        font-size: 2rem;
        line-height: 2.6rem;
        margin-bottom: 15px;
      }

      .item-price {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 15px;
      }

      h3 {
        font-size: 1.3rem;
        margin-bottom: 5px;
      }

      .item-description {
        font-size: 1.1rem;
        line-height: 1.4rem;
      }
    }
  }
}
</style>
