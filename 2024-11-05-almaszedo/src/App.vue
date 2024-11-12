<script setup>
import GameArea from './components/GameArea.vue';
import {ref} from "vue";

var isStart = ref(false);
var score = ref(0);

const start = () =>{
  isStart.value = true;
  score.value = 0
}

const updateScore = (pont) =>{
  score.value+=pont;
  if(score.value == 10){
    alert("Gratulálunk! Nyertél!");
    isStart.value = false;
  } else if(score.value == -10){
    alert("Game over! Veszítettél!");
    isStart.value = false;
  }
}

</script>

<template>
  <header>
    <h1>Almaszedő játék</h1>
  </header>
  <main>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <GameArea :start="isStart" @updateScore = "updateScore"/>
          </div>
          <div class="col-lg-3 bg text-center">
            <aside>
              <div class="score">Pont: {{ score }}</div>
              <h2>Játékszabályok</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet dolorem recusandae voluptates
                voluptatibus at, sed saepe natus ex voluptatem officia perferendis optio doloremque quidem, omnis
                maiores sunt libero. Dolores.</p>
              <p><button type="button" class="btn btn-warning" @click="start()">Játék indítása</button></p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <p>Copyright</p>
  </footer>
</template>

<style scoped>
header,
footer {
  padding: 10px 0px;
  text-align: center;
}

main {
  background-image: url(assets/bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
header {
  border-bottom: 5px solid #fff;
}

footer {
  border-top: 5px solid #fff;
}
.score, header, footer, .bg{
  background-color: #D6322F;
  color: #fff;
}
.score{
  padding: 10px 20px;
  margin: 0 auto;
  display: table;
  font-weight: 600;
  font-size: 25px;
}
.bg{
  padding: 30px;
  background-color: rgba(0,0,0,0.5);
}
h2{
  padding: 20px 0px;
}
</style>
