<template>
  <div class="home">
    <my-todo/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/todo/Todo.vue'

export default {
  name: 'home',
  components: {
    'my-todo':Todo
  }
}
</script>


