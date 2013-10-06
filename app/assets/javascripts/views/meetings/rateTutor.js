TuberApp.Views.RateTutor = Backbone.View.extend({
  events: {
    "click .star": "hilightStar"
  },
  
  initialize: function(options) {
    this.user = options.user;
    this.meeting = options.meeting;
    this.template = JST['meetings/ratetutor'];
  },
  
  hilightStar: function (event) {
    //debugger
    var star_num = $(event.target).data("id");
    var stars = $("li.star").slice(0, star_num);
    $("li.star").removeClass("yellow").addClass("gray");
    $(stars).removeClass("gray").addClass("yellow");
  },

  render: function() {
    //var tutor_id = this.meeting.get("tutor_id");
    //var student_id = this.meeting.get("student_id");
    //var current_id = this.user.id;

    var renderedContent = this.template({ 
      user: this.user,
      meeting: this.meeting
    });

    this.$el.html(renderedContent);
    return this;
  }
});
