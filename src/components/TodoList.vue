<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem,index) in this.todoItem"
       :key="todoItem.item" class="shadow">
        <i class="far fa-check-circle checkBtn"
        v-bind:class="{checkBtnCompleted : todoItem.completed}"
        v-on:click="toggleComplete({todoItem,index})"></i>

        <!-- false , true 에따라서 바뀐다 -->
        <span v-bind:class="{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
         <i class="far fa-times-circle"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
// 헬퍼
import { mapGetters , mapMutations } from 'vuex'

export default {
  //props : ['propsdata'],
  methods:{
    ...mapMutations({
        removeTodo : 'removeOneItem',
        toggleComplete : 'toggleOneItem'
      }),
  },
  computed : { // getters를 맵핑
    ...mapGetters({ // map 은 인자를 자동으로 넘겨준다
      todoItem : 'storedTodoItems'
    })
  }
}
</script>

<style scoped>
  ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: center;
  }
  li{
    display: flex;
    min-height: 50px;
    height:50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding:0 0.9rem;
    background : white;
    border-radius: 5px;
  }
  .removeBtn{
    margin-left: auto;
    color:#de4343;
  }
  .checkBtn{
    line-height: 45px;
    color:#62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted{
    color:#b3adad;
  }
  .textCompleted{
    text-decoration: line-through;
    color:#b3adad;
  }

/* 리스트 트랜지션 */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>
