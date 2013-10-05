window.TuberApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function() {
    $.ajax({
      url: "/api/topics",
      dataType: "json",
      type: "GET",
      success: function(data){
        TuberApp.Store.topics = new TuberApp.Collections.Topics(data);
        TuberApp.Store.currentUser = data.user ? new TuberApp.Models.User(data.user) : null;
        console.log("topic success");
        TuberApp.start();
      },
      error: function(resp){
        console.log("failed");
      }
    });
  },

  start: function(){
    var navbar = new TuberApp.Views.navbar();
    var renderedContent = navbar.render().$el
    $navbar.html(renderedContent);
    var usersRouter = new TuberApp.Routers.Users($rootEl);
    // var meetingsRouter = new TuberApp.Routers.Meetings($rootEl);
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function(){
  $navbar = $("#navbar");
  $rootEl = $("#content");
  TuberApp.initialize($navbar, $rootEl);
});
