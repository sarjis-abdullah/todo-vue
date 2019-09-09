<template>
    <div class="container">

            <SearchForm @addTodo="addTodo" @search="search"/>


        <div class="row">
            <div class="col-md-6 offset-3">
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
                                            @click="removeTodo(i)"></button>
                                </label>
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
        </div>
    </div>
</template>

<script>
    import SearchForm from "./SearchForm";

    export default {
        name: "Todo",
        data() {
            return {
                todos: [],
                totalTodo: 0,
                visibility: 'all',
            }
        },
        components: {
            SearchForm
        },
        methods: {
            addTodo(newText) {
                console.log(newText)
                this.todos.push({
                    text: newText,
                    completed: false,
                    id: new Date().getUTCMilliseconds() + '' + new Date().getUTCFullYear() + '' + new Date().getSeconds()
                })
                localStorage.setItem('localTodo', JSON.stringify(this.todos))

                newText = ''
            },
            removeTodo(i) {
                if (confirm('Are you sure?')) {
                    this.todos.splice(i, 1)
                    localStorage.setItem('localTodo', JSON.stringify(this.todos))
                }
            },
            search(keyword) {
                console.log(keyword)
                if (keyword) {
                    this.todos = this.todos.filter(todo => {
                            return todo.text.toLowerCase().includes(keyword.toLowerCase())
                            // return todo.text.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
                        }
                    )
                } else {
                    this.todos = this.$store.getters.getLocalTodos
                }

            }
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
                } else if (this.visibility === 'active') {
                    return this.todos.filter(todo => !todo.completed)
                } else {
                    return this.todos.filter(todo => todo.completed)
                }
            },
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