window.TuberApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function(currentUser) {
    TuberApp.Store.currentUser = new TuberApp.Models.User(currentUser);
    TuberApp.Store.currentUser.fetch();
    $.ajax({
      url: "/api/topics",
      dataType: "json",
      type: "GET",
      success: function(data){
        console.log("Initializing stuff");
        TuberApp.Store.topics = new TuberApp.Collections.Topics(data);
        console.log("topic success");
        TuberApp.start();
      },
      error: function(resp){
        console.log("failed");
      }
    });
  },

  start: function(){
    TuberApp.Store.navbar = new TuberApp.Views.navbar();
    var renderedContent = TuberApp.Store.navbar.render().$el
    $navbar.html(renderedContent);
    var usersRouter = new TuberApp.Routers.Users($rootEl);
    // var meetingsRouter = new TuberApp.Routers.Meetings($rootEl);
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function(){
  $navbar = $("#navbar");
  $rootEl = $("#content");
  var currentUserJSON = $('#current_user_info').html();
  if (currentUserJSON) {
    var currentUser = JSON.parse(currentUserJSON);
  }
  TuberApp.initialize(currentUser);
});
