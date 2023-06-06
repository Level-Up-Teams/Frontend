<template>
    <div class="base">
        <PostBuilder
            @getPublication="pushPublication"
            :publications="publications"
        />
        <Divider></Divider>
        <Publication
            v-for="publication in publications"
            :publication="publication"
        />
        <Divider></Divider>
        <CoachesForYou />
    </div>
</template>

<style scoped>
* {
    width: 100%;
    max-width: 45em;
    background-color: #f1f9ee;
    border-radius: 20px;
}
.base {
    margin: auto;
    padding: 30px;
}
</style>

<script setup>
import { PublicationsService } from "../../core/services/http-publications.service";
import PostBuilder from "./PostBuilder.component.vue";
import Publication from "./Publication.component.vue";
import CoachesForYou from "./CoachesForYou.component.vue";
import { ref, onMounted } from "vue";

const publications = ref([]);
const apiPublications = new PublicationsService();

onMounted(() => {
    getPublications();
});

async function getPublications() {
    const response = await apiPublications.getInfo();
    response.data.forEach((element) => {
        publications.value.unshift(element);
    });
}

async function pushPublication(obj) {
    const response = await apiPublications
        .postInfo(obj)
        
    publications.value.unshift(obj);
    
}
</script>
