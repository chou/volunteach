window.TuberApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    $navbar.html(JST["navbar"]());
  }
};

$(document).ready(function(){
  $navbar = $("#navbar");
  $rootEl = $("#content");
  TuberApp.initialize($navbar, $rootEl);
});
