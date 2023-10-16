<template>
  <div>
    <header>
      <nav>
        <li><NuxtLink to="/">Nuxt Dojo</NuxtLink></li>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<style>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
