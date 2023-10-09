<template>
    <div>
      <School></School>
      <hr>
      <Student/>
    </div>
</template>

<script>
  import School from './components/School.vue';
  import Student from './components/Student.vue';
  export default {
    name:'App',
    methods:{

    },
    components:{School,Student},

  }
</script>

<style>

</style>