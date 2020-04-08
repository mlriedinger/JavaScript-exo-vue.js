var app = new Vue({
  el: "#app",
  data: {
    storeName: "la boutique de gâteaux",
    headline: "Le grand retour du come-back",
    newHeadline: "",
    changeColor: false,
    showImage: false,
  },
  methods: {
    updateHeadline: function () {
      this.headline = this.newHeadline;
    },
  },
});
