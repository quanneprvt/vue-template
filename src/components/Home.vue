<template>
  <div>
    <img class ='main-img' src="../assets/homebg.jpg"/>
    <h1>Home</h1>
    <p>Here is some information. This is the home page</p>
  </div>
</template>

<script>
export default {
  name: 'Home' //this is the name of the component
}
</script>

<style>

.main-img{
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 50vw;
  left: 0;
  top: 0;
}

</style>