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
     v-model="paginateObj.keyword"
     placeholder="Search With Some Keywords"
     aria-label="Search"
    />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
     Search
    </button>
   </form>

   <Table :rows="EventsData"></Table>
   <Paginate></Paginate>
  </div>
 </div>
</template>

<script setup>
import Table from "../components/table.vue";
import Paginate from "../components/paginate.vue";
import { getEvents, EventsData, paginateObj } from "../store/content";

const sendData = () => {
 getEvents();
};
getEvents()
</script>