TuberApp.Models.User = Backbone.Model.extend({
  urlRoot : '/api/users',

  fullName: function() {
    return this.get('fname') + " " + this.get('lname');
  },

  abbrevName: function() {
    return this.get('fname') + " " + this.get('lname').slice(0, 1);
  },

  prettyPhoneNumber: function() {
    var phoneNumber = this.get('phone_number');
    return "(" + phoneNumber.slice(0, 3) + ") " + phoneNumber.slice(3, 6) + "-" + phoneNumber.slice(6);
  }

});
