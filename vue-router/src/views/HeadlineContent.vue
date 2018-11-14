<template>
  <div id="headline-content">
    <p v-if="fetching">fetching...</p>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <div class="content">
        {{ article.content }}
      </div>
      <div v-if="article.urlToImage"><img v-bind:src="article.urlToImage"></div>
      <a v-bind:href="article.url" target="_blank">More...</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'headlinecontent',
  computed: {
    fetching() {
      return this.$store.state.fetching
    },
    article() {
      if (this.$store.state.headlines.status !== 'ok') {
        return false;
      }
      return this.$store.state.headlines.articles[this.$route.params.id]
    }
  },
  methods: {
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
.content {
  width: 50%;
  text-align: left;
  margin:  0 auto;
}
</style>

