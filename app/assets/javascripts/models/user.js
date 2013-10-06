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
  },

  topics: function() {
    var topics = _(this.get("topic_ids")).map(function(topic_id){
      return TuberApp.Store.topics.get(topic_id);
    })
    return new TuberApp.Collections.Topics(topics);
  }

});
