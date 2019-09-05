<template>
    <div class="container">
        <div class="row">
            <!--            <form class="col-md-6 offset-3" @submit.prevent="addTodo">-->
            <!--                <input class="custom-checkbox" type="checkbox" @click="selectAll">-->
            <!--            </form>-->
            <div class="col-md-6 offset-3">
                <h1 class="text text-danger">TODOS</h1>
            </div>
            <div class="col-md-6 offset-3 mb-3">
                <input @keyup.enter="addTodo" class="form-control text text-center" type="text"
                       placeholder="What needs to be done?"
                       v-model="newText" required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-3">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(todo,i) in filteredTodos" :key="i">
                        <div class="row">
                            <div class="col-md-2">
                                <label v-if="todo.completed===true"  style="font-size: 2.5em">
                                    <input class=""  type="checkbox" v-model="todo.completed">
                                    <span  class="cr"><i class="fa fa-angellist"></i></span>
                                </label>
                                <label v-else style="font-size: 2.5em">
                                    <input type="checkbox" v-model="todo.completed">
                                    <span class="cr"><i class="fa fa-hand-o-down"></i></span>
                                </label>
                            </div>
                            <div class="col-md-8">
                                <label v-if="todo.completed===true" class="col-form-label-lg">{{todo.text}}</label>
                                <label v-else class="col-form-label-lg"><del>{{todo.text}}</del></label>
                            </div>
                            <div class="col-md-2">
                                <button class="fa fa-minus-square" @click="removeTodo(i)"></button>
                            </div>
                        </div>
                    </li>
                </ul>
                <p>{{remainingTodo}} {{remainingTodo===1?"Todo":'Todos'}} Left</p>
            </div>
            <div class="col-md-6 offset-3 my-3">
                <button class="btn btn-info mx-1" @click="visibility='all'">All</button>
                <button class="btn btn-primary mx-1" @click="visibility='active'">Active</button>
                <button class="btn btn-success mx-1" @click="visibility='completed'">Completed</button>
            </div>
            {{getTodos}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data() {
            return {
                todos: [],
                newText: '',
                totalTodo: 0,
                visibility: 'all'
            }
        },
        methods: {
            addTodo() {
                this.todos.push({
                    text: this.newText,
                    completed: false,
                    id: new Date().getUTCMilliseconds() + '' + new Date().getUTCFullYear() + '' + new Date().getSeconds()
                })
                localStorage.setItem('localTodo', JSON.stringify(this.todos))
                this.newText = ''
            },
            removeTodo(i) {
                this.todos.splice(i, 1)
                localStorage.setItem('localTodo', JSON.stringify(this.todos))
            },
        },
        computed: {
            remainingTodo() {
                let count = 0;
                this.todos.forEach((todo) => {
                    let i = 1;
                    if (todo.completed === false)
                        count += i
                });
                return count
            },
            filteredTodos() {
                if (this.visibility === 'all') {
                    return this.todos
                    // return this.getTodos
                } else if (this.visibility === 'active') {
                    return this.todos.filter(todo => !todo.completed)
                    // return this.getTodos.filter(todo => !todo.completed)
                } else {
                    return this.todos.filter(todo => todo.completed)
                    // return this.getTodos.filter(todo => todo.completed)
                }
            },
            getTodos(){
                this.todos = this.$store.getters.getLocalTodos
                return this.$store.getters.getLocalTodos
            }
        },
        created() {
            this.$store.dispatch('getLocalStorageData')
            //this.todos = JSON.parse(localStorage.getItem('localTodo') || '[]')
        }
    }
</script>

<style scoped>
</style>