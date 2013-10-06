TuberApp.Models.User = Backbone.Model.extend({
  urlRoot : '/api/users',

  fullName: function() {
    return this.get('fname') + " " + this.get('lname');
  },

  abbrevName: function() {
    return this.get('fname') + " " + this.get('lname').slice(0, 1);
  }

});
