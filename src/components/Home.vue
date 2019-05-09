<template>
  <div>
    <img class ='main-img' src="../assets/homebg.jpg"/>
    <div class='thumb-panel'>
      <SheetHeader></SheetHeader>
    </div>
    <div class='intro-title'>
      <h2 style="padding: 15px">Template Test Vue App</h2>
      <h4 style="font-weight: 200">Sub title for page</h4>
    </div>
    <MainContent></MainContent>
  </div>
</template>

<script>

import SheetHeader from './HomeComponents/SheetHeader'
import MainContent from './HomeComponents/MainContent'

export default {
  name: 'Home', //this is the name of the component
  components:{
    SheetHeader,
    MainContent,
  }
}
</script>

<style>

.thumb-panel{
  background-color:whitesmoke;
}

.main-img{
  z-index: -1;
  width: 100%;
  height: 40vw;
  left: 0;
  top: 0;
}

</style>