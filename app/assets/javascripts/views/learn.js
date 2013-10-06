TuberApp.Views.learn = Backbone.View.extend({
  initialize: function(){
    this.template = JST["home/learn"];
  },

  events: {
    "click #submit-avail"   :   "submit-avail"
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    //handle multiple select search box
    return this;
  }
})