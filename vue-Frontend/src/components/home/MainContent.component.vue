<template>
    <div class="base">
        <PostBuilder @getPublication="pushPublication" :publications="publications"/>
        <Divider></Divider>
        <Publication v-for="publication in publications" :publication = "publication"/>
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

<script>
import { PublicationsService } from "../../core/services/http-publications.service";
import PostBuilder from "./PostBuilder.component.vue";
import Publication from "./Publication.component.vue";
import CoachesForYou from "./CoachesForYou.component.vue";
export default {
    name: "MainContent",
    components: { PostBuilder, Publication, CoachesForYou },
    data() {
        return {
            publications: [],
            apiPublications: new PublicationsService() 
        };
    },
    created() {
        this.getPublications();
    },
    methods: {
        getPublications() {
            this.apiPublications.getInfo().then(response => this.publications = response.data)
        },
        pushPublication(obj) {
            this.publications.push(obj.publication)
        }
    }
};
</script>
