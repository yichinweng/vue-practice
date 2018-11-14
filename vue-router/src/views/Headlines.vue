<template>
  <div id="headlines">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ msg }}</p>
    <div class="headlines">
      <li
        v-for="(item, index) in headlines.articles"
        v-bind:key="index"
        v-on:click="moveToContent(index)"
      >
          {{ item.title }}
      </li>
    </div>
  </div>
</template>

<script>
import store from '../store.js';
export default {
  name: 'headlines',
  data: function() {
    return {
      msg: 'Hacker News',
      headlines: store.state.headlines,
    }
  },
  watch: {
    headlines: (v) => {console.log(v)}
  },
  methods: {
    moveToContent: function(id) {
      this.$router.push('/headlines/' + id);
    }
  },
  mounted() {
    if (this.headlines.status !== 'ok') {
      store.getHeadlines();
    }
  }
}
</script>

<style>
#headlines {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.headlines {
  width: 50%;
  text-align: left;
  margin:  0 auto;
}
.headlines li {
  cursor: pointer;
}
.headlines li:hover {
  font-size: 1.2em;
}
</style>
