TuberApp.Views.RateTutor = Backbone.View.extend({
  initialize: function(options) {
    this.user = options.user;
    this.meeting = options.meeting;
    this.template = JST['meetings/ratetutor'];
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
