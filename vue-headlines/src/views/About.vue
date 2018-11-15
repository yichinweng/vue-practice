<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <SlotTest>
      <template slot="title">
        This is a slot test.
      </template>
      <template slot="content">
        first multi-slot test.
      </template>
      Hi, I'm Winter. {{ msg }}
    </SlotTest>
  </div>
</template>

<script>
const SlotTest = {
  template: `
    <div>
      <h2>
        <slot name="title"></slot>
      </h2>
      <p>
        <slot name="content"></slot>
      </p>
      <slot></slot>
    </div>
  `
};

export default {
  components: {
    SlotTest,
  },
  computed: {
    msg() {
      return this.$store.state.msg
    }
  }
}
</script>
