//business logic
function Place(location, month, year, notes) {
  this.location = location;
  this.month = month;
  this.year = year;
  this.notes = notes;
}

//ui
$(document).ready(function() {
  $("#formPlaces").submit(function() {
    event.preventDefault();
    var location = $("#location").val();
    var month = $("#month").val();
    var year = $("#year").val();
    var notes = $("#notes").val();

    var place = new Place(location, month, year, notes);

    $("#result-list").append("<li>" + location + "</li>");
    $("#contact-display").empty();
    $("#contact-display").append(location + "<br>" + month + "<br>" + year + "<br>" + notes)
  });
});
