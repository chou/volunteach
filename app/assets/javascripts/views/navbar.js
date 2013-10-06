TuberApp.Views.navbar = Backbone.View.extend({

  initialize: function(){
  },

  template: JST["navbar"],

  events: {
    "click #login" : "logIn",
    "click #logout" : "logOut",
    "click #signup" : "signup",
  },

  logIn: function() {
    console.log("clicked login");
    var loginView = new TuberApp.Views.login();
    var renderedContent = loginView.render().$el;
    $("#content").html(renderedContent);
  },
  
  logOut: function() {
    var navbar = this;
    TuberApp.Store.currentUser = null;
    $.ajax({
      url: "/api/session",
      dataType: "json",
      type: "DELETE",
      success: function(){
        navbar.render();
      },
      error: function(errorResponse){
        debugger
        console.log(errorResponse);
      }
    });
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  signup: function() {
     var signupView = new TuberApp.Views.signup();
     var renderedContent = signupView.render().$el;
     $("#content").html(renderedContent);
   }
})