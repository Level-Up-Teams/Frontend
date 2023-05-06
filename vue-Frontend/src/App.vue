<template>
  <header class="Navbar">
    <NavBarComponent />
      <YourCoaches/>
      <CoachesList/>

  </header>
</template>

<script setup>
import NavBarComponent from "./components/NavBar.component.vue";
import YourCoaches from "@/components/CoachesList/YourCoaches.component.vue";
import CoachesList from "@/components/CoachesList/CoachesList.component.vue";
</script>

<style>

html{
    background-color: #284A76;
}
</style>