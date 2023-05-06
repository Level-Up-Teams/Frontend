<template>
    <Panel header="Create Post" class="mypanel">
        <template #icons>
            <button class="p-panel-header-icon mr-2">
                <span class="pi pi-upload"></span>
            </button>
        </template>
        <Avatar image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" shape="circle" size="large" />
        <span class="p-input-icon-left">
            <InputText class="myinput p-inputtext-lg" placeholder="Post your toughts..." v-model="text"
                @keyup.enter="updateParent" />
        </span>
    </Panel>
</template>

<style lang="scss" scoped>
.mypanel {
    width: 100%;

    :deep(.p-panel-header) {
        background-color: #ffd33b;

        .p-panel-title {
            font-size: 1.4rem;
        }

        .pi {
            color: #ff2273;
            font-size: 1.5rem;
        }
    }

    :deep(.p-panel-content) {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    :deep(.p-inputtext) {
        padding-left: 1rem;
        padding-top: 0.6rem;
        padding-bottom: 0.6rem;
        border-radius: 30px;
        width: 100%;
    }

    :deep(.p-input-icon-left) {
        width: 90%;
    }
}
</style>

<script>
export default {
    name: "PostBuilder",
    data() {
        return {
            text: "",
            newPublication: new Object
        }
    },
    props: {
        publications: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        updateParent() {
            const publication = {
                id: this.publications.length + 1,
                username: "Anthony Guerrero",
                time: "Right now",
                description: this.text,
                urlLogo: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
                urlImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cffcfd128204241.615b48ccbbaf2.jpg"
            }
            this.text = ""
            this.$emit('getPublication', { publication })
        }
    }
};
</script>
