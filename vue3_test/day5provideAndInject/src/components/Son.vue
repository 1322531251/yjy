<template>
    <div class="son">
      <h3>孙组件,{{car.name}}---{{car.price}}</h3>
    </div>
  </template>
  
  <script>
    import {inject} from 'vue'
    export default {
      name:'Son',
      setup() {
        let car = inject('car')
        return {car}
      }
    }
  </script>
  
  <style>
    .son{
      background-color: green;
      padding: 10px;
    }
  </style>