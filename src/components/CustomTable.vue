<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th v-for="header in headers">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in tableDatas" v-bind:key="index">
                <td v-for="header in headers">{{ data[header] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
    tableDatas:{
        type: Array,
        required:true
    }
})

const headers = computed(
    () => {
        //please refers to: https://stackoverflow.com/questions/5525795/does-javascript-guarantee-object-property-order
        //in ES2015 and later non-integer keys will be returned in insertion order.
        //since all the keys in our db entity is non-integer, this should be safe
        let keys = Object.keys(props.tableDatas[0])
        return keys
    }
)
</script>

<style scoped>
tr:hover{
    cursor: pointer;
    background: mediumseagreen !important;
}
tr:hover td{
    background: transparent;
}
</style>