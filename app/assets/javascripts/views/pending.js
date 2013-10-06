TuberApp.Views.pending = Backbone.View.extend({
  initialize: function(){
    this.template = JST["home/pending"];
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
})