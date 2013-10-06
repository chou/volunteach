TuberApp.Views.MeetingShow = Backbone.View.extend({
  initialize: function(options){
    this.template = JST['meetings/show'];
    this.meeting = options.meeting;
  },

  //because this rendering must wait on a fetch before
  // returning, the final rendering onto the page occurs
  // in the function via side-effect rather than
  // return-value
  do_render: function($rootEl) {
    var view = this;
    var tutor_id = this.meeting.get("tutor_id");
    var student_id = this.meeting.get("student_id");
    var current_id = TuberApp.Store.currentUser.id;
    var collaborator_id = (
      tutor_id == current_id ? student_id : tutor_id
      );
    var collaborator = new TuberApp.Models.User({
      id: collaborator_id
    });
    collaborator.fetch({
      success: function(model, resp, optns){
        //debugger
        console.log(model);
        var renderedContent = view.template({ 
          collaborator: model,
          meeting: view.meeting
          });
        view.$el.html(renderedContent);
        $rootEl.html(view.$el);
      },
      error: function(model, resp, optns){
        console.log("collab fetch failed")
      }
    })

  }

});
