<template>
    <div class="container">

        <div class="row">
            <form class="col-md-6 offset-3" @submit.prevent="addTodo">
                <input class="form-control" type="text" placeholder="What needs to be done?" v-model="newTodo" required>

            </form>
        </div>
        <div class="row">
            <table class="table table-bordered table-hover">
                <tr>
                    <th>
                        <input class="custom-checkbox" type="checkbox" @click="selectAll">
                    </th>
                    <th>
                        Provided Name
                    </th>
                    <!--                    <th>Action</th>-->
                </tr>
                <tr v-for="(todo,i) in todos" :key="i">

                    <td>
                        <input class="custom-checkbox" type="checkbox" v-model="todo.completed">

                        {{todo.text}}
                    </td>
                    <td>
                        <button @click="removeTodo(i)">x</button>

                    </td>

                </tr>
                <p>{{remainingTodo}} Todo Left</p>
                <button @click="todosData(1)">All</button>
                <button @click="todosData(2)">Active</button>
                <button @click="todosData(3)">Completed</button>

                <button v-if="">Clear Completed</button>


            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Calculation",
        data() {
            return {
                todos: [
                    {text: 'Fish', id: 1, completed: false},
                    {text: 'Elephant', id: 2, completed: false},
                    {text: 'Cow', id: 3, completed: false},
                    {text: 'Sky', id: 4, completed: false},
                ],
                newTodo: '',
                totalTodo: 0
            }
        },
        methods: {
            addTodo() {
                this.todos.push({
                    text: this.newTodo,
                    completed: false
                })
            },
            removeTodo(i) {
                this.todos.splice(i, 1)
            },
            selectAll() {
                this.todos.forEach((todo) => {
                    todo.completed = !todo.completed
                });

            },
            todosData(value) {
                this.todos = this.todos.filter(todo => {
                    if (value===2){
                        return todo.completed === false
                    }else if (value===3){
                        return todo.completed === true
                    }else {
                        return this.todos
                    }
                })

            },
        },
        computed: {
            remainingTodo() {
                let totalTodo = 0;
                this.todos.forEach((todo) => {
                    let i = 1;
                    if (todo.completed === false)
                        totalTodo += i
                });
                return totalTodo
            }
        }
    }
</script>

<style scoped>
</style>