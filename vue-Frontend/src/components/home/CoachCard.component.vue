<template>
    <Card style="width: 45%" class="mycard">
        <template #header>
            <img alt="user header" :src="coach.image" />
        </template>
        <template #title> {{ coach.name }} </template>
        <template #subtitle> {{ coach.category }} </template>
        <template #content>
            <p>
                {{ coach.description }}
            </p>
        </template>
    </Card>
</template>

<style lang="scss" scoped>
.mycard {
    :deep(.p-card-header) {
        border-radius: 10px 10px 0px 0px;
        img {
            border-radius: 10px 10px 0 0;
            width: 100%;
            max-height: 40vh;
            object-fit: cover;
        }
    }
    :deep(.p-card-subtitle) {
        color: #ff2273;
        font-weight: 700;
    }
    :deep(.p-card-content) {
        padding-top: 0px;
        padding-bottom: 0px;
    }
    :deep(.p-card-footer) {
        padding-top: 0px;
    }
}
</style>

<script setup>
defineProps({
    coach: Object,
});
</script>
