<script setup>
  import {rooms} from "./data/rooms.js";
  import {ref} from "vue";

  const roomsData=ref(rooms);
  const helyiseg=ref("")
</script>

<template>
  <header>
    <h1>Házfelújitás</h1>
  </header>
  <main>
    <section>
      <form>
        <div class="mb-3">
          <label class="form-label">Helyiség:</label>
          <select class="form-select" v-model="helyiseg">
            <option value="">Válasszon</option>
            <option v-for="room in rooms" :value="room.name">{{ room.name }}</option>
            
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Felújitási munka:</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Becsült összeg:</label>
          <input type="number" class="form-control">
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-warning">Tovább</button>
        </div>
      </form>
    </section>
  </main>
  <footer>
    <p>Copyright</p>
  </footer>
</template>

<style scoped>
  form{
    width: 80%;
    margin: 30px auto;
  }
  label{
    font-weight: 600;
  }
  .form-label{
    font-weight: 600;
  }
  .form-check{
    padding-left: 40px;
  }
  
</style>
