<template>
    <div class="container">

        <form @submit.prevent="search">
            <input type="search" placeholder="Search" aria-label="Search" v-model="searchName">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            {{searchName}}
        </form>

        <div class="row">


            <br/>
            <div class="col-md-8">
                <div class="card" style="width: 18rem;" v-for="(item, i) in items" :key="i">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <a href="#" class="btn btn-primary" @click="addToCart(item,i)">Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-5">
                        <ul class="list-group">
                            <!--                            <li class="list-group-item">{{names.name}}</li>-->
                            <li class="list-group-item" v-for="(item,i) in arrayItems" :key="i">{{item.name}}</li>
                        </ul>
                    </div>
                    <div class="col-md-5">
                        <ul class="list-group">

                            <li class="list-group-item" v-for="(cart,i) in carts" :key="i">{{cart.name}}
                                <button @click="itemIndex(i)">X</button>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Inventory",
        methods: {
            addToCart(item, i) {
                // eslint-disable-next-line no-console

                localStorage.setItem("arrayItems", JSON.stringify(item))
                this.arrayItems.push(JSON.parse(localStorage.getItem("arrayItems")))
                console.log(JSON.parse(localStorage.getItem("arrayItems")))
                this.carts.push(
                    item
                )
            },

            itemIndex(i) {
                this.carts.splice(i, 1)
                //localStorage.clear()
            },

            search() {
                //alert(this.searchName)
                this.items = this.items.filter((item) => this.searchName === item.name)

                console.log(this.items.filter((item) => this.searchName === item.name))
            },
        },
        data() {
            return {
                items: [
                    {name: 'bullet car'},
                    {name: 'smart car'},
                    {name: 'standard car'},
                    {name: 'poor car'},
                ],
                carts: [],
                searchName: '',
                arrayItems: [],
                todos: localStorage.getItem('todos') ? localStorage.getItem('todos') : []
            }
        },
        computed: {
            names() {
                return JSON.parse(localStorage.getItem("arrayItems"))

            }
        }
    }
</script>

<style scoped>

</style>