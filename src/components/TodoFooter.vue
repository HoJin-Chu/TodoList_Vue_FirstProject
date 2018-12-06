<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      전부 삭제
    </span>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo:function(){
      this.$emit('allRemove');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{
    line-height: 50px;
    background-color:white;
    border-radius: 5px;
    margin:0 auto;
  }
  .clearAllBtn{
    display: block;
  }
</style>
