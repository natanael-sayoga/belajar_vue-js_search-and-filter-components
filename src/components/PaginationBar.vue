<template>
    <ul class="pagination">
        <li class="page-item" @click.prevent="prevPage()">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>

        <select class="form-select" v-model="selected" v-on:change="goTo()">
            <option 
                v-for="num in maxPageNumber" 
                :value="num">
                {{ `Page ${num} out of ${maxPageNumber}` }}
            </option>
        </select>

        <li class="page-item" @click.prevent="nextPage()">
            <a class="page-link" href="#" aria-label="Next">
                <span class="sr-only">Next</span>
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</template>

<script setup>
import { computed, defineProps, reactive, defineModel } from 'vue';

const selected = defineModel('selected', {default:1})
let data = reactive({
    selected:1
})

const props = defineProps({
    totalItems:{
        type:Number,
        required:true
    },
    itemPerPages:{
        type:Number,
        required:true
    }
})

const emit = defineEmits([
    'nextPage', 'prevPage', 'goTo'
])

const maxPageNumber = computed(
    () => {
        return Math.ceil(props.totalItems / props.itemPerPages)
    }
)

function nextPage(){
    if(selected.value!=maxPageNumber.value){
        selected.value++
        //emit('nextPage', data.selected)
    }
}

function prevPage(){
    if(selected.value!=1){
        selected.value--
        //emit('prevPage', data.selected)
    }
}

function goTo(){
    //emit('goTo', data.selected)
} 
</script>

<style scoped>
.form-select{
    width: fit-content;
}
</style>