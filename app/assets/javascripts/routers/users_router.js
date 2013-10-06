TuberApp.Routers.Users = Backbone.Router.extend({
  routes: {
    "users/:id" :   "show",
    "home"      :   "home",
    "profile"   :   "profile",
    ""          :   "root",
    "teach"     :   "teach",
    "learn"     :   "learn",
    "pending"   :   "pending"
  },

  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },

  root: function() {
    if (TuberApp.Store.currentUser) {
      Backbone.history.navigate("home", {trigger: true})
    } else {
      TuberApp.Store.navbar.logIn();
    }
  },

  home: function() {
    var currentUser = TuberApp.Store.currentUser;
    if(currentUser){
      if(currentUser.get("role")){
        //if currentUser has a role, display mtng details
        var meeting = new TuberApp.Models.Meeting(currentUser.get("meeting"));
        var meetingShow = new TuberApp.Views.MeetingShow({
          meeting: meeting
        });
        //var renderedContent = meetingShow.render().$el;
        //this.$rootEl.html(renderedContent);
        meetingShow.do_render(this.$rootEl);

      }else if(!currentUser.get("available")){
        //if user's not yet set availability to true
        var home = new TuberApp.Views.teachOrLearn();
        var renderedContent = home.render().$el;
        this.$rootEl.html(renderedContent);
      }else{
        //otherwise, user is pending (avail but not yet assigned)
        var pending = new TuberApp.Views.pending();
        var renderedContent = pending.render().$el;
        this.$rootEl.html(renderedContent);
      }
    }else {
      TuberApp.Store.navbar.logIn();
    }
    //else if meeting ongoing, display msg of ongoing meeting
    //if pending, also a notification
    
  },

  learn: function(){
    var learn = new TuberApp.Views.learn();
    var renderedContent = learn.render().$el;
    this.$rootEl.html(renderedContent);
    learn.mapInitialize();
  },

  teach: function(){
    var teach = new TuberApp.Views.teach();
    var renderedContent = teach.render().$el;
    this.$rootEl.html(renderedContent);
    teach.mapInitialize();
  },

  profile: function(){ 
    var that = this;
    //if there is no ongoing meeting, form to create one; else details of meeting
    //what if no currentUser?
    if (TuberApp.Store.currentUser){
      if (TuberApp.Store.currentUser.role){ //if currently in meeting
        // var meetingView = TuberApp.
        this.$rootEl.html("displaying meeting details");

      } else { //just display user's profile
        that.show(TuberApp.Store.currentUser.id);
      }
    } else {//no current user
      Backbone.history.navigate("", {trigger: true});
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