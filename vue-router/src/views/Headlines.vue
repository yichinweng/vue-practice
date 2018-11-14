<template>
  <div id="headlines">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p v-if="fetching">fetching...</p>
    <div class="headlines">
      <HeadlineTitle
        v-for="(item, index) in headlines.articles"
        v-bind:article="item"
        v-bind:key="index"
        v-on:click.native="moveToContent(index)"></HeadlineTitle>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const HeadlineTitle = {
  props: ['article'],
  template: `
    <li>
        {{ article.title }}
    </li>`
};

export default {
  name: 'headlines',
  components: {
    HeadlineTitle,
  },
  data: function() {
    return {
      msg: 'Hacker News',
    }
  },
  computed: {
    fetching() {
      return this.$store.state.fetching
    },
    headlines() {
      return this.$store.state.headlines
    }
  },
  methods: {
    moveToContent: function(id) {
      this.$router.push('/headlines/' + id);
    },
    ...mapActions([
      'getHeadlines',
    ])
  },
  mounted() {
    if (this.$store.state.headlines.status === 'ok') {
      return;
    }
    this.getHeadlines();
  },
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
