<template>
    <CustomTable 
        v-bind:tableDatas="paginatedPage"
        v-if="data.todos.length>0">
    </CustomTable>
    <PaginationBar 
        v-bind:totalItems="data.todos.length"
        v-bind:itemPerPages="data.pagination.itemPerPage">
    </PaginationBar>
</template>

<script setup>
import CustomTable from '@/components/CustomTable.vue';
import PaginationBar from '@/components/PaginationBar.vue';
import { computed, onBeforeMount, reactive } from 'vue';
import jsonplaceholderapi from '@/services/JSONplaceholderApi';

let data = reactive({
    todos:[],
    pagination:{
        currentPage:1,
        itemPerPage:25
    }
})

const paginatedPage = computed(
    () => {
        //everytime the currentPage is changed, we will slice the whole array then show them:
        return data.todos.slice((data.pagination.currentPage - 1) * data.pagination.itemPerPage, data.pagination.currentPage * data.pagination.itemPerPage)
    }
)

//const todos = jsonplaceholderapi
const api = jsonplaceholderapi
onBeforeMount(
    async () => {
        await api.getAllTodos()
        if(api.todos.length>0){
            data.todos = api.todos
        }else{
            data.error = api.error
        }
    }
)
</script>