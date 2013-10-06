TuberApp.Views.UserEdit = Backbone.View.extend({
  
  initialize: function(options){
    this.user = options.user;
    this.topics = this.user.get("topic_ids") || null;
    this.template = JST["users/edit"];
    //this.listenTo(this.user, "change", "render");
  },

  render: function() {
    var that = this;
    
    var contact = new TuberApp.Views.UserEditContact({ 
      user: this.user,
      topics: this.topics
    });
    var topics = new TuberApp.Views.UserEditTopics({ 
      user: this.user,
      topics: this.topics
    });

    this.$contact = contact.render().$el;
    this.$topics = topics.render().$el;

    return this;
  }

});