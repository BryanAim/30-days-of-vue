new Vue({
  el: '#app',
  data: {
    km: 0
  },
  computed: {
    m: {
      get() {
        // get m value
        return this.km * 1000;
      },
      set (newValue) {
        // when m changes, this function runs
        this.km = newValue/1000;
        
      }
    }
  },
})