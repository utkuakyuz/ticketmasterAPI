import { services } from "../service/restServices";
import { reactive } from "vue";
const EventsData = reactive({ list: []})
const SingleEventData = reactive({ list: []})
const headers = reactive({list:["ID", "Name","GenreName", "Date", "Start Time","dates start datetime", "Doors Opening", "Status", "Zone", "Info", "Detail"]})
const getEvents = (form) => {
  console.log(form.val)
 services
   .GetEventsValue({keyword:form.val})
   .then((res) => {
     console.log("res from EventsData: ", res);
     EventsData.list = res.data
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
 SingleEventData
}