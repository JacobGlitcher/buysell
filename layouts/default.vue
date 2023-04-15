<template>
  <div class="wrapper">
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
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
  .page-header {
    flex: 0 1 auto;
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
    flex: 1 1 auto;
    background-color: #fafafa;
    padding: 30px;
  }
}
</style>
