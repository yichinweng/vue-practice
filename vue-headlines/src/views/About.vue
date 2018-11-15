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
    <transition name="fade"
      enter-active-class="fade-enter-active"
      leave-active-class="fade-leave-active">
      <div v-if="show">
        <base-input ref="usernameInput"></base-input>
        <div v-if="show">
          <button v-on:click="focusInput()">Focus input box</button>
        </div>
      </div>
    </transition>
    <button v-on:click="show = !show">Toggle Show</button>
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
  data: function() {
    return {
      show: true,
    }
  },
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
