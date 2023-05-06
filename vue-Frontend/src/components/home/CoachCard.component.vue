<template>
    <Card style="width: 45%" class="mycard">
        <template #header>
            <img alt="user header" src="../assets/img/coach.jpg" />
        </template>
        <template #title> Frank Villanueva </template>
        <template #subtitle> Valorant </template>
        <template #content>
            <p>
                Hello to all friends, I am the coach that you have always been
                looking for. I have 2 years of experience as a coach, leading
                giant teams like G2 and I know that I can be of great help to
                you now.
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

<script>
export default {
    name: "CoachCard",
};
</script>
