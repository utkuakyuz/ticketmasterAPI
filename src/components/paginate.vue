<template>
 {{ paginateObj.size }} lu satırlar halinde {{ paginateObj.page + 1 }}. sayfa toplam
 {{ NumberOfPages }} sayfa
 <!-- {{  paginateObj }} -->
 <nav class="d-flex">
  <ul class="pagination">
   <li class="page-item">
    <a @click="previousPage" class="page-link" href="#" aria-label="Previous">
     <span aria-hidden="true">&laquo;</span>
    </a>
   </li>
   <li v-if="paginateObj.page > 1" class="page-item">
    <a class="page-link" @click="changePage(0)" href="#">1</a>
   </li>
   <li v-if="paginateObj.page > 1" class="page-item">
    <a class="page-link" href="#">...</a>
   </li>
   <li v-if="paginateObj.page != 0" class="page-item">
    <a @click="changePage(paginateObj.page - 1)" class="page-link" href="#">{{
     paginateObj.page
    }}</a>
   </li>
   <li class="page-item">
    <a @click="changePage(paginateObj.page)" class="page-link" href="#">{{
     paginateObj.page + 1
    }}</a>
   </li>
   <li v-if="paginateObj.page < NumberOfPages - 1" class="page-item">
    <a @click="changePage(paginateObj.page + 1)" class="page-link" href="#">{{
     paginateObj.page + 2
    }}</a>
   </li>
   <li v-if="paginateObj.page < NumberOfPages - 4" class="page-item">
    <a class="page-link" href="#">...</a>
   </li>
   <li v-if="paginateObj.page < NumberOfPages - 2" class="page-item">
    <a @click="changePage(NumberOfPages - 1)" class="page-link" href="#">{{
     NumberOfPages
    }}</a>
   </li>
   <li v-if="paginateObj.page < NumberOfPages - 1" class="page-item">
    <a @click="nextPage" class="page-link" href="#" aria-label="Next">
     <span aria-hidden="true">&raquo;</span>
    </a>
   </li>
  </ul>
  <div class="dropdown ms-3">
   <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
   >
    Size
   </button>
   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li v-for="option in sizeOptions" :key="option">
     <a
      @click="(paginateObj.size = option), getEvents(paginateObj)"
      class="dropdown-item"
      href="#"
      >{{ option }}</a
     >
    </li>
   </ul>
  </div>
 </nav>
</template>
<script setup>
import { ref } from "vue";
import {
 paginateObj,
 getEvents,
 NumberOfPages,
} from "../store/content";

let sizeOptions = ref([5, 10, 15, 20]);
function changePage(newPageNum) {
 paginateObj.page = newPageNum;
 getEvents(paginateObj);
}

function nextPage() {
 paginateObj.page = paginateObj.page + 1;
 getEvents(paginateObj);
}
function previousPage() {
 if (paginateObj.page != 0) {
  paginateObj.page = paginateObj.page - 1;
  getEvents(paginateObj);
 }
}
</script>

<style>
.dropdown-menu {
 min-width: 4rem !important;
}
</style>