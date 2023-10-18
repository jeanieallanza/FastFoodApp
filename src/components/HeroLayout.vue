<template>
    <div class="hero">

        <div class="item">
            <img src="../assets/logo/Logo.png">
        </div>
        <div class="item">
            <p>Anneoyong, Chou!</p>
            <h2>What do you want to eat?</h2>
        </div>
    </div>
</template>

<script>
export default{
    name: 'HeroLayout',
}
</script>

<style scoped>
.hero{
   display: grid;
   grid-template-columns: 90px 244px;
   gap: 16px;
   margin-top: 35px;
   align-items: center;
   justify-content: center;
}
img {
  max-width: 90px;
}
h2{
    margin-top: 0;
    font-size: 25px;
    max-width: 300px;
    font-weight: 700;
    line-height: 30px;
}

</style>