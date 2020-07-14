new Vue({
  el: '#app',
  data: {
    numbers: [1, 2]
  },
  methods: {
    shuffle() {
      this.numbers = _.shuffle(this.numbers)
    }
  },
})