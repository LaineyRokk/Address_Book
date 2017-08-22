
function Ticket(movie, time, age) {
    this.movie = movie;
    this.time = time;
    this.age = age;
}

Ticket.prototype.movieTicket = function () {
  return this.time + this.movie + this.age

}



$(document).ready(function() {
  $("#movieTicket").submit(function(event) {
    event.preventDefault();

    var movieInput = $("#movie").val();
    var timeInput = $("#time").val();
    var ageInput = $("#age").val();

    // alert(movieInput);
    // alert(timeInput);
    // alert(ageInput);

    var newTicket = new Ticket(parseInt(movieInput), parseInt(timeInput), parseInt(ageInput));
    alert( newTicket.movieTicket());
  });
});
