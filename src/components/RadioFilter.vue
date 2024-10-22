<template>
    <span>
        <input type="radio" id="All" value=null checked v-model="data.completed" @change="emit('radiofilter', data.completed)"/>
        <label for="All">All</label>
    </span>

    <span>
        <input type="radio" id="true" value=1 v-model="data.completed" @change="emit('radiofilter', data.completed)"/>
        <label for="true">True</label>
    </span>

    <span>
        <input type="radio" id="false" value=0 v-model="data.completed" @change="emit('radiofilter', data.completed)"/>
        <label for="false">False</label>
    </span>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';
let data = reactive({
    completed:null
})
const emit = defineEmits([
    'radiofilter'
])
</script>