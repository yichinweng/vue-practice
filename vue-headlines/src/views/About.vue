<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.msg
    }
  }
}
</script>
