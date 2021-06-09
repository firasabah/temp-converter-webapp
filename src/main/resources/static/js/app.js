// app.js

const TempConverter = {
  data() {
    return {
      celsius: undefined,
      fahrenheit: undefined,
    };
  },

  methods: {
    celsiusChanged($event) {
      if ($event) {
        $event.preventDefault();
      }
      if (parseInt($event.target.value) != NaN) {
        this.celsius = $event.target.value;
        // this.fahrenheit = ($event.target.value * 9/5) + 32;
        axios
          .get("/converter/temp/c2f/" + this.celsius)
          .then(function (response) {
            TempConverterApp.fahrenheit = response.data;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }
    },

    fahrenheitChanged($event) {
      if ($event) {
        $event.preventDefault();
      }
      if (parseInt($event.target.value) != NaN) {
        this.fahrenheit = $event.target.value;
        // this.celsius = (($event.target.value - 32) * 5) / 9;
        axios
        .get("/converter/temp/f2c/" + this.fahrenheit)
        .then(function (response) {
          TempConverterApp.celsius = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

      }
    },
  },
};

const TempConverterApp = Vue.createApp(TempConverter).mount("#app");
