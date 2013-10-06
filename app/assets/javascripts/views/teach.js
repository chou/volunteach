TuberApp.Views.teach = Backbone.View.extend({
  initialize: function(){
    this.template = JST["home/teach"]; //map, avail btn
  },

  mapInitialize: function(){
    this.geocoder = new google.maps.Geocoder();
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(37.7616170601249, -122.4298728500122),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions
      );
  },

  events: {
    "click #submit-avail"   :   "submit",
    "click #find-me"        :   "locate"
    //MAP HANDLERS HERE
  },

  locate: function(event){
    var address = "1101 E. 56th St Chicago, IL" //$("#availability").serializeJSON();
    this.geocoder.geocode( {"address": address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    // this.mapInitialize();
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var tutorAvailability = $("#availability").serializeJSON();

    $.ajax({
      url: "/api/users/" + TuberApp.Store.currentUser.id,
      data: tutorAvailability,
      dataType: "JSON",
      type: "PUT",
      success: function(){
        Backbone.history.navigate("/pending");
      },

    });
  },

})