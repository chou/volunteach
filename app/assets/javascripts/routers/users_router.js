TuberApp.Routers.Users = Backbone.Router.extend({
  routes: {
    "users/:id"    :   "show",
    "home"         :   "home",
    "profile"      :   "profile",
    "profile/edit" :   "profileEdit",
    ""             :   "root",
    "teach"        :   "teach",
    "learn"        :   "learn",
    "pending"      :   "pending"
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
    if(TuberApp.Store.currentUser){
    //if currentUser.role is false, optNs to teach or to learn.
      var home = new TuberApp.Views.teachOrLearn();
      var renderedContent = home.render().$el;
      this.$rootEl.html(renderedContent);
    }
    //else if meeting ongoing, display msg of ongoing meeting
    //if pending, also a notification
    
  },

  learn: function(){
    var learn = new TuberApp.Views.learn();
    var renderedContent = learn.render().$el;
    this.$rootEl.html(renderedContent);
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


  profileEdit: function(){ 
    var that = this;
    //if there is no ongoing meeting, form to create one; else details of meeting
    //what if no currentUser?
    if (TuberApp.Store.currentUser){
      if (TuberApp.Store.currentUser.role){ //if currently in meeting
        // var meetingView = TuberApp.
        this.$rootEl.html("displaying meeting details");

      } else { //just display user's profile
        var editUser = new TuberApp.Views.UserEdit({
          user: TuberApp.Store.currentUser
        })

        var renderedView = editUser.render();
        this.$rootEl.html(renderedView.$contact)
          .append(renderedView.$topics)
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
  },

  _authenticateUserFilter: function() {
    if (!TuberApp.Store.currentUser) {
      Backbone.history.navigate("", {trigger: true})
    }
  }


});