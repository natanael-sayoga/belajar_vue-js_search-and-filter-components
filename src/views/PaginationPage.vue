<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <SearchBox @search="handleSearch" :placeholderText="'Cari...'"/>
    </nav>
    <CustomTable 
        v-bind:tableDatas="paginatedPage"
        v-if="data.todos.length>0">
    </CustomTable>
    <PaginationBar 
        v-bind:totalItems="data.todos.length"
        v-bind:itemPerPages="data.pagination.itemPerPage"
        @nextPage="handleNextPage"
        @prevPage="handlePrevPage"
        @goTo="handleGoTo">
    </PaginationBar>
</template>

<script setup>
import CustomTable from '@/components/CustomTable.vue';
import PaginationBar from '@/components/PaginationBar.vue';
import { computed, onBeforeMount, reactive } from 'vue';
import jsonplaceholderapi from '@/services/JSONplaceholderApi';
import SearchBox from '@/components/SearchBox.vue';

let data = reactive({
    todos:[],
    filteredTodos:[],
    pagination:{
        currentPage:1,
        itemPerPage:25
    },
    filter:{
        searchFilter:""
    }
})

const paginatedPage = computed(
    () => {
        //let filtered = filteredPage.value

        //everytime the currentPage is changed, we will slice the whole array then show them:
        //return filtered.slice((data.pagination.currentPage - 1) * data.pagination.itemPerPage, data.pagination.currentPage * data.pagination.itemPerPage)
        return data.todos.slice((data.pagination.currentPage - 1) * data.pagination.itemPerPage, data.pagination.currentPage * data.pagination.itemPerPage)
    }
)

const filteredPage = computed(
    () => {
        let filteredPage = data.todos
        if(data.filter.searchFilter!=""){
            filteredPage = filteredPage.filter(item => item.title.includes(data.filter.searchFilter))
        }

        console.log('filtered pages:', filteredPage)
        data.filteredTodos = filteredPage
        return filteredPage
    }
)

//handling emitted event:
function handleNextPage(pageNumber){
    data.pagination.currentPage = pageNumber
}

function handlePrevPage(pageNumber){
    data.pagination.currentPage = pageNumber
}

function handleGoTo(pageNumber){
    data.pagination.currentPage = pageNumber
}

function handleSearch(keyword){
    data.filter.searchFilter = keyword
    console.log('searcing for', data.filter.searchFilter)
    console.log('title found:', filteredPage.value)
}

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