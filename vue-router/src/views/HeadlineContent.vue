<template>
  <div id="headline-content">
    <h1>{{ article.title }}</h1>
    <div class="content">
      {{ article.content }}
    </div>
    <div v-if="article.urlToImage"><img v-bind:src="article.urlToImage"></div>
    <a v-bind:href="article.url" target="_blank">More...</a>
  </div>
</template>

<script>
export default {
  name: 'headlinecontent',
  computed: {
    article() {
      return this.$store.state.headlines.articles[this.$route.params.id]
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

