TuberApp.Views.MeetingShow = Backbone.View.extend({
  initialize: function(options){
    this.template = JST['meetings/show'];
    this.meeting = options.meeting;
  },

  render: function(){
    var tutor_id = this.meeting.get("tutor_id");
    var student_id = this.meeting.get("student_id");
    var current_id = TuberApp.Store.currentUser.id;
    var collaborator_id = (
      tutor_id == current_id ? student_id : tutor_id
      );
    var collaborator = new TuberApp.Models.User({
      id: collaborator_id
    }).fetch();
    var renderedContent = this.template({ 
      collaborator: collaborator,
      meeting: this.meeting
    });

    this.$el.html(renderedContent);
    return this;
  }

});
