<template>
 <h1>It Works!</h1>
 <h3>This is the detail page of the following event:</h3>
 <p>{{SingleEventData.list.name}}</p>
 <p>{{SingleEventData.list.id}}</p>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { getSingleEvent,SingleEventData } from "../store/content";
const route = useRoute()
getSingleEvent(route.params.id)
</script>