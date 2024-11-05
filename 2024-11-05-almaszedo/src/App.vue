<script setup>

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
            <div class="gameArea">

            </div>
          </div>
          <div class="col-lg-3">
            <aside>
              <div class="score"> Point: -10 </div>
              <h2>Játékszabályok</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis iusto, mollitia, veritatis error adipisci temporibus ducimus sit repellendus distinctio nihil minima rerum amet natus doloribus modi blanditiis maxime facilis.</p>
              <p><button type="button" class="btn btn-warning">Játék inditása</button></p>
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
  header,footer{
    background-color: #D6322F;
    padding: 10px 0px;
    color: #fff;
    text-align: center;
  }
  main{
    min-height: 550px;
    background-image: url(assets/bg.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  header{
    border-bottom: 5px solid #fff;
  }
  footer{
    border-top: 5px solid #fff;
  }
  .gameArea{
    border: 2px solid #D6322F;
    background-color: #add8e6;
    width: 400px;
    height: 500px;
    overflow: hidden;
    position: relative;
  }
</style>
