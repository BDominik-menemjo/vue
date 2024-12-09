<script setup>

</script>

<template>
    <main>
        <section class="felso">
            <p>Keresés a könyvek között</p>
            <p>Kölcsönzött: db</p>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Minden könyv mutatása</label>
            </div>
            <button class="btn btn-warning">Tovább</button>
        </section>
        <section>
            <p>Találatok: db</p>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 konyv">
                     <img src="../assets/book1.jpg" alt="Piknik" title="piknik">
                        <p>Piknik</p>
                        <p>STA-001</p>
                        <button class="btn btn-primary">Kölcsönzés</button>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 konyv">
                        <img src="../assets/book1.jpg" alt="Piknik" title="piknik">
                        <p>Piknik</p>
                        <p>STA-001</p>
                        <button class="btn btn-primary">Kölcsönzés</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
    .konyv{
        border: 1px solid #fff;
        display: block;
        text-align: center;
        padding: 10px;
    }
    
</style>