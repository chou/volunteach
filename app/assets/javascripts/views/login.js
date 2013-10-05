TuberApp.Views.login = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.template = JST["logIn"];
    this.listenTo($("#login-submit"), "click", "logIn");
  },

  render: function(){
    var renderedContent = this.template({
      user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  },

  logIn: function(event){
    event.preventDefault();
    loginData = $("#login-form").serializeJSON();
    $.ajax({
      url: "/session",
      data: loginData,
      dataType: "json",
      type: "POST",
      success: function(){
        console.log("success");
        navbar.render();
      },
      error: function(resp){
        console.log(resp);
      }
    });
  },  
})