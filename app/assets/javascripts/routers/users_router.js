TuberApp.Routers.Users = Backbone.Router.extend({
  routes: {
    "users/:id" :   "show"
  },

  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },

  show: function(id){
    var user = new TuberApp.Models.User({ id: id }).fetch();
    var showUser = new TuberApp.Views.UserShow({
      user: user
    });
    var renderedView = showUser.render();
    this.$rootEl.html(renderedView.$contact)
      .append(renderedView.$topics)
      .append(renderedView.$ratings);
  }
});
