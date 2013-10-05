TuberApp.Views.signup = Backbone.View.extend({
  initialize: function() {
    this.template = JST["signup"];
  },
  
  events: {
    "click #signup-submit" : "signup",
  },

  render: function() {
    var renderedContent = this.template({
      // user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  },

  signup: function(event) {
    console.log("signup function called");
    event.preventDefault();
    signupData = $("#signup-form").serializeJSON();
    
    var phone = signupData.user.phone_number;
    //disregard any characters which aren't numbers
    phone = phone.replace(/\D+/g, '')
    //disregard a leading one
    if (phone.length === 11 && phone[0] === '1') {
      phone = phone.slice(1)
    }
    signupData.user.phone_number = phone;
    
    $.ajax({
      url: "/api/users",
      data: signupData,
      dataType: "json",
      type: "POST",
      success: function(resp) {
        console.log("signup success");
        //navbar.render();
      },
      error: function(resp) {
        console.log(resp);
      }
    });
  },  
})