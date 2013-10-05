TuberApp.Views.UserContact = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.topics = options.topics;
    this.template = JST["users/showContact"];
  },

  render: function(){
    var renderedContent = this.template({
      user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  }
});