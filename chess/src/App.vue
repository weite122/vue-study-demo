<template>
    <div>
        <div class="row">
            <Cell @click="greet"/> 
            <Cell /> 
            <Cell />  
        </div>
        <div class="row">
            <Cell /> 
            <Cell /> 
            <Cell /> 
        </div>        
        <div class="row">
            <Cell /> 
            <Cell /> 
            <Cell /> 
        </div>
    </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
  components: {
    Cell
  },
  methods: {
      greet() {
          console.log('xxx')
      }
  }
}
</script>

<style>
.row {
    display: flex;
}
</style>
