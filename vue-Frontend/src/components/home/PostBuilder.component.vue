<template>
    <Panel header="Create Post" class="mypanel">
        <template #icons>
            <button class="p-panel-header-icon mr-2" @click="openNew">
                <span class="mybutton pi pi-upload"></span>
            </button>
        </template>
        <Avatar
            image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            shape="circle"
            size="large"
        />
        <span class="p-input-icon-left">
            <InputText
                class="myinput p-inputtext-lg"
                placeholder="Post your toughts..."
                v-model="text"
                @keyup.enter="updateParent"
            />
        </span>
    </Panel>
    <Dialog v-model:visible="publicationDialog" :style="{width: '450px'}" header="Publication Details" :modal="true" class="p-fluid">
            <div class="field">
                <label for="image">URL Image</label>
                <InputText id="image" required="true" autofocus v-model="publication.urlImage"/>
            </div>
            <div class="field">
                <label for="description">Description</label>
                <InputText id="description" required="true" autofocus v-model="publication.description"/>
            </div>
            <template #footer>
                <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
            </template>
        </Dialog>
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
            publicationDialog: false,
            submitted: false,
            publication: {}
        };
    },
    props: {
        publications: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        openNew() {
            this.publicationDialog = true;
        },
        saveProduct() {
            this.$emit("getPublication", { 
                id: this.publications.length + 1,
                username: "Anthony Guerrero",
                time: "Right now",
                description: this.publication.description,
                urlLogo:
                    "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
                urlImage: this.publication.urlImage
             });

            this.publicationDialog = false;
        },
        updateParent() {
            this.$emit("getPublication", { 
                id: this.publications.length + 1,
                username: "Anthony Guerrero",
                time: "Right now",
                description: this.text,
                urlLogo:
                    "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
                urlImage:
                    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cffcfd128204241.615b48ccbbaf2.jpg",
             });

             this.text = ""
        },
    },
};
</script>
