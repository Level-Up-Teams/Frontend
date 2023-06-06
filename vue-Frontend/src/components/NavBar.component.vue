
<template>
   <div class="card relative z-5">
      <Menubar class="mypanel" :model="items" @item-click="handleMenuItemClick">
         <template #start>
            <img src="../assets/logo.png" alt="Logo" class="Logo">
         </template>
         <template #end> <!--Cargar imaganes del json-->
            <Avatar
               image="https://lamenteesmaravillosa.com/wp-content/uploads/2022/03/mujer-ojos-cerrados-mano-corazon-768x512.jpg"
               class="mr-5" size="xlarge" shape="circle" />
         </template>
      </Menubar>
   </div>
</template>

<script setup>
import { ref } from "vue";

const handleMenuItemClick = (items) => {
   if (items.to) {
      router.push(items.to);
   }
};

const items = ref([
   {
      label: 'Home',
      icon: 'pi pi-home',
      to: '/home'
   },
   {
      label: 'Coaches',
      icon: 'pi pi-users',
      to: '/coaches'
   },
   {
      label: 'Video Games',
      icon: 'pi pi-box',
      to: '/games'
   },
   {
      label: 'My Games',
      icon: 'pi pi-calculator'
   },
   {
      label: 'Profile',
      icon: 'pi pi-user',
      items: [
         {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',

         },
         {
            label: 'Settings',
            icon: 'pi pi-cog',
         },
         {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
         }
      ]


   }

]);
</script>

<style scoped lang="scss">
:deep(.mypanel) {
   background-color: #2A1E25;
   margin: 0;
   border: none;
   border-radius: 0;
   padding: 1.25rem;

}

.Logo {
   width: 7rem;
   height: 4rem;
   margin-left: 1rem;
   margin-right: 1rem;
}
.card {
   margin-bottom: 30px;
}
</style>