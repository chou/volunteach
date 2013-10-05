TuberApp.Views.UserShow = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.topics = this.user.get("topic_ids") || null;
    this.template = JST["users/show"];
    this.listenTo(this.user, "change", "render");
  },

  render: function(){
    var that = this;
    var contact = new TuberApp.Views.UserContact({ 
      user: this.user,
      topics: this.topics
      });
    var topics = new TuberApp.Views.UserTopics({ 
      user: this.user,
      topics: this.topics
      });
    var ratings = new TuberApp.Views.UserRatings({ 
      user: this.user,
      topics: this.topics
      });
      
    this.$contact = contact.render().$el;
    this.$topics = topics.render().$el;
    this.$ratings = ratings.render().$el;

    return this;
  }

});