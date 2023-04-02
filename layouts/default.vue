<template>
  <div>
    <header class="page-header">
      <nav class="page-header__nav">
        <NuxtLink to="/">Buysell Nuxt</NuxtLink>
        <ul class="page-header__nav-list">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="main-wrapper">
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page-header {
  padding: 30px;
  font-size: 1.125rem;
  box-shadow: 0 3px 5px #e9e9e9;
  position: relative;
  z-index: 1;
  &__nav {
    @include make-flex;
    & > a {
      font-size: 1.375rem;
      color: $link-standard-color;
      font-weight: bold;
      transition: $project-wide-transition;
      &:hover {
        color: $link-hovered-color;
      }
    }
    &-list {
      @include make-flex;
      li {
        margin-right: 15px;
        transition: $project-wide-transition;
        &:last-child {
          margin: 0;
        }
        &:hover {
          color: #414141;
        }
      }
    }
  }
}

.router-link-exact-active {
  color: $link-standard-color;
}

.main-wrapper {
  background-color: #fafafa;
  height: 100vh;
}
</style>
