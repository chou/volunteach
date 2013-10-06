TuberApp.Views.UserRatings = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.topics = options.topics;
    this.template = JST["users/showRatings"];
    $(window).on("resize", this.renderAvgRating.bind(this))
  },


  render: function(){
    var renderedContent = this.template({
      user: this.user
    });

    this.$el.html(renderedContent);
    _.defer(this.renderAvgRating.bind(this));
    return this;
  },


  renderAvgRating: function() {
    var width = $('.avg_rating').parent().width();
    var height = width / 5;
    $('.avg_rating')
      .width(width)
      .height(height)
      .css("background-size", width + "px " + height + "px")
      .css("position", "absolute");
    $('.avg_rating.yellow')
      .width(width * this.user.get("avg_rating") / 5);
    $('.avg_rating').parent().height(height + 75)
    
  }

});