<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import store from '../store.js'
export default {
  data: function() {
    return {
      msg: store.state.msg
    }
  }
}
</script>
