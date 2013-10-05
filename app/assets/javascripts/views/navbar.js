TuberApp.Views.navbar = Backbone.View.extend({

  initialize: function(){
    this.template = JST["navbar"];
    this.listenTo($("#logout"), "click", "logOut");
    this.listenTo($("#login"), "click", "logIn");
  },

  events: {
    "click #login" : "logIn",
    "click #logout" : "logOut",
    // "#signup click" : "signup",
  },

  logIn: function(){
    console.log("clicked login");
    var loginView = new TuberApp.Views.login();
    var renderedContent = loginView.render().$el;
    $("#content").html(renderedContent);
  },
  
  logOut: function(){
    TuberApp.Store.currentUser = null;
    $.ajax({
      url: "/session",
      dataType: "json",
      type: "DELETE",
      success: function(){
        console.log("success");
        navbar.render();
      },
      error: function(resp){
        console.log(resp);
      }
    });
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

  // signup: function(){
  //   var signupView = new TuberApp.Views.signup();
  //   var renderedContent = signupView.render().$el;
  //   $("#content").html(renderedContent);
  // }
})