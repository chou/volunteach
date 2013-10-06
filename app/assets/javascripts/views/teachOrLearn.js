TuberApp.Views.teachOrLearn = Backbone.View.extend({
  initialize: function(){
    this.template = JST["home/teachOrLearn"];
  },

  events: {
    "click #teach" : "teach",
    "click #learn" : "learn"
  },

  learn: function(event){
    event.preventDefault();
    Backbone.history.navigate("learn", { trigger: true });
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  teach: function(event){
    event.preventDefault();
    Backbone.history.navigate("teach", { trigger: true });
  }

});