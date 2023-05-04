<template>
  <header class="Navbar">
    <NavBarComponent />
  </header>

  <main>
    <LoginComponent />
  </main>

</template>

<script setup>
  import NavBarComponent from "./components/NavBar.Component.vue";
  import LoginComponent from "./components/Login.Component.vue";
</script>

<style scoped></style>