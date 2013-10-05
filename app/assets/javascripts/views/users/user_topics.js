TuberApp.Views.UserTopics = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.template = JST["users/showTopics"];
  }

  render: function(){
    var renderedContent = this.template({
      user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  }
});