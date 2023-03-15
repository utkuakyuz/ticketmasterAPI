<template>
<div class="table-responsive">
  <table class="table table-striped table-bordered">
        <thead>
            <tr>
              <th scope="col" v-for="(header, index) in headers.list" :key="index">{{ header }}<fai icon="sort" aria-hidden="true"></fai></th>
            </tr>
        </thead>
        <tbody id="paginate">
            <tr v-for="row in rows" :key="row.id">
                <td>{{ row.id }}</td>
                <td>{{ row.name }}</td>
                <td>{{ row.classifications[0]?.genre.name }}</td>
                <td>{{ row.sales.public.startDateTime.slice(0,10).split('-').reverse().join('.') }}</td>
                <td>{{ row.sales.public.startDateTime.slice(11,16) }}</td>
                <td>{{ row.dates?.start?.localDate }}</td> 
                <td>{{row.doorsTimes?.localDate}}</td>
                <td>{{ row.dates?.status?.code }}</td> 
                <!-- <td>{{ row.accessibility?.ticketLimit }}</td> -->
                <td>{{ row.locale }}</td>
                <!-- <td v-for="(range, index) in row.priceRanges" :key="index">{{ range.min }} - {{ range.max }}</td> -->
                <td>{{ typeof(row.ticketLimit?.info) == typeof("") ? toShortSentence(row.ticketLimit?.info,45,true) : "-" }}</td>
                <td><router-link :to="`/${row.id}`">Detail</router-link></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
import { headers, EventsData } from "../store/content";
import {toShortSentence, formatDate} from "../lib/local"
const props = defineProps({
  rows: Object
})
</script>
