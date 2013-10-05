TuberApp.Views.UserShow = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.template = JST["users/show"];
    this.listenTo(this.user, "change", "render");
  }

  render: function(){
    var that = this;
    this.user.meetings.each(function(meeting){
      var meetingView = new TuberApp.Views.MeetingShow({
        meeting: meeting
      });
      that.$el.append(meetingView.render().$el);
    })
  }

});
