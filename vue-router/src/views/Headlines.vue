<template>
  <div id="headlines">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ msg }}</p>
    <div class="headlines">
      <li
        v-for="item in headlines.articles"
        v-bind:key="item.id"
      >
        {{ item.title }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headlines',
  data: function() {
    return {
      msg: 'Hacker News',
      headlines: {},
    }
  },
  mounted() {
    fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=9180b03cfcdf4018ab8b60731b6c958a')
      .then(function(res) {
        return res.json();
      })
      .then((resJson) => {
        this.headlines = resJson;
      })
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
</style>
