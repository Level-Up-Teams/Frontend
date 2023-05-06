<template>
    <Card style="width: 100%" class="mycard">
        <template #header>
            <img alt="user header" :src=publication.urlImage />
        </template>
        <template #title>
            <Avatar
                :image=publication.urlLogo
                shape="circle"
            />
            {{ publication.username }}
        </template>
        <template #subtitle> {{ publication.time }} </template>
        <template #content>
            <p>
                {{ publication.description }}
            </p>
        </template>
        <template #footer>
            <Button icon="pi pi-thumbs-up" class="like" />
            <Button
                icon="pi pi-comment"
                style="margin-left: 0.5em"
                class="comment"
            />
            <p href="#">
                See comments
                <span class="pi pi-angle-down"></span>
            </p>
        </template>
    </Card>

</template>

<style lang="scss" scoped>
.mycard {
    margin-bottom: 10px;
    :deep(.p-card-header) {
        border-radius: 10px 10px 0px 0px;
        background-color: black;
        img {
            padding: 20px 0;
            width: 100%;
        }
    }
    :deep(.p-card-title) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    :deep(.p-card-content) {
        padding-top: 0px;
    }
    :deep(.p-card-footer) {
        padding-top: 0px;
        button {
            background-color: transparent;
            border: none;
            .pi {
                font-size: 1.5rem;
            }
        }
        .like {
            color: #ff2273;
        }
        .comment {
            color: #284a76;
        }
    }
}
</style>

<script>
export default {
    name: "Publication",
    props: {
        publication: Object
    }
};
</script>
