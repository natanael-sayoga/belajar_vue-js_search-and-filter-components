<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <SearchBox @search="handleSearch" :placeholder-text="'Enter Post Title Or ID'"/>
    </nav>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th v-for="header in headers">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="filteredItems.length==0" v-for="(item, index) in items" v-bind:key="index">
                <td v-for="header in headers">{{ item[header] }}</td>
            </tr>
            <tr v-if="filteredItems.length>0" v-for="(item, index) in filteredItems" v-bind:key="index">
                <td v-for="header in headers">{{ item[header] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { computed, defineProps, onMounted, reactive } from 'vue';
import SearchBox from './SearchBox.vue';

let data = reactive({
    keyword:""
})
const props = defineProps({
    items:{
        type: Array,
        required: true
    }
})

const headers = computed(
    () => {
        //please refers to: https://stackoverflow.com/questions/5525795/does-javascript-guarantee-object-property-order
        //in ES2015 and later non-integer keys will be returned in insertion order.
        //since all the keys in our db entity is non-integer, this should be safe
        let keys = Object.keys(props.items[0])
        return keys
    }
)

const filteredItems = computed(
    () => {
        return props.items.filter(item => item.title.includes(data.keyword) || item.id.toString().includes(data.keyword))
    }
)

function handleSearch(title){
    console.log(title)
    data.keyword = title
}

onMounted(
    () => {
        console.log(headers.value)
    }
)
</script>

<style scoped>
/* .clickable_items :hover{
    cursor: pointer;
    background: mediumseagreen;
} */

tr:hover{
    cursor: pointer;
    background: mediumseagreen !important;
}
tr:hover td{
    background: transparent;
}
</style>