TuberApp.Routers.Meetings = Backbone.Router.extend({
  routes: {
    "rate": "rate",
  },

  initialize : function($rootEl) {
    this.$rootEl = $rootEl;
  },

  rate: function() { 
    console.log("triggered rate function");
    this.$rootEl.html("OVERWRITE");
    var user = TuberApp.Store.currentUser;
    //NYI: how is Tutor stored?
    var tutor = new TuberApp.Models.User({id: 2});
    var rateTutorView = new TuberApp.Views.RateTutor({
       user: user,
       tutor: tutor
    });

    var renderedView = rateTutorView.render();
    this.$rootEl.html(renderedView.$el);
    console.log("exit rate function");
  }
});
