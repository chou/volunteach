TuberApp.Views.UserShow = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.template = JST["users/show"];
    this.listenTo(this.user, "change", "render");
  }

  render: function(){
    var that = this;
    var contact = new TuberApp.Views.UserContact({ user: this.user });
    var topics = new TuberApp.Views.UserTopics({ user: this.user });
    var ratings = new TuberApp.Views.UserRatings({ user: this.user });
      
    this.$contact = contact.render().$el;
    this.$topics = topics.render().$el;
    this.$ratings = ratings.render().$el;
    })
  }

});