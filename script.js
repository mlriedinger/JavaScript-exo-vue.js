var app = new Vue({
    el: '#app',
    data: {
      storeName: 'Hello world !',
      headline: 'Best titre 2 ever',
      newHeadline:'',
      changeColor: false,
    },
    methods: {
        updateHeadline: function(){
            this.headline = document.querySelector('#headline').value;
        }
    }
  })