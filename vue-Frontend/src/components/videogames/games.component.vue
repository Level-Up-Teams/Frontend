<template>
  <div class="card">
    <Toolbar class="mytoolbar" :value="videogames">
      <template #start>
                  <span class="p-input-icon-left">
                      <i class="pi pi-search" />
                      <InputText v-model="value1" placeholder="Search" />
                  </span>
      </template>

      <template #end>
        <div class="card flex justify-content-center">
          <Dropdown v-model="selectedGame" :options="videogames" optionLabel="name" placeholder="Select a Game" class="w-full md:w-14rem">
            <template #option="slotProps">
              <div class="flex align-items-center" @click="selectGame(slotProps.option.id)" >
                <router-link :to="`/game/${slotProps.option.id}`">
                  <div class="title-dropdown">{{ slotProps.option.name }}</div>
                </router-link>
              </div>
            </template>
          </Dropdown>
        </div>
      </template>
    </Toolbar>
  </div>

  <div class="pl-7 pt-4 mt-3 mb-4">
    <h2 class="name font-light text-5xl" style="font-family: 'Roboto Mono', monospace;">The Best Videogames</h2>
  </div>

  <div class="card pb-6">
    <Carousel :value="videogames" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="4000" class="mycarousel">
      <template #item="slotProps">
        <div  class=" surface-border border-round m-1 text-center py-4" @click="selectGame(slotProps.data.id)">
          <div class="">
            <router-link :to="`/game/${slotProps.data.id}`">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" height="200" width="250" />
            </router-link>
          </div>
          <div>
            <h4 class="text-2xl">{{ slotProps.data.name }}</h4>
          </div>
        </div>
      </template>
    </Carousel>
  </div>

  <div class="recomended pl-7 pt-4 pb-2 mt-3">
    <h2 class="name font-light text-5xl mt-3 mb-5" style="font-family: 'Roboto Mono', monospace;">Recommended for you</h2>
  </div>

  <div class="cardcontainer pb-6">
    <Card style="width: 20em" class="my-card">
      <template #header>

        <img alt="user header" src="https://wallpapercave.com/wp/V8Ee1Bm.jpg"/>

      </template>
      <template #title> Dota 2 </template>
      <template #subtitle> MOBA </template>
      <template #content>
        <p>
          Cada día, millones de jugadores de todo el mundo entran en batalla
          como uno de los más de cien héroes de Dota en un enfrentamiento por
          equipos de 5 contra 5. Dota es el juego de estrategia en tiempo real
          de acción multijugador más profundo jamás creado y siempre hay una
          nueva estrategia o táctica que descubrir. Jugar a Dota es gratis
          y siempre lo será. Comienza ya a defender tu Ancestro
        </p>
      </template>
    </Card>
    <Card style="width: 20em" class="my-card">
      <template #header>
        <img alt="user header" src="https://i.blogs.es/566944/1619416/1366_2000.webp" />
      </template>
      <template #title> Arena of valor </template>
      <template #subtitle> MOBA </template>
      <template #content>
        <p>
          ¡Experimenta Arena of Valor,
          un nuevo y épico campo de batalla multijugador en línea (MOBA) 5 contra 5 desarrollado por TiMi Studio Group!
          Domina héroes únicos y poderosos, como Batman,
          mientras forma equipo con amigos. ¡ Crea el equipo más dominante
          que el mundo MOBA jamás haya visto! LOGOTIPO DE DC, BATMAN y todos los personajes
          y elementos relacionados y TM DC Comics.

        </p>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
body {
  background-color: #F1F9EE;
}
.mytoolbar{
  background-color: #FFD33B;
  border-color: #FFD33B;
  margin-top: -2rem;
  height: 100px;
  :deep(.p-dropdown){
    border-color: #284A76;
  }
  :deep(.p-inputtext){
    border-color: #284A76;
  }
}
.title-dropdown{
  color: black;

}

.mycarousel{

}

.recomended{
  background-color: #FFD33B;
}

.cardcontainer{
  background-color: #FFD33B;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 2rem 2rem;

  :deep(.my-card) {
    border-radius: 10px 10px 00px 00px;
    img {
      border-radius: 10px 10px 00px 00px;
      width: 100%;
    }
  }
  :deep(.p-card-content) {
    padding-top: 00px;
    padding-bottom: 00px;
  }
}

</style>

<script setup>
import { ref } from "vue";
import { HttpVideogamesService} from "@/core/services/http-videogames.service";
import { useRouter } from 'vue-router';


const videogameService = new HttpVideogamesService();
const videogames = ref([]);
const router = useRouter();

const loadData = async () => {
  const [videogamesResponse] = await Promise.all([videogameService.getAllVideoGames()]);
  videogames.value = videogamesResponse.data;
  console.log(videogames)
}

const selectGame = (gameId) => {
  router.push({params:{id:gameId}});
  console.log(gameId);
};

loadData();

const responsiveOptions = ref([
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
]);


const value1 = ref(null);
const selectedGame = ref();

</script>
