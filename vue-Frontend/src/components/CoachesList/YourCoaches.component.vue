<template>
    <div class="card">
        <template class="flex card-container overflow-hidden">
            <h1 class="flex-grow-1 flex align-items-center justify-content-start m-2 px-5 py-3 border-round">Your coaches</h1>
            <router-link to="/coachesList">
                <Button class="flex-none flex align-items-center justify-content-center m-2 px-5 py-3 border-round" label="Explore more" severity="warning"/>
            </router-link>

        </template>

    </div>
    <div class="card">
        <h1 class="text-left py-5 px-3">In service</h1>
        <Carousel :value="coaches" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round bg-cyan-600 hover:bg-cyan-700 m-2 text-center py-5 px-3" @click="router.push(`/coach/${slotProps.data.id}`)">
                    <div class="mb-3">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <div class="text-2xl text-900">"{{ slotProps.data.description }}"</div>
                        <div class="myrating justify-content-center">
                            <Rating :modelValue="slotProps.data.rating" on-icon="pi pi-star-fill" off-icon="pi pi-star" readonly :cancel="false"></Rating>
                        </div>
                        <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                    </div>
                </div>


            </template>
        </Carousel>
    </div>
    <Divider/>

    <div class="card">
        <h1 class="text-left py-5 px-3">Favorites</h1>
        <Carousel :value="coaches" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-0 surface-border border-round bg-cyan-600 hover:bg-cyan-700 m-2 text-center py-5 px-3" @click="router.push(`/coach/${slotProps.data.id}`)">
                    <div class="mb-3">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <div class="text-2xl text-900">"{{ slotProps.data.description }}"</div>
                        <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                        <div class="myrating">
                            <Rating :modelValue="slotProps.data.rating" on-icon="pi pi-star-fill" off-icon="pi pi-star" readonly :cancel="false"></Rating>
                        </div>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />

                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {CoachesService} from "@/core/services/CoachesService";
import {RouterLink, useRouter} from "vue-router"
const router = useRouter()

onMounted(() => {
    CoachesService.getCoachesSmall().then((data) => (coaches.value = data.slice(0, 8)));
});

const value1 = ref(null);
const coaches = ref();
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

const getSeverity = (coach) => {
    switch (coach.inventoryStatus) {
        case 'AVAILABLE':
            return 'success';

        case 'YOUR COACH':
            return 'warning';

        case 'NOT AVAILABLE':
            return 'danger';

        default:
            return null;
    }
};
</script>

<style lang="scss" scoped>

body {
  font-weight: normal;
  padding: 1rem;
}

.card {
  width: 80%;
  margin: auto;
  background: var(--surface-card);
  font-family: "Roboto";
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 1rem;

}

.myrating{
  :deep(.p-rating-item){
    .pi {
      color: #FFD33B;
    }

  }
}

img {
  width: 20rem;
  border-radius: 10px;
}
</style>