<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="card" style="width: 18rem;" v-for="(item, i) in items" :key="i">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">Price: {{item.price}} tk</p>
                        <a href="#" class="btn btn-primary" @click="addToCart(item)">Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Inventory",
        methods: {
            addToCart(item) {
                localStorage.setItem('name', item.name)
                localStorage.setItem('price', item.price)
            }
        },
        data() {
            return {
                items: [
                    {name: 'bullet car', price: 100},
                    {name: 'smart car', price: 200},
                    {name: 'standard car', price: 300},
                    {name: 'poor car', price: 50},
                ]
            }
        }
    }
</script>

<style scoped>

</style>