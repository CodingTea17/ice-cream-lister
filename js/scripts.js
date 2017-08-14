$(document).ready(function(){
  $("#user-fav-ice").submit(function(event) {
    event.preventDefault();

    var userIceCreams = ["fav-ice-1", "fav-ice-2", "fav-ice-3", "fav-ice-4"];

    userIceCreams.forEach(function(userIceCream) {
      // Take value from each input
      var iceCreamFlavor = $("#" + userIceCream).val();
      // Value from input in var into li
      $("ol#fav-ice-list").append("<li>" + iceCreamFlavor + "</li>");
    });
  });
});
