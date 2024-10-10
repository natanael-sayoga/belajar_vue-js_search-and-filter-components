<template>
<div>
    <DataTable 
        v-bind:items="data.todos" 
        v-if="data.todos.length>0">
    </DataTable>
</div>

<div v-if="data.error!==null">
    <h4>ERROR DURING FETCH DATA!</h4>
    <h6>{{ data.error }}</h6>
</div>
</template>

<script setup>
import DataTable from '@/components/DataTable.vue';
import { onBeforeMount, reactive, computed } from 'vue';
import jsonplaceholderapi from '@/services/JSONplaceholderApi';

let data = reactive({
    todos:[],
    todo:null,
    error:null
})

//const todos = jsonplaceholderapi
const api = jsonplaceholderapi
onBeforeMount(
    async () => {
        await api.getAllTodos()
        if(api.todos.length>0){
            data.todos = api.todos
            console.log(data.todos.length)
        }else{
            data.error = api.error
        }
    }
)
</script>