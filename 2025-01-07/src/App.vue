<script setup>
import { ref, watchEffect } from 'vue';
import Modal from './components/Modal.vue';
import { state } from "./state/state.js"
const show = ref(false);
const actualEvents = ref([[], [], [], [], [], [], []]);

watchEffect(() => {
  if (state.events) {
    actualEvents.value = state.events;
  }
});

const toggleModal = () => {
  show.value = !show.value;
}

const deleteEvent =(dayindex, eventindex)=>{
  if(actualEvents.value[dayindex]){
    actualEvents.value[dayindex].splice(eventindex, 1);
  }
}
</script>

<template>
  <Modal :visible="show" @cancel="toggleModal" />
  <header>

  </header>
  <main>
    <section>
      <button @click="toggleModal">Add event</button>
      <table>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(events, dayindex) in actualEvents">
              <div class="event" v-for="event in events" :style="{'background-color':event.getColor()}">
                <h3>{{event.getName()}}</h3>
                <p>{{ event.getTimeFrom() }} - {{ event.getTimeTo() }}</p>
                <p><i class="bi bi-trash-fill" @click="deleteEvent(dayindex,evenindex)"></i></p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer>
    <p>Copyright - All rights reserved! &copy;</p>
  </footer>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
h1,
footer {
  text-align: center;
}

section {
  width: 90%;
  margin: 0px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
table td {
  border: 1px solid #fff;
}

table th {
  background-color: greenyellow;
  padding: 10px 20px;
  width: calc(100%/7);
}

table th,
.event {
  color: #000;
}

.event {
  padding: 10px;
  border-radius: 15px;
  margin: 10px;
}

.event h3,
.event p {
  margin: 0;
  padding: 0;
}

button,
.event {
  border-radius: 15px;
  padding: 10px;
}

button {
  float: right;
  background-color: aqua;
  font-weight: 700;
  margin-bottom: 30px;
}
</style>
