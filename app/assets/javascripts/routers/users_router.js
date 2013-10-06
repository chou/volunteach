TuberApp.Routers.Users = Backbone.Router.extend({
  routes: {
    "users/:id" :   "show",
    "home"      :   "home"
  },

  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },

  home: function(){ 
    var that = this;
    //if there is no ongoing meeting, form to create one; else details of meeting
    //what if no currentUser?
    if (TuberApp.Store.currentUser){
      if(TuberApp.Store.currentUser.role){ //if currently in meeting
        // var meetingView = TuberApp.
        this.$rootEl.html("displaying meeting details");

      }else{ //just display user's profile
        that.show(TuberApp.Store.currentUser.id);
      }
    }else{//no current user
      this.$rootEl.html("sign up/in");
      //some view for generic encouragement to onboard
    };

  },

  show: function(id) {
    var user = new TuberApp.Models.User({ id: id });
    user.fetch({
      success: function(model, response, options) {
        TuberApp.Store.currentUser = model;
    
        var showUser = new TuberApp.Views.UserShow({
           user: model
        });
    
        var renderedView = showUser.render();
        this.$rootEl.html(renderedView.$contact)
          .append(renderedView.$topics)
          .append(renderedView.$ratings);
      },
      error: function() {
        console.log("Error in show function.");
      }
    });
  }
});