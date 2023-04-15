<template>
  <div>
    <p>{{ productById.title }}</p>
    <p>{{ productById.price }}</p>
    <p>{{ productById.id }}</p>
  </div>
</template>

<script setup>
import config from "@/config/buysell";

const { id } = useRoute().params;
const uri = config.endpoints.products.getById + id;

const { data: productById } = await useFetch(uri);
</script>

<style lang="scss" scoped></style>
