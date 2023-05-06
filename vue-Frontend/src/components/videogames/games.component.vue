<template>
    <div class="card">
        <Toolbar class="mytoolbar">
            <template #start>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="value1" placeholder="Search" />
                </span>
            </template>

            <template #end>
                <div class="card flex justify-content-center">
                    <Dropdown v-model="selectedGame" :options="games" optionLabel="name" placeholder="Select a Game" class="w-full md:w-14rem" />
                </div>
            </template>
        </Toolbar>
    </div>

    <div class="pl-7 pt-4">
        <h2 class="name font-light text-5xl" style="font-family: 'Roboto Mono', monospace;">The Best Videogames</h2>
    </div>

    <div class="card pb-6">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="4000" class="mycarousel">
            <template #item="slotProps">
                <div  class=" surface-border border-round m-1 text-center py-4">
                    <div class="">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" height="200" width="250" />
                    </div>
                    <div>
                        <h4 class="text-2xl">{{ slotProps.data.name }}</h4>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>

    <div class="recomended pl-7 pt-4 pb-2 ">
        <h2 class="name font-light text-5xl" style="font-family: 'Roboto Mono', monospace;">Recommended for you</h2>
    </div>

    <div class="cardcontainer pb-6">
        <Card style="width: 20em" class="card1">
            <template #header>
                <img alt="user header" src="https://lh3.googleusercontent.com/rjB5xzrMuzLuWShz55w2P22s_a-hM46SxjeHWg50HVEYGcOY6yTqTTLBfEXvA0gr1s2goPl8F7LIXgO3_03uidzpC5IirtU6RzglPKoK"/>
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
        <Card style="width: 20em" class="card2">
            <template #header="slotProps">
                <img alt="user header" src="https://i.blogs.es/566944/1619416/1366_2000.webp" />
            </template>
            <template #title> Arena of Valor </template>
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
  :deep(.p-dropdown){
    border-color: #284A76;
  }
  :deep(.p-inputtext){
    border-color: #284A76;
  }
}

.mycarousel{
  :deep(.p-carousel) {
    background-color: #F1F9EE;
  }
  :deep(.p-carousel-card) {
    background-color: #F1F9EE;
  }
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

  :deep(.p-card-header) {
    border-radius: 10px 10px 0px 0px;
    img {
      border-radius: 10px 10px 0 0;
      width: 100%;
    }
  }
  :deep(.p-card-content) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}

</style>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/core/services/ProductService';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 5)));
    console.log(products)
})

const products = ref();
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

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

const value1 = ref(null);
const selectedGame = ref();
const games = ref([
    { name: 'Dota', code: 'NY' },
    { name: 'Valorant', code: 'RM' },
    { name: 'Arena of Valor', code: 'LDN' },
    { name: 'League of Leyend', code: 'IST' },
    { name: 'Counter Strike', code: 'PRS' },
    { name: 'F1 2021', code: 'PRS' }
]);
</script>

<script>
export default{
    name: "GameContent",
}
</script>