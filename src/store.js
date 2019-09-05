import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    getters: {
        getLocalTodos(state){
           return  state.todos
        }
    },
    state: {
        todos: []
    },
    mutations: {
        setLocalStorageTodo(state, localTodo) {
            return state.todos = localTodo
        }
    },
    actions: {
        getLocalStorageData(context) {
            context.commit('setLocalStorageTodo', JSON.parse(localStorage.getItem('localTodo') || '[]'))
            // alert('Hi')
        }
    }
})
