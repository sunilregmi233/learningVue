<template>
  <div id="app">
    <h1 class="bg-primary text-white text-center p-2">
      {{ name }}'s Todo List
    </h1>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>
      <div class="row" v-for="t in filteredTasks" v-bind:key="t.action">
        <div class="col">{{t.action}}</div>
        <!-- Adding Checkboxes -->
        <div class="col-1" text-center>
          <!-- Effect of two way data binding -->
          <input type="checkbox" v-model="t.done" class="form-check-input" />
          </div>
      </div>
      <div class="row py-2">
        <div class="col">
          <input v-model="newItemText" class="form-control" />
        </div>
        <div class="col-2">
          <button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
        </div>
      </div>
      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <input type="checkbox" v-model="hideCompleted" class="form-check-input" />
          <label class="form-check-label font-weight-bold">
            Hide completed tasks
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// Adding dynamic content
export default {
  name: 'app',
  data () {
    return {
      name : "Sunil",
      tasks: [],
      hideCompleted: true,
      newtItemText: ""
    }
  },
  computed: {
    filteredTasks () {
      return this.hideCompleted ?
      this.tasks.filter(t => !t.done) : this.tasks
    }
  },
  methods: {
    addNewTodo() {
      this.tasks.push({
        action: this.newItemText,
        done: false
      });
      localStorage.setItem("todos", JSON.stringify(this.tasks));
      this.newItemText = "";
    }
  },
  created() {
    let data = localStorage.getItem("todos");
    if(data !== null){
      this.tasks = JSON.parse(data);
    }
  }
}
</script>

<style>

</style>
