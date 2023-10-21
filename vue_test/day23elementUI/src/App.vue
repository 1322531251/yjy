<template>
  <div>
    <button>原生按钮</button>
    <input type="text">
    <aa-row>
      <aa-button>默认按钮</aa-button>
      <aa-button type="primary">主要按钮</aa-button>
      <aa-button type="success">成功按钮</aa-button>
      <aa-button type="info">信息按钮</aa-button>
      <aa-button type="warning">警告按钮</aa-button>
      <aa-button type="danger">危险按钮</aa-button>
    </aa-row>
    <aa-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
    </aa-date-picker>
    <aa-row>
      <aa-button icon="el-icon-search" circle></aa-button>
      <aa-button type="primary" icon="el-icon-edit" circle></aa-button>
      <aa-button type="success" icon="el-icon-check" circle></aa-button>
      <aa-button type="info" icon="el-icon-message" circle></aa-button>
      <aa-button type="warning" icon="el-icon-star-off" circle></aa-button>
      <aa-button type="danger" icon="el-icon-delete" circle></aa-button>
    </aa-row>
  </div>
</template>

<script>


  export default {
      name:'App',
  }
</script>
