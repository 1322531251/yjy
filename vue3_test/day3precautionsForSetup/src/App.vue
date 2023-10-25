<template>
  <Demo @hello='showHelloMsg' msg="你好" school="黑科技">
    <template v-slot:hi>
      <span>hi</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo'

  export default {
    name: 'App',
    components:{Demo},
    setup() {
      function showHelloMsg(value){
        alert(`参数${value}`)
      }
      return {
        showHelloMsg
      }
    }
  }

</script>

