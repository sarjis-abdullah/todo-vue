<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(todo,i) in filteredTodos" :key="i">
            <div class="row">
                <div class="col-md-2">
                    <label class="col-form-label-lg">
                        <input class="awesome-checkbox__input" type="checkbox" v-model="todo.completed">
                    </label>
                </div>
                <div class="col-md-8 text text-capitalize text-justify-around">
                    <label v-if="todo.completed===true" class="col-form-label-lg">
                        <del class="text-danger">{{todo.text}}</del>
                    </label>
                    <label v-else class="col-form-label-lg">
                        {{todo.text}}
                    </label>
                </div>
                <div class="col-md-2">
                    <label class="col-form-label-lg">
                        <button title="Remove" class="fa fa-minus-square text-danger"
                                @click="removeTodo(todo)"></button>
                    </label>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TodoList",
        props:['filteredTodos'],
        data(){
            return{
                todos: []
            }
        },
        methods:{
            removeTodo(todo){
                console.log(todo)
                if (confirm('Are you sure ??')) {
                    let index = this.todos.findIndex(item => item.id === todo.id)
                    this.todos.splice(index, 1)
                    console.log(todo)
                    localStorage.setItem('localTodo', JSON.stringify(this.todos))
                }
            }
        },
        created() {
            this.$store.dispatch('getLocalStorageData').then(() => {
                this.todos = this.$store.getters.getLocalTodos
            })
        },
    }
</script>

<style scoped>

</style>