<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/hello-world.vue'
</script>

<template>
  <header>
    <img
      alt="Cars logo"
      class="logo"
      src="https://www.aubaho.de/media/image/f8/06/ce/BL-226_Seite_2.jpg"
      height="150"
    />
    <div class="wrapper">
      <HelloWorld msg="Auto Dealer" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/SUV">SUV</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 1.5rem;
}

nav {
  width: 100%;
  font-size: 16px;
  margin-top: 2rem;
  text-align: left;
}

nav a.router-link-exact-active {
  color: #4db7fe;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1.5rem;
  border-left: 1px solid var(--color-border);
  color: #4db7fe;
}

nav a:first-of-type {
  border: 0;
}
</style>
