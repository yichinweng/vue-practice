var store = {
  state: {
    msg: 'This is an about page',
    headlines: {},
  },
  setMsg (newValue) {
    this.state.msg = newValue
  },
  clearMsg () {
    this.state.msg = ''
  },
  getHeadlines () {
    fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=9180b03cfcdf4018ab8b60731b6c958a')
    .then(function(res) {
      return res.json();
    })
    .then((resJson) => {
      this.setHeadlines(resJson);
    })
  },
  setHeadlines (headlines) {
    this.state.headlines = headlines
  }
}

export default store;