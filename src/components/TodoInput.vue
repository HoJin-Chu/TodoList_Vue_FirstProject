<template>

  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">
      Warning
      <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i>
    </h3>
    <h3 slot="body">
      내용이 없습니다
    </h3>
    </Modal>
  </div>
 <!-- 템플릿에 하나의 엘리멘트안에 하위로 들어가야한다 -->
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data(){
    return {
      newTodoItem : "",
      showModal:false
    }
  },
  components : {
     Modal
  },
  methods : {
    addTodo(){
      if(this.newTodoItem !== ''){
        //this.$emit('addTodoItem',this.newTodoItem);
        const text = this.newTodoItem.trim(); // 앞뒤 공백제거
        this.$store.commit('addOneItem',text);
        this.clearInput();
      }else{
        //alert('입력해주세요');
        this.showModal = !(this.showModal);
      }
    },
    //  addTodo를 저장하는 메소드로만 지정을 하기위해 따로 분리
    clearInput(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus{
    outline: none;
  }
  .inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer{
    float: right;
    background-color: darkgrey;
    /* background: linear-gradient(to right,#6478FB,#8763FB); */
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color:white;
    vertical-align: middle;
  }
  .closeModalBtn{
    color:#42b983;

  }
</style>
