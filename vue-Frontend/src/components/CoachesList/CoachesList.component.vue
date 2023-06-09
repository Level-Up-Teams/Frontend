<template>
    <div class="card">
        <template class="flex card-container overflow-hidden">
                <span class="p-input-icon-left ">
                    <i class="pi pi-search" />
                    <InputText v-model="value1" placeholder="Search" />
                    <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Stars" @change="onSortChange($event)" />
                </span>

        </template>

    </div>
    <div class="card">
        <DataView :value="coach" :sortOrder="sortOrder" :sortField="sortField">

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" @click="router.push(`/coach/${slotProps.data.id}`)">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="slotProps.data.image" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <div class="text-2xl text-900">"{{ slotProps.data.description }}"</div>
                                <Rating :modelValue="slotProps.data.rating" on-icon="pi pi-star-fill" off-icon="pi pi-star" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import {CoachesService} from "@/core/services/CoachesService";
    import {RouterLink, useRouter} from "vue-router"
    const router = useRouter()

    onMounted(() => {
        CoachesService.getCoaches().then((data) => (coach.value = data.slice(0, 10)));
    });

    const value1 = ref(null);
    const coach = ref();
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
        {label: 'Stars High to Low', value: '!rating'},
        {label: 'Stars Low to High', value: 'rating'},
    ]);
    const onSortChange = (event) => {
        const value = event.value.value;
        const sortValue = event.value;

        if (value.indexOf('!') === 0) {
            sortOrder.value = -1;
            sortField.value = value.substring(1, value.length);
            sortKey.value = sortValue;
        }
        else {
            sortOrder.value = 1;
            sortField.value = value;
            sortKey.value = sortValue;
        }
    };

    const getSeverity = (coach) => {
        switch (coach.inventoryStatus) {
            case 'AVAILABLE':
                return 'success';

            case 'YOUR COACH':
                return 'warning';

            case 'NOT AVAILABLE':
                return 'danger';

            default:
                return null;
        }
    };
</script>

<style scoped>
    body {
        font-weight: normal;
        padding: 1rem;
    }

    .card {
        width: 80%;
        margin: auto;
        background: var(--surface-card);
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    img {
        width: 20rem;
        border-radius: 10px;
    }

    i{
        color: #FF2273;
    }
</style>