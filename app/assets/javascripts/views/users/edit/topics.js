TuberApp.Views.UserEditTopics = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.topics = options.topics;
    this.template = JST["users/editTopics"];
  },

  render: function(){
    debugger
    var topics = TuberApp.Store.topics;
    var topicsByCatgeory = topics.groupBy("category");
    _(topicsByCatgeory).each(function(a, b, c) {
      debugger
    });
    var renderedContent = this.template({
      user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  }
});