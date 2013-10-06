TuberApp.Views.navbar = Backbone.View.extend({

  initialize: function(){
  },

  template: JST["navbar"],

  events: {
    "click #login" : "logIn",
    "click #logout" : "logOut",
    "click #signup" : "signup",
    "click #profile" : "profile",
    "click #profileEdit" : "profileEdit"
  },

  profile: function(event) {
    event.preventDefault();
    Backbone.history.navigate("/profile", {trigger: true})
  },

  profileEdit: function(event) {
    event.preventDefault();
    Backbone.history.navigate("/profile/edit", {trigger: true})
  },  

  logIn: function() {
    console.log("clicked login");
    var loginView = new TuberApp.Views.login();
    var renderedContent = loginView.render().$el;
    $("#content").html(renderedContent);
  },
  
  logOut: function(event) {
    event.preventDefault();
    var navbar = this;
    TuberApp.Store.currentUser = null;
    $.ajax({
      url: "/api/session",
      dataType: "json",
      type: "DELETE",
      success: function(){
        navbar.render();
        Backbone.history.navigate("/", {trigger: true});
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