<template>
    <div class="container">
        <div class="row">
            <!--            <form class="col-md-6 offset-3" @submit.prevent="addTodo">-->
            <!--                <input class="custom-checkbox" type="checkbox" @click="selectAll">-->
            <!--            </form>-->
            <div class="col-md-6 offset-3">
                <h1 class="text text-danger">TODOS</h1>
            </div>
            <div class="col-md-6 offset-3">
                <input @keyup.enter="addTodo" class="form-control text text-center" type="text"
                       placeholder="What needs to be done?"
                       v-model="newText" required>
            </div>
        </div>
        <div class="row">

            <div class="col-md-6 offset-3">
                <ul class="list-group bg-danger">
                    <li class="list-group-item" v-for="(todo,i) in filteredTodos" :key="i">
                        <div class="row">
                            <div class="col-md-2">
                                <input class="btn btn-info" type="checkbox" v-model="todo.completed">

                            </div>
                            <div class="col-md-8">
                                <label class="col-form-label-lg">{{todo.text}}</label>

                            </div>
                            <div class="col-md-2">
                                <button class="table-hover btn btn-danger" @click="removeTodo(i)">x</button>

                            </div>
                        </div>

                    </li>
                </ul>
                <!--                <p>{{remainingTodo}} Todo Left</p>-->
                <button @click="visibility='all'">All</button>
                <button @click="visibility='active'">Active</button>
                <button @click="visibility='completed'">Completed</button>

                <!--<button v-if="">Clear Completed</button>-->
            </div>
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

            },
            removeTodo(i) {
                /*
                let storedTodos = JSON.parse(localStorage.getItem("localTodo"))
                storedTodos.forEach(storedTodo => {
                    console.log(storedTodo.id)
                    if (storedTodo.id === todo.id) {
                        storedTodos.splice(storedTodo, 1)
                        localStorage.removeItem(storedTodo.id)
                        console.log(storedTodo)
                    }
                })*/

                this.todos.splice(i, 1)
                localStorage.setItem('localTodo', JSON.stringify(this.todos))
            },
            selectAll() {
                this.todos.forEach((todo) => {
                    todo.completed = !todo.completed
                });
            },
        },
        computed: {
            // remainingTodo() {
            //     let totalTodo = 0;
            //     this.todos.forEach((todo) => {
            //         let i = 1;
            //         if (todo.completed === false)
            //             totalTodo += i
            //     });
            //     return totalTodo
            // },

            filteredTodos() {
                //  let holder =this.todos
                if (this.visibility === 'all') {
                    return this.todos
                } else if (this.visibility === 'active') {
                    return this.todos.filter(todo => !todo.completed)
                } else {
                    return this.todos.filter(todo => todo.completed)
                }
            }
        },
        created() {
            // this.todos.push(JSON.parse(localStorage.getItem('localTodo')))
            //console.log(JSON.parse(localStorage.getItem('localTodo')))
            this.todos = JSON.parse(localStorage.getItem('localTodo') || '[]')
        }
    }
</script>

<style scoped>
</style>