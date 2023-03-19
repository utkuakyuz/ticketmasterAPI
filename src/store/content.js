import { services } from "../service/restServices";
import { reactive, ref } from "vue";
const EventsData = reactive({loader: false, list: []})
const SingleEventData = reactive({ list: []})
const headers = reactive({list:["ID", "Name","Type", "Sales Date","Start Date", "Venue", "Status", "Zone", "Info", "Detail"]})
const keyword = ref("")
const size = ref(5);
const page = ref(0);

const paginateObj = reactive({
  keyword, size, page
})

const NumberOfPages = ref(200)


const getEvents = () => {
  EventsData.loader = true;
 services
   .GetEventsValue({keyword:paginateObj.keyword, page: paginateObj.page, size: paginateObj.size})
   .then((res) => {
     console.log("res from EventsData: ", res);
     EventsData.loader = false;
     EventsData.list = res.data
     if ((res.data.page.totalPages) < 1000) {
      NumberOfPages.value = res.data.page.totalPages
     }
     else{
      NumberOfPages.value = (1000 / paginateObj.size)
     }  
   })
   .catch((err) => {
     console.log("error in EventsData: ", err);
   })
}
const getSingleEvent = (idValue) => {
  console.log(idValue)
 services
   .GetSingleEvent({id: idValue})
   .then((res) => {
     console.log("res from SingleEventData: ", res);
     SingleEventData.list = res.data
   })
   .catch((err) => {
     console.log("error in SingleEventData: ", err);
   })
}

export{
 getEvents,
 EventsData,
 getSingleEvent,
 headers,
 SingleEventData,
 size,
 page,
 paginateObj,
 NumberOfPages
}