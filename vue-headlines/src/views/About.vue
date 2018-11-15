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
    <base-input ref="usernameInput"></base-input>
    <div>
      <button v-on:click="focusInput()">Focus input box</button>
    </div>
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

const baseInput = {
  template: `
    <p>
      <input ref="input">
    </p>
  `,
  methods: {
    focus: function() {
      this.$refs.input.focus()
    }
  }
}

export default {
  components: {
    SlotTest,
    baseInput
  },
  computed: {
    msg() {
      return this.$store.state.msg
    }
  },
  methods: {
    focusInput: function() {
      this.$refs.usernameInput.focus()
    }
  }
}
</script>
