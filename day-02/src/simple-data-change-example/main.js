new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Bryan Isale',
    city: 'Nakuru, Kenya'
  },
  methods: { //instance methods
    //allows us to define methods bound to that instance that behave like normal JS functions, ie are evaluated only when called
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
       'What is up!' :
       'Hello World!';
    },
    swapUsername() {
      this.user = this.user === 'Bryan Isale' ? 'Isale Bryan' : 'Bryan Isale';
    },
    changeCity() {
      this.city = this.city=== 'Nakuru, Kenya.🙂' ? '.....Oooops! Sorry! He is homeless.😢' : 'Nakuru, Kenya.🙂';
    }
  }
});
