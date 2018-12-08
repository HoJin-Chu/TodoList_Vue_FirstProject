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
};

const state = { //data
  todoItems:storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems
  }
};

const mutations = {
  addOneItem : (state,newTodoItem) => {
    const obj = {completed : false, item : newTodoItem};
    localStorage.setItem(newTodoItem,JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem : (state,payload) => {
    // 저장소에서 하나지우고
    // 화면상에서도 하나지우고
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index,1);
  },
  toggleOneItem : (state,payload) => {
    // todoItem.completed = !(todoItem.completed);
    // 넘긴로직을 app.vue에서 어울리게 다시 수정
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // updates
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
  },
  removeAll : (state) => {
    localStorage.clear();
    state.todoItems = [];
  }
};

// default하는 이유는 한개의 파일에서 한번만 추출될수있는것을 명시
export default {
  state,
  getters,
  mutations
}
