<template>
  <div class="home">
    <Inventory/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inventory from '@/components/Inventory/Inventory.vue'

export default {
  name: 'home',
  components: {
    Inventory
  }
}
</script>
