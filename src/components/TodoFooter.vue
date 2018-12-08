<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      전부 삭제
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations({
      clearTodo : 'removeAll'
    }),
    // clearTodo(){
    //   //this.$emit('allRemove');
    //   this.$store.commit('removeAll');
    // }
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
