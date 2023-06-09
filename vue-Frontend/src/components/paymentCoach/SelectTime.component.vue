<template>
    <div class="card flex overflow-hidden">
        <div class="flex-none flex align-items-center justify-content-center">
            <Button icon="pi pi-arrow-left" style="color: #000000" text class="w-4rem h-4rem" @click="router.go(-1)"/>
        </div>
        <div class="flex-grow-1 flex align-items-center justify-content-center">
            <h2>{{coach.name}} {{coach.last_name}}</h2>
        </div>
    </div>
    <div class="card flex flex-column">
        <div class="flex align-items-center justify-content-center">
            <p>Select an enable day</p>
        </div>
        <div class="flex align-items-center justify-content-center">
            <Calendar v-model="date" :minDate="today" showButtonBar />

        </div>

        <div class="flex align-items-center justify-content-center">
            <p>Select an enable time</p>
        </div>
        <div class="flex align-items-center justify-content-center">
            <Calendar id="calendar-timeonly" v-model="time" timeOnly />
        </div>
    </div>
    <div class="card">
        <div class="flex justify-content-center">
            <router-link :to="{name: 'payCoach', params:{id: id}}">
                <Button label="Go to pay" severity="warning" class="justify-content-center w-20rem h-3rem"/>
            </router-link>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {RouterLink, useRoute, useRouter} from "vue-router"
import {CoachesService} from "@/core/services/CoachesService";

const router = useRouter()
const coach=ref({});
const route =useRoute();
const {id}=route.params;

const date = ref();
const time = ref();

onMounted(()=>{
    coach.value = CoachesService.getById(id).then((data) => (coach.value = data));
})
</script>

<style scoped>
body {
    font-weight: normal;
    font-family: sans-serif;
    padding: 1rem;
}
.card {
    width: 80%;
    margin: auto;
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    font-family: sans-serif;
}
</style>