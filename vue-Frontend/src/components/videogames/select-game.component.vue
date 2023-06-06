<template>
  <Toolbar class="mytoolbar">
    <template #start>
            <span class="card flex justify-content-center">
              <router-link to="/games">
                <i class="pi pi-arrow-left" style="font-size: 1.5rem"></i>
              </router-link>
            </span>
    </template>
    <template #center>
            <span class="text flex justify-content-center text-3xl">
              <b>{{game.name}}</b>
            </span>
    </template>
    <template #end>
      <a class="card flex justify-content-center">
        <i class="pi pi-thumbs-up-fill" style="font-size: 1.5rem"></i>
      </a>
    </template>
  </Toolbar>

  <Card style="width: 100%" class="mycard">
    <template #header>
      <img alt="user header" :src="game.image"/>
    </template>
    <template #content>
      <h3>{{game.name}}</h3>
      <p>
        {{game.description}}
      </p>
    </template>
  </Card>


  <div class="videogames">
    <div class=" pl-7 pt-2 pb-2">
      <h2 class="name font-light text-5xl" style="font-family: 'Roboto Mono', monospace;">Recommended for you</h2>
    </div>
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


  <div class="anexo">
    <div class="left">
      <router-link :to="`/home`">
        <span class="pi pi-comments " style="font-size: 8.5rem; color: #FF2273"></span>
      </router-link>
    </div>
    <div class="right">
      <span class="text-5xl" style="font-family: 'Roboto Mono', monospace;">
        Talk with other players in our forum
      </span>
    </div>
  </div>

  <Divider type="solid" />

  <div class="anexo">
    <div class="left">
      <span class="text-5xl" style="font-family: 'Roboto Mono', monospace;">
        Enrich your knowledge with our resources
      </span>

    </div>
    <div class="right">
      <router-link :to="`/games/resource/${game.id}`">
        <span class="pi pi-folder-open " style="font-size: 8.5rem; color: #FF2273" @click="resourceGame(game.id)"></span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.mytoolbar{
  margin-top: -2rem;
  background-color: #FFD33B;
  border:none;
  border-radius: 00px 00px 00px 00px;
  height: 100px;

  .card{
    color: #2B4D7A;
  }
  .card:hover{
    color: #FFD245;
  }
}
.mycard{

  :deep(.p-card-header) {
    img {
      width: 100%;
    }
  }
  :deep(.p-card-content) {
    padding-top: 1rem;
    padding-bottom: 3rem;
  }

}
.videogames {
  margin-top: -1rem;
  background-color: #FFD33B;
  border-radius: 00px 00px 00px 00px;
  height: 500px;
  .name{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

.anexo{
  margin-top:3rem;
  margin-bottom:2rem;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 2rem 2rem;
  padding: 2rem 15rem 2rem 15rem;
}
</style>

<script setup>
import { ref } from "vue";
import { HttpVideogamesService} from "@/core/services/http-videogames.service";
import { useRouter } from "vue-router";

const videogameService = new HttpVideogamesService();
const videogames = ref([]);
const game = ref({});
const router = useRouter();

const loadData = async () => {
  const [videogamesResponse] = await Promise.all([videogameService.getAllVideoGames()]);
  videogames.value = videogamesResponse.data;
}

const fetchGameDetails = async () => {
  const gameId = router.currentRoute.value.params.id;
  const gameDetail = await videogameService.getVideoGameById(gameId);
  game.value ={
    id: gameDetail.data.id,
    name: gameDetail.data.name,
    image: gameDetail.data.image,
    description: gameDetail.data.description,
  }
  console.log(gameId)
}
const selectGame = (gameId) => {
  location.reload();
  router.push({params:{id:gameId}});
};

const resourceGame = (gameId) => {
  router.push({params:{id:gameId}});
  console.log(gameId)
}

fetchGameDetails();
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


</script>
