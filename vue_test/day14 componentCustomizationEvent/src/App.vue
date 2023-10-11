<template>
    <div class="app">
      <h1>{{msg}},学生姓名：{{studentName}}</h1>
      
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"></School>
      
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(1.使用@或v-on) -->
      <!-- <Student @getStudentName="getStudentName" @demo="m1"/> -->
    
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(2.使用ref) -->
      <Student ref="student" @click.native="show"/>
    
    </div>
</template>

<script>
  import School from './components/School.vue';
  import Student from './components/Student.vue';
  
  export default {
    name:'App',
    components:{School,Student},
    data() {
      return {
        msg:'你好',
        studentName:''
      }
    },

    methods: {
      getSchoolName(name){
        console.log('学校名：',name);
      },
      getStudentName(name){
        console.log('学生名：',name);
        this.studentName = name
      },
      m1(){
        console.log('demo事件被触发了');
      },
      show(){
        alert('123')
      }
    },

    mounted() {
      this.$refs.student.$on('getStudentName',this.getStudentName) //绑定自定义事件
      // this.$refs.student.$once('getStudentName',this.getStudentName) //绑定自定义事件（只执行一次）
    
    },

  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>