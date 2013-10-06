TuberApp.Views.UserEditContact = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.topics = options.topics;
    this.template = JST["users/editContact"];
  },
  
  events: {
    "click #edit-contact" : "editContact",
  },

  editContact: function (event) {
    event.preventDefault();
    var contactData = $("#edit-contact-form").serializeJSON();
    $.ajax({
      url: "/api/users/" + TuberApp.Store.currentUser.id,
      data: contactData,
      dataType: "json",
      type: "PUT",
      success: function(resp) {
        alert("Contact info successfully updated.");
        render();
      },
      error: function(resp) {
        alert("An error has occured when attempting to update contact info.");
      }
    });
  },

  render: function(){
    var renderedContent = this.template({
      user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  }
});