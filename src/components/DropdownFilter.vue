<template>
    <div class="position-relative flex item-center w-100 px-4">
        <button @click="data.showFilter=!data.showFilter" class="btn btn-outline-dark">
            Filter
        </button>
        <div v-if="data.showFilter" class="position-absolute top-12 z-10 w-auto p-3 bg-white rounded shadow">
            <h6 class="mb-3 text-sm font-medium text-gray-900">Status</h6>
            <ul class="space-y-2 text-sm">
                <li>Enter your custom filter...</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
let data = reactive({
    showFilter: false,

})
</script>