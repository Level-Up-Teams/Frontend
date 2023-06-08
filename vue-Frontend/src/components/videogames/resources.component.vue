<template>
  <Toolbar class="mytoolbar">
    <template #start>
      <router-link :to="`/game/${game.id}`">
        <i class="pi pi-arrow-left" style="font-size: 1.5rem" @click="selectGame(game.id)"></i>
      </router-link>

    </template>
    <template #center>
      <div class="text text-3xl pl-8">
        <h2>{{ game.name }}</h2>
      </div>
    </template>
  </Toolbar>

  <div class=" pl-7 pt-4 mt-3 mb-8">
    <h2 class="name font-light text-5xl" style="font-family: 'Roboto Mono', monospace;">Resources</h2>
  </div>

  <div class="anexo pt-2">
    <div class="left">
      <div class="p-panel-header-icon mr-2">
        <img alt="user header" :src=" game.guide1" height="180" width="250"/>
      </div>
    </div>
    <div class="right">
      <div class="text" style="font-family: 'Roboto Mono', monospace;">
        <h2>Guia 1</h2>
        <h3>Book</h3>
        <p>You will learn to develop a perfect aim to avoid failed bullets.</p>
      </div>
    </div>
  </div>


  <div class="anexo pt-4 mt-5">
    <div class="left">
      <div class="p-panel-header-icon mr-2">
        <img alt="user header" :src=" game.guide2" height="180" width="250"/>
      </div>
    </div>
    <div class="right">
      <div class="text" style="font-family: 'Roboto Mono', monospace;">
        <h2>Guia 2</h2>
        <h3>Book</h3>
        <p>You will learn to develop a perfect aim to avoid failed bullets.</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.mytoolbar{
  margin-top: -2rem;
  background-color: #FFD33B;
}

.anexo{
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 2rem 2rem;
  padding: 00rem 10rem 2rem 15rem;
}
</style>

<script setup>
import { ref } from "vue";
import { HttpVideogamesService} from "@/core/services/http-videogames.service";
import { useRouter } from "vue-router";

const videogameService = new HttpVideogamesService();
const game = ref({});
const router = useRouter();

const fetchGameDetails = async () => {
  const gameId = router.currentRoute.value.params.id;
  const gameDetail = await videogameService.getVideoGameById(gameId);
  game.value ={
    id: gameDetail.data.id,
    name: gameDetail.data.name,
    image: gameDetail.data.image,
    description: gameDetail.data.description,
    guide1: gameDetail.data.guide1,
    guide2: gameDetail.data.guide2,
  }
  console.log(gameId)
}
const selectGame = (gameId) => {
  router.push({params:{id:gameId}});
  console.log(gameId)
};

fetchGameDetails();


</script>
