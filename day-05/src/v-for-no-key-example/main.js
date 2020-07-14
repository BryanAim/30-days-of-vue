new Vue({
  el: '#app',
  data: {
    numbers: [1, 100, 1000, 10000]
  },
  methods: {
    shuffle() {
      this.numbers = _.shuffle(this.numbers)
    }
  },
})