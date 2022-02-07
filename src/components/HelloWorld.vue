<template>
  <h1>{{ $store.state.counter.count }}</h1>
  <h1>{{ this.$store.getters.getCount }}</h1>
  <h1>{{getterName}}</h1>
  <button @click="$store.dispatch('addCount', 2)">2</button>
  <button @click="$store.dispatch('addCount', 3)">3</button>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: mapGetters({
    getterName: "getCount",
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
