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
        <div class="py-3 flex align-items-center justify-content-center">
            <span class="p-float-label">
            <InputText id="cardNumber" v-model="cardNumber" />
            <label for="cardNumber">Card number</label>
        </span>
        </div>

        <div class="py-3 flex align-items-center justify-content-center">
            <span class="px-2 p-float-label">
                <Calendar v-model="date" view="month" dateFormat="mm/y" />
                <label for="cvv">MM/YY</label>
            </span>
            <span class="px-2 p-float-label">
                <InputNumber v-model="cvv" inputId="cvv" :min="0" :max="999" />
                <label for="cvv">cvv</label>
            </span>
        </div>

        <div class="py-3 flex align-items-center justify-content-center">
            <span class="px-2 p-float-label">
            <InputText id="fName" v-model="fName" />
            <label for="fName">Name</label>
            </span>

            <span class="px-2 p-float-label">
            <InputText id="lName" v-model="lName" />
            <label for="name">Last name</label>
            </span>
        </div>

        <div class="py-3 flex align-items-center justify-content-center">
            <span class="p-float-label">
            <InputText id="email" v-model="email" />
            <label for="email">Email</label>
            </span>
        </div>

        <div class="py-3 flex align-items-center justify-content-center">
            <span class="p-float-label">
                <InputMask id="number-input" v-model="phoneNumber" mask="(+99)999-999-999" placeholder="(+99)999-999-999" />
                <label for="number-input">Phone number</label>
            </span>
        </div>

        <div class="flex align-items-center justify-content-center">
            <InputSwitch v-model="checked"/>
            <p>Remember Card</p>
        </div>
    </div>

    <div class="card">
        <div class="flex justify-content-center">
            <Button label="Reserve" class="bg-pink-500 hover:bg-pink-400 border-pink-50 justify-content-center w-20rem h-3rem"/>
        </div>

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import {RouterLink, useRoute, useRouter} from "vue-router"
import {CoachesService} from "@/core/services/CoachesService";

const router = useRouter()
const coach=ref({});
const route =useRoute();
const {id}=route.params;

const cardNumber = ref(null);
const email = ref(null);
const phoneNumber = ref(null);
const cvv = ref(null);
const date = ref(null);
const fName = ref(null);
const lName = ref(null);
const checked = ref(null);

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