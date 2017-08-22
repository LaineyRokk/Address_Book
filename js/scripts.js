
function Ticket = (movie, time, age, cost)


    this.movie = movie;
    this.time = time;
    this.age = age;
    this.cost = cost;
}

Ticket.prototype.movieTicket = function () {
  this.time + this.age) * this.cost;

}
