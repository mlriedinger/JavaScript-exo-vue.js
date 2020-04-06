var app = new Vue({
    el: '#app',
    data: {
      storeName: 'Hello world !',
      headline: 'Best titre 2 ever',
      newHeadline:''
    },
    methods: {
        updateHeadline: function(){
            this.headline = document.querySelector('#headline').value;
        }
    }
  })