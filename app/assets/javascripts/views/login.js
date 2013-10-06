TuberApp.Views.login = Backbone.View.extend({
  initialize: function(){
    // this.user = options.user;
    this.template = JST["logIn"];
  },
  
  events: {
    "click #login-submit" : "logIn"
  },

  render: function(){
    var renderedContent = this.template({
      // user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  },

  logIn: function(event){
    event.preventDefault();
    loginData = $("#login-form").serializeJSON();
    $.ajax({
      url: "/api/session",
      data: loginData,
      dataType: "json",
      type: "POST",
      success: function(data){
        console.log(data)
        TuberApp.Store.currentUser = 
          new TuberApp.Models.User(data.User);
        TuberApp.Store.navbar.render();          
        Backbone.history.navigate("home", { trigger:true })
      },
      error: function(resp){
        console.log(resp);
      }
    });
  },  
})