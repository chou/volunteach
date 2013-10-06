TuberApp.Views.UserEditTopics = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.topics = options.topics;
    this.template = JST["users/editTopics"];
  },
  
  events: {
    "click #edit-topics" : "editTopics",
  },

  editTopics: function (event) {
    event.preventDefault();
    var topicData = $("#edit-topics-form").serializeJSON();
    $.ajax({
      url: "/api/users/" + TuberApp.Store.currentUser.id,
      data: topicData,
      dataType: "json",
      type: "PUT",
      success: function(resp) {
        alert("Topics successfully updated.");
        render();
      },
      error: function(resp) {
        alert("An error has occured when attempting to update topics.");
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