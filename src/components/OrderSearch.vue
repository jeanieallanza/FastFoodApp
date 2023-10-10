<template>
    <div class="btn">
        <img src="../assets/icons/search.png">
        <input type="text" name="search" placeholder="try our new Steak Fries Veggies">
        <img src="../assets/icons/filter.png">
    </div>
</template>

<style scoped>
.btn{
    display: grid;
    grid-template-columns:  24px 228px 30px;
    align-items: center;
    justify-content: center;
    gap: 13px;
    border: 1px solid#DEE2E6;
    padding: 18px 50px;
    border-radius: 16px;
}
.btn input{
    border: none;
    outline: none;
    width: 228px;
}
.btn input::placeholder{
    color: var(--base600);
    font-size: 16px;
    line-height: 24px;
}
</style>