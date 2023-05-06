<template>
    <Toolbar class="mytoolbar">
        <template #start>
            <a href="" class="card">
              <i class="pi pi-arrow-left" style="font-size: 1.5rem"></i>
            </a>
        </template>
        <template #center>
            <span class="text text-3xl pl-8">
              <b>Video Game</b>
            </span>
        </template>
        <template #end>
            <div class="card">
                <Dropdown v-model="selectedGame" :options="games" optionLabel="name" placeholder="Select a Game" class="w-full md:w-14rem" />
            </div>
        </template>
    </Toolbar>

    <div class=" pl-7 pt-4 ">
        <h2 class="name font-light text-5xl" style="font-family: 'Roboto Mono', monospace;">Resources</h2>
    </div>

    <div class="anexo pt-2">
        <div class="left">
            <div class="p-panel-header-icon mr-2">
                <img alt="user header" src="../imgs/guia.png" height="180" width="220"/>
            </div>
        </div>
        <div class="right">
            <span class="text" style="font-family: 'Roboto Mono', monospace;">
                <h2>Improve your aim</h2>
                <h3>Dota 2</h3>
                <h3>Book</h3>
                <p>You will learn to develop a perfect aim to avoid failed bullets.</p>
            </span>
        </div>
    </div>

    <Divider type="solid" />

    <div class="anexo pt-4">
        <div class="left">
            <div class="p-panel-header-icon mr-2">
                <img alt="user header" src="../imgs/guia.png" height="180" width="220"/>
            </div>
        </div>
        <div class="right">
            <span class="text" style="font-family: 'Roboto Mono', monospace;">
                <h2>Improve your aim</h2>
                <h3>Valorant</h3>
                <h3>Book</h3>
                <p>You will learn to develop a perfect aim to avoid failed bullets.</p>
            </span>
        </div>
    </div>

    <Divider type="solid" />

    <div class="anexo pt-4">
        <div class="left">
            <div class="p-panel-header-icon mr-2">
                <img alt="user header" src="../imgs/guia.png" height="180" width="220"/>
            </div>
        </div>
        <div class="right">
            <span class="text" style="font-family: 'Roboto Mono', monospace;">
                <h2>Improve your aim</h2>
                <h3>Arena of Valor</h3>
                <h3>Book</h3>
                <p>You will learn to develop a perfect aim to avoid failed bullets.</p>
            </span>
        </div>
    </div>

    <Divider type="solid" />

    <div class="anexo pt-4">
        <div class="left">
            <div class="p-panel-header-icon mr-2">
                <img alt="user header" src="../imgs/guia.png" height="180" width="220"/>
            </div>
        </div>
        <div class="right">
            <span class="text" style="font-family: 'Roboto Mono', monospace;">
                <h2>Improve your aim</h2>
                <h3>F1 2021</h3>
                <h3>Book</h3>
                <p>You will learn to develop a perfect aim to avoid failed bullets.</p>
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
body {
    background-color: #F1F9EE;
}

.anexo{
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 2rem 2rem;
    padding: 00rem 10rem 2rem 15rem;
}
</style>

<script setup>
import {ref} from "vue";

const selectedGame = ref();
const games = ref([
    { name: 'Dota', code: 'NY' },
    { name: 'Valorant', code: 'RM' },
    { name: 'Arena of Valor', code: 'LDN' },
    { name: 'League of Leyend', code: 'IST' },
    { name: 'Counter Strike', code: 'PRS' },
    { name: 'F1 2021', code: 'PRS' }
])
</script>

<script>
export default{
    name: "ResourcesContent"
}
</script>