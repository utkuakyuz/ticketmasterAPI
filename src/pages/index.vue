<template>
 <div>
  <div class="container-sm mt-5">
   <h3 class="mb-3">
    Welcome to Ticket App. You can search for tickets using keywords.
   </h3>
   <form class="form-inline d-flex mb-5 w-50" @submit.stop.prevent="sendData">
    <input
     class="form-control mr-sm-2 me-3"
     type="search"
     v-model="form.val"
     placeholder="Search With Some Keywords"
     aria-label="Search"
    />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
     Search
    </button>
   </form>

   <Table :rows="EventsData.list._embedded?.events"></Table>
  </div>
 </div>
</template>

<script setup>
import Table from "../components/table.vue";
import { getEvents, EventsData } from "../store/content";
import { reactive } from "vue";
let form = reactive({ val: "" });
const sendData = () => {
 getEvents(form);
};
getEvents(form);
</script>