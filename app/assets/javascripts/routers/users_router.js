TuberApp.Routers.Users = Backbone.Router.extend({
  routes: {
    "users/:id" :   "show"
  },

  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  }

  show: function(id){
    var user = new TuberApp.Models.Users({ id: id }).fetch();
    var showUser = new TuberApp.Views.UserShow({
      user: user
    });
    var renderedContent = showUser.render().$el
    this.$rootEl.html(renderedContent);
  }
});
