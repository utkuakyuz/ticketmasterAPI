<template>
  <header>
    <nav class="navbar p-5 navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TicketMaster</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">HomePage</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Git Repository</a>
            </li>
          </ul>
          <form class="d-flex w-50" @submit.stop.prevent="sendData">
            <input v-model="paginateObj.keyword" class="form-control me-2" type="search" placeholder="Search with some keywords or event name" aria-label="Search" />
            <button class="btn" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <main class="p-5">
    <router-view />
  </main>
  <hr />
</template>

<script setup>
import { getEvents, EventsData, paginateObj } from "./store/content";
const sendData = () => {
 getEvents();
};
</script>
