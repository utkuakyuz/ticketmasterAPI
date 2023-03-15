<template>
 <main class="p-5">
  <router-view />
 </main>
 <hr />
</template>

<script setup>
import { getEvents, EventsData, getSingleEvent } from "./store/content";
import Table from "./components/table.vue";
// getEvents()
// getSingleEvent()
</script>
