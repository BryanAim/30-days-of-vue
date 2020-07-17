new Vue({
  el: '#app',
  data: {
    message: 'Greetings!'
  },
  computed: {
    reverseMessage() {
      console.log('Computed function is run!');
      return this.message.split('').reverse().join('')
    }
  },
})