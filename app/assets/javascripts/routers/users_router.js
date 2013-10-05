TuberApp.Routers.Users = Backbone.Router.extend({
  routes: {
    "users/:id" :   "show",
    "home"      :   "home"
  },

  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },

  home: function() { 
    //if there is no ongoing meeting, form to create one; else details of
    //meeting.
    if (TuberApp.Store.currentUser){
      if (TuberApp.Store.currentUser.role) { //if currently in meeting
        // var meetingView = TuberApp.

      } else {

      }
    } else {
      //no current user
      this.$rootEl.html("sign up/in");
      //some view for generic encouragement to onboard
    };

  },

  show: function(id) {
    var user = new TuberApp.Models.User({ id: id });
    user.fetch();
    TuberApp.Store.currentUser = user;
    
    var showUser = new TuberApp.Views.UserShow({
       user: user
    });
    var renderedView = showUser.render();
    this.$rootEl.html(renderedView.$contact)
      .append(renderedView.$topics)
      .append(renderedView.$ratings);
  }
});
