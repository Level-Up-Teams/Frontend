<template>
    <Toolbar class="mytoolbar">
        <template #start>
            <span class="card flex justify-content-center">
              <i class="pi pi-arrow-left" style="font-size: 1.5rem"></i>
            </span>
        </template>
        <template #center>
            <span class="text flex justify-content-center text-3xl">
              <b>Dota 2</b>
            </span>
        </template>
        <template #end>
            <span class="card flex justify-content-center">
                <i class="pi pi-thumbs-up-fill" style="font-size: 1.5rem"></i>
            </span>
        </template>
    </Toolbar>

    <Card style="width: 100%" class="mycard">
        <template #header>
            <img alt="user header" src="../imgs/Dota2.jpg"/>
        </template>
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

    <Divider type="solid" />

    <div class="couches">
        <div class=" pl-7 pt-2 pb-2 ">
            <h2 class="name font-light text-5xl" style="font-family: 'Roboto Mono', monospace;">Recommended for you</h2>
        </div>
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

    <Divider type="solid" />

    <div class="anexo">
        <div class="left">
            <a href="" class="p-panel-header-icon mr-2">
                <span class="pi pi-comments " style="font-size: 8.5rem; color: #FF2273"></span>
            </a>
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
            <a href="" class="p-panel-header-icon mr-2">
                <span class="pi pi-folder-open " style="font-size: 8.5rem; color: #FF2273"></span>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.mytoolbar{
    background-color: #F1F9EE;
    border-color: #F1F9EE;

    .card{
        color: #2B4D7A;
    }
    .card:hover{
        color: #FFD245;
    }
}
.mycard{

    margin-bottom: 10px;
    :deep(.p-card-header) {
            img {
                width: 100%;
            }
        }
    :deep(.p-card-content) {
        padding-top: 1rem;
    }

}
.couches{
    background-color: #00bfce;
    border-radius: 10px 10px 10px 10px;
}

.anexo{
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 2rem 2rem;
    padding: 2rem 15rem 2rem 15rem;
}

</style>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(6, 10)));
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

</script>

<script>
export default{
name: "SelectGameContent"
}
</script>