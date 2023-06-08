<template>
    <Panel header="Coaches for you" class="mypanel">
        <CoachCard v-for="coach in coaches" :coach="coach" />
        <template #footer>
            <Button label="See more" class="mybutton" @click="goToCoaches" />
        </template>
    </Panel>
</template>

<style lang="scss" scoped>
.mypanel {
    width: 100%;
    :deep(.p-panel-header) {
        background-color: #00bfce;
        .p-panel-title {
            font-size: 1.4rem;
        }
    }
    :deep(.p-panel-content) {
        display: flex;
        gap: 2rem;
    }
    :deep(.p-panel-footer) {
        .p-button {
            background-color: #ffd33b;
            color: black;
            width: 100%;
            border: none;
            border-radius: 20px;
        }
    }
}
</style>

<script setup>
import CoachCard from "./CoachCard.component.vue";
import { ref, onMounted } from "vue";
import { CoachesService } from "@/core/services/CoachesService";
import { useRouter } from "vue-router";

const coaches = ref([]);
const router = useRouter();

onMounted(() => {
    CoachesService.getCoachesMini().then((data) => (coaches.value = data));
});

const goToCoaches = () => {
    router.push({
        name: "coaches",
    });
};
</script>
