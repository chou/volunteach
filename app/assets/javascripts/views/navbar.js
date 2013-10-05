TuberApp.Views.navbar = Backbone.View.extend({

  initialize: function(){
    this.template = JST["navbar"];
    this.listenTo($("logout"), "click", "logOut");
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
})