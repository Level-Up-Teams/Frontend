<template>
  <header class="Navbar">
    <NavBarComponent />
    <router-view />
  </header>
</template>

<script setup>
import NavBarComponent from "./components/NavBar.Component.vue";
</script>

<style>

html{
    background-color: #284A76;
}
</style>