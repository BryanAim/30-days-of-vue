new Vue({
  el:"#app",
  data: {
    km: 0,
    m: 0
  },
  watch: {
    km() {
      // Whenever km data value changes, this function runs
      this.m = this.km ? this.km * 1000 : 0;
    },
    m() {
      // Whenever m data value changes, this function runs
      this.km = this.m ? this.m / 1000 : 0;
    }
  },
})