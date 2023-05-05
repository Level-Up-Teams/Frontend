<template>
  <header class="Navbar">
    <NavBarComponent />
      <YourCoaches/>
      <CoachesList/>

  </header>
</template>

<script setup>
import NavBarComponent from "./components/NavBar.Component.vue";
import YourCoaches from "@/coaches-list/components/YourCoaches.Component.vue";
import CoachesList from "@/coaches-list/components/CoachesList.Component.vue";
</script>

<style>

html{
    background-color: #284A76;
}
</style>