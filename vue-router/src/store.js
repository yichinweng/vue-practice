var store = {
  state: {
    msg: 'This is an about page'
  },
  setMsg (newValue) {
    this.state.msg = newValue
  },
  clearMsg () {
    this.state.msg = ''
  }
}

export default store;