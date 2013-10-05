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
    }else{
      this.$rootEl.html("sign up/in");
      //some view for generic encouragement to onboard
    };

  },

  show: function(id){
    var showUser = new TuberApp.Views.UserShow({
      user: TuberApp.Store.currentUser
    });
    var renderedView = showUser.render();
    this.$rootEl.html(renderedView.$contact)
      .append(renderedView.$topics)
      .append(renderedView.$ratings);
  }
});
