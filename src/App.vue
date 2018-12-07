<template>
  <div id="app">
    <TodoHeader></TodoHeader>

    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>

    <TodoList v-bind:propsdata = "todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>

    <TodoFooter v-on:allRemove="removeAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data(){
    return {
      todoItems : []
    }
  },
  components : {
    // 'TodoHeader' : TodoHeader,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList,
    // 'TodoFooter' : TodoFooter,
     // es6 문법 축약 ( 이름이 같으면 )
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  created(){
    if(localStorage.length > 0){
      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods:{
    addOneItem(newTodoItem){ // 다시 보자
      const obj = {completed : false, item : newTodoItem};
      localStorage.setItem(newTodoItem,JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem,index){
      // 저장소에서 하나지우고
      // 화면상에서도 하나지우고
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem,index){
      // todoItem.completed = !(todoItem.completed);
      // 넘긴로직을 app.vue에서 어울리게 다시 수정
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // update
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    removeAll(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style: groove;
    width:200px;
  }
  button{
    border-style:groove;
  }
  .shadow{
    text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
