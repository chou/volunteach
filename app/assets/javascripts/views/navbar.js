TuberApp.Views.navbar = Backbone.View.extend({

  initialize: function(){
    this.template = JST["navbar"];
    this.listenTo($("#logout"), "click", "logOut");
    this.listenTo($("#login"), "click", "logIn");
  },

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
    var that = this;
    TuberApp.Store.currentUser = null;
    $.ajax({
      url: "/api/session",
      dataType: "json",
      type: "DELETE",
      success: function(){
        that.render();
        debugger
        console.log("success");
      },
      error: function(resp){
        debugger
        console.log(resp);
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