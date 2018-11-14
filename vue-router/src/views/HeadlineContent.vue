<template>
  <div id="headline-content">
    <h1>{{ article.title }}</h1>
    <div class="content">
      {{ article.content }}
    </div>
    <a v-bind:href="article.url">More...</a>
  </div>
</template>

<script>
import store from '../store.js';
export default {
  name: 'headlinecontent',
  data: function() {
    return {
      article: store.state.headlines.articles[this.$route.params.id]
    }
  }
}
</script>

<style>
.content {
  width: 50%;
  text-align: left;
  margin:  0 auto;
}
</style>

