<template>
 <div class="table-responsive" :class="rows.loader ? 'overflow-hidden' : ''">
  <table class="table table-striped table-bordered">
   <thead>
    <tr>
     <th style="white-space: nowrap;" v-for="(header, index) in headers.list" :key="index">
      {{ header }}<fai class="mx-2" icon="sort" aria-hidden="true"></fai>
     </th>
    </tr>
   </thead>
   <tbody v-if="!rows.loader" id="paginate">
    <tr v-for="row in rows?.list._embedded?.events" :key="row.id">
     <td>{{ row.id }}</td>
     <td>{{ row.name }}</td>
     <td>{{ row.classifications[0]?.genre.name }}</td>
     <td>
      {{
       row.sales.public.startDateTime
        .slice(0, 10)
        .split("-")
        .reverse()
        .join(".")
      }}
      {{ row.sales.public.startDateTime.slice(11, 16) }}
     </td>
     <td>{{ row.dates?.start?.localDate.split("-").reverse().join(".") }}
      {{ row.dates?.start?.localTime?.slice(0,5) }}</td>
     <td>{{ row._embedded.venues[0].name }}</td>
     <td>{{ row.dates?.status?.code }}</td>
     <!-- <td>{{ row.accessibility?.ticketLimit }}</td> -->
     <td>{{ row.locale }}</td>
     <!-- <td v-for="(range, index) in row.priceRanges" :key="index">{{ range.min }} - {{ range.max }}</td> -->
     <td>
      {{
       typeof row.ticketLimit?.info == typeof ""
        ? toShortSentence(row.ticketLimit?.info, 60, true)
        : "-"
      }}
     </td>
     <td><router-link :to="`/${row.id}`">Detail</router-link></td>
    </tr>
   </tbody>
  </table>
  <div v-if="rows.loader" class="d-flex justify-content-center">
   <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
   </div>
  </div>
 </div>
</template>

<script setup>
import { headers, EventsData } from "../store/content";
import { toShortSentence, formatDate } from "../lib/local";

const props = defineProps({
 rows: Object,
});
</script>

