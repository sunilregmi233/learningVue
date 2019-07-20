<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <input type="text" v-model="msginput">
     <button v-on:click="changeName"> Click </button> <br>
     <textarea id="" cols="30" rows="10" v-model="name"></textarea>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data () {
    return {
    msginput: '',
    name: '',
    }
  },
  methods: {
    changeName: function() {
      if (this.msginput == 'hello') {
       this.name = this.msginput
      }
      else {
        console.log("type")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
