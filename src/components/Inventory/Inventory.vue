<template>
    <div class="container">

        <form @submit.prevent="search">
            <input  type="search" placeholder="Search" aria-label="Search" v-model="searchName">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            {{searchName}}
        </form>

        <div class="row">


            <br/>
            <div class="col-md-8">
                <div class="card" style="width: 18rem;" v-for="(item, i) in items" :key="i">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <a href="#" class="btn btn-primary" @click="addToCart(item)">Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-10">
                        <ul class="list-group">
                            {{carts}}
                            <li class="list-group-item">{{names.name}}</li>
                            <li class="list-group-item" v-for="(cart,i) in carts" :key="i">{{cart.name}}
                                <button @click="itemIndex(i)">X</button>
                            </li>

                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
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
            addToCart(item) {
                // eslint-disable-next-line no-console
                console.log(item)
                localStorage.setItem("items", JSON.stringify(item))
                // this.carts.push(
                //     item
                // )
            },

            itemIndex(i) {
                localStorage.clear()
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
                carts: [
                    JSON.parse(localStorage.getItem("items"))
                    // {name: JSON.parse(localStorage.getItem("items"))}
                ],

                // carts: JSON.parse(localStorage.getItem("items")),
                // carts: [
                //     // let storedItems = JSON.parse(localStorage.getItem("items"))
                // ],
                searchName: ''
            }
        },
        computed: {
            names() {
                return JSON.parse(localStorage.getItem("items"))
            }
        }
    }
</script>

<style scoped>

</style>