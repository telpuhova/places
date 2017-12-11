//business logic
function Place(location, month, year, notes) {
  this.location = location;
  this.month = month;
  this.year = year;
  this.notes = notes;
}

Place.prototype.getTime = function() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[this.month-1] + " " + this.year;
}

//ui
$(document).ready(function() {
  $("#formPlaces").submit(function() {
    event.preventDefault();
    var location = $("#location").val();
    var month = $("#month").val();
    var year = $("#year").val();
    var notes = $("#notes").val();

    var newPlace = new Place(location, month, year, notes);

    $("#result-list").append("<li class='listItem'>" + newPlace.location + "</li>");

    $("ul").show();

    $("li").last().click(function() {
      // $("this").css('background-color', 'red');
      $("#contact-display").empty();
      $("#contact-display").append("<h3>" + newPlace.location + "</h3>" + "<br>" + newPlace.getTime() + "<br>" + newPlace.notes);
      $("#contact-display").show();
    });
  });
});
