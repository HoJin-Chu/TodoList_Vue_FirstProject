const addOneItem = (state,newTodoItem) => {
  const obj = {completed : false, item : newTodoItem};
  localStorage.setItem(newTodoItem,JSON.stringify(obj));
  state.todoItems.push(obj);
}
const removeOneItem = (state,payload) => {
  // 저장소에서 하나지우고
  // 화면상에서도 하나지우고
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index,1);
}
const toggleOneItem = (state,payload) => {
  // todoItem.completed = !(todoItem.completed);
  // 넘긴로직을 app.vue에서 어울리게 다시 수정
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  // updates
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
}
const removeAll = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, removeAll }
