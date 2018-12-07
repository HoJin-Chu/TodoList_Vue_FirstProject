import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch(){
    const arr = [];
    if(localStorage.length > 0){
      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
}

export const store = new Vuex.Store({

  state:{ //data
    todoItems:storage.fetch()
  },

  mutations : { //computed
    addOneItem(state,newTodoItem){
      const obj = {completed : false, item : newTodoItem};
      localStorage.setItem(newTodoItem,JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state,payload){
      // 저장소에서 하나지우고
      // 화면상에서도 하나지우고
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index,1);
    },
    toggleOneItem(state,payload){
      // todoItem.completed = !(todoItem.completed);
      // 넘긴로직을 app.vue에서 어울리게 다시 수정
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      // update
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
    },
    removeAll(state){
      localStorage.clear();
      state.todoItems = [];
    },
  }
});
