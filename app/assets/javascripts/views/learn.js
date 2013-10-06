TuberApp.Views.learn = Backbone.View.extend({
  initialize: function(){
    this.template = JST["home/learn"];
  },

  events: {
    "click #submit-req"   :   "submitReq",
    "click #find-me"      :   "locate"
  },

  mapInitialize: function(){
    this.geocoder = new google.maps.Geocoder();
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(37.7616170601249, -122.4298728500122),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions
      );
  },


  locate: function(event){
    event.preventDefault();
    var view = this;
    var address = $("#addr").val(); //$("#availability").serializeJSON();
    this.geocoder.geocode( {"address": address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        view.map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: view.map,
            position: results[0].geometry.location
        });
        TuberApp.Store.currentUser.set({ 
          lat: results[0].geometry.location["lb"],
          lng: results[0].geometry.location["mb"]})        

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    //handle multiple select search box
    return this;
  },

  submitReq: function(event){
    event.preventDefault();
    debugger
    var studentRequest = $("#meeting").serializeJSON();
    cut = ["id", "avg_rating", "num_ratings", "created_at", "updated_at", "role", "meeting"]

    userAttrs = TuberApp.Store.currentUser.attributes;

    _.each(cut, function(key){
      delete userAttrs[key];
    });

    studentRequest.user = userAttrs;

    $.ajax({
      url: "/api/meetings",
      data: studentRequest,
      dataType: "json",
      type: "POST",
      wait: true,
      success: function(model, resp, optns){

        Backbone.history.navigate("/home", {trigger: true});
      }
    });
  },
})