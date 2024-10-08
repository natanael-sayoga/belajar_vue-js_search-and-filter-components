<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
            </tr>
        </thead>
        <tbody>
            <tr class="clickable_items" v-for="(item, index) in items" v-bind:key="index">
                <td>{{ item.userId }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.completed }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    items:{
        type: Array,
        required: true
    }
})
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