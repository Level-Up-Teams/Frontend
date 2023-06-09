<template>
    <div class="card">
      <div class="flex justify-content-between flex-wrap card-container">
          <Button icon="pi pi-arrow-left" style="color: #000000" text class="w-4rem h-4rem" @click="router.go(-1)"/>
          <h2>{{coach.name}} {{coach.last_name}}</h2>
          <Button icon="pi pi-thumbs-up-fill" style="color: #FF2273" text class="w-4rem h-4rem"/>
      </div>
    </div>
   <div class="card flex flex-column">
       <div class="py-3 flex align-items-center justify-content-center">
           <img :src="coach.video" class="w-6 shadow-2" />
       </div>

       <div class="grid nested-grid p-5">
          <div class="col-4 text-center pt-5">
              <img :src="coach.image" class="w-6 shadow-2" />
          </div>
           <div class="col-8 p-3 pt-5">
               <div class="grid p-3">
                   <div class="col-6 text-center p-3">
                       <p class="py-2">Rating: {{coach.rating}}</p>
                       <p class="py-2">Some years old</p>
                       <p class="py-2">Country</p>
                   </div>
                   <div class="col-6 text-center p-3">
                       <p class="py-2">{{coach.price}} / session</p>
                       <p class="py-2">Language</p>
                       <p class="py-2">{{coach.description}}</p>
                   </div>
               </div>
           </div>
           <div class="col-12 p-5">
               <h4>Experiences:</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ante ut leo eleifend, nec egestas felis ornare. Suspendisse ex libero, suscipit in lectus nec, rhoncus ultrices dui. Proin libero leo, hendrerit a ipsum nec, tincidunt feugiat enim. Aenean eget dictum libero. Mauris a mattis sapien. Aliquam ac consequat lacus, maximus mollis neque. Cras varius eros vel risus ultricies mollis. Sed eget mi lobortis, molestie justo et, porttitor augue. Vestibulum fringilla lorem tortor, et scelerisque ante lobortis vitae. Cras vitae arcu turpis. Nunc ullamcorper leo ut purus tincidunt, quis gravida metus elementum. Nullam sed mauris mi. Ut vel lorem metus. Morbi vestibulum ex non ipsum faucibus ultricies. Donec sed metus semper, dapibus augue id, ullamcorper erat. Morbi et eleifend libero.</p>
           </div>
           <div class="col-12 p-5">
               <Button label="Videos" rounded icon="pi pi-angle-right" icon-pos="right" class="bg-blue-800 hover:bg-blue-900 border-blue-50 justify-content-center w-12 h-3rem"/>
           </div>
       </div>

   </div>
    <div class="card">
      <div class="flex justify-content-between flex-wrap card-container">
          <router-link :to="{name: 'selectTime', params:{id: id}}">
              <Button label="Reserve" rounded icon="pi pi-angle-right" icon-pos="right" severity="warning" class="justify-content-center w-20rem h-3rem"/>
          </router-link>

          <span class="p-buttonset">
              <Button icon="pi pi-whatsapp" style="color: #FF2273" class="w-4rem h-3rem" text />
              <Button icon="pi pi-instagram" style="color: #FF2273" class="w-4rem h-3rem" text/>
              <Button icon="pi pi-discord" style="color: #FF2273" class="w-4rem h-3rem" text/>
          </span>

      </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import {RouterLink, useRoute, useRouter} from "vue-router"
import {CoachesService} from "@/core/services/CoachesService";

const router = useRouter()
const coach=ref({});
const route =useRoute();
const {id}=route.params;

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
p{
    font-family: sans-serif;
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