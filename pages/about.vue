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
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
      reprehenderit quod atque iure commodi? Similique eos dignissimos deleniti
      sunt. Ratione eligendi incidunt repudiandae exercitationem sit quaerat,
      soluta molestias eos illo.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
      reprehenderit quod atque iure commodi? Similique eos dignissimos deleniti
      sunt. Ratione eligendi incidunt repudiandae exercitationem sit quaerat,
      soluta molestias eos illo.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
