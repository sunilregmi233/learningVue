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
      <div class="row" v-for="t in tasks" v-bind:key="t.action">
        <div class="col">{{t.action}}</div>
        <div class="col-2">{{t.done}}</div>
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
      tasks: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Cllect Tickests", done: false},
        {action: "Call Joe", done: false}
      ]
    }
  }
}
</script>

<style>

</style>
