<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-8 offset-2">
          <form @submit.prevent="search" @keyup.prevent="search($event)">
            <input
              id="searchText"
              class="form-control text my-2 py-4"
              type="text"
              placeholder="search"
              v-model="searchText"
              required
            />
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-6 offset-3 mb-2">
      <form @submit.prevent="addTodo">
        <input
          class="form-control text text-center"
          type="text"
          placeholder="What needs to be done?"
          v-model="newText"
          required
        />
        <span class="text text-danger">{{errorMessage}}</span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchText: "",
      newText: "",
      errorMessage: ""
    };
  },
  methods: {
    search(e) {
      this.$emit("search", this.searchText);
    },
    addTodo() {
      if (this.errorMessage.length) {
        alert("Error");
      } else {
        let searchText = document.getElementById("searchText");
        let todos = this.$store.getters.getLocalTodos;
        let index = todos.findIndex(item => item.text === this.newText);
        if (index === -1) {
            searchText.focus();
            this.$emit("addTodo", this.newText);
            this.errorMessage = "";
            this.newText = "";
        } else {
            this.errorMessage = "Name has already taken!";
        }
        
      }
    }
  },
  watch: {
    newText: {
      handler(o, n) {
        if (this.newText !== '' && this.newText.length < 3) {
          this.errorMessage = "Please give at-least 3 letters word";
        } else {
          this.errorMessage = "";
        }
      }
    }
  },
};
</script>

<style scoped>
</style>