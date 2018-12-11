var tickets = {
    name: "Tickets.com",
    ticketRate: 125.00,
    seatNumbersAvailable: ["101b", "202a", "303f", "404g", "505t", "606k"],
    seatNumbersBooked: [],


    numberOfTicketsAvailable: function() {
        return this.seatNumbersAvailable.length;

    },

    numberOfTicketsBooked: function() {
        return this.seatNumbersBooked.length;

    },

    numberOfTickets: function() {
        return this.seatNumbersAvailable.length + this.seatNumbersBooked.length;

    },
    reserveSeat: function() {
        if (this.numberOfTicketsAvailable() > 0) {
            // var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
            var selectedSeat = document.getElementById("selectedSeat").value;

            this.seatNumbersBooked = this.seatNumbersBooked.concat(this.seatNumbersAvailable.splice(this.seatNumbersAvailable.indexOf(selectedSeat), 1));


            //update drop down list of available seats
            var selectSeatList = "<form> <select id='selectedSeat'>";
            for (var i = 0; i < this.seatNumbersAvailable.length; i++) {

                selectSeatList += "<option value=" + this.seatNumbersAvailable[i] + ">" + this.seatNumbersAvailable[i] + "</option>";
            }
            selectSeatList += "</select> </form>";
            document.getElementById("selectASeat").innerHTML = selectSeatList;

            // update dropdown list of booked seats

            var bookedSeatList = "<form> <select id='bookedSeats'>";
            for (var i = 0; i < this.seatNumbersBooked.length; i++) {

                bookedSeatList += "<option value=" + this.seatNumbersBooked[i] + ">" + this.seatNumbersBooked[i] + "</option>";
            }
            selectSeatList += "</select> </form>";
            document.getElementById("seatsBooked").innerHTML = bookedSeatList;



            //alert("Seat number "+selectedSeat+" has been booked.");
        }
    },
    // new method ------------------------------------------

    returnTicket: function() {
        var seatReturn = document.getElementById("seatReturn").value;
        if (this.numberOfTicketsBooked() > 0) {

            this.seatNumbersAvailable = this.seatNumbersAvailable.concat(this.seatNumbersBooked.splice(this.seatNumbersBooked.indexOf(seatReturn), 1));
            // update dropdown list of booked seats
            var returnSeatList = "<form> <select id='returnSeat'>";
            for (var i = 0; i < this.seatNumbersBooked.length; i++) {

                returnSeatList += "<option value=" + this.seatNumbersBooked[i] + ">" + this.seatNumbersBooked[i] + "</option>";
            }
            returnSeatList += "</select> </form>";
            document.getElementById("seatsBooked").innerHTML = returnSeatList;
            // ----- 
        }
    },

};

document.getElementById("siteName").innerText = tickets.name;

//create inital drop down list of available seats

var seatList = "</ul>";
for (var i = 0; i < tickets.seatNumbersAvailable.length; i++) {

    seatList += "<li>" + tickets.seatNumbersAvailable[i] + "</li>";
}

seatList += "</ul>";

document.getElementById("seatsAvailable").innerHTML = seatList;

//drop down of avail seats

var selectSeatList = "<form> <select id='selectedSeat'>";
for (var i = 0; i < tickets.seatNumbersAvailable.length; i++) {

    selectSeatList += "<option value=" + tickets.seatNumbersAvailable[i] + ">" + tickets.seatNumbersAvailable[i] + "</option>";
}
selectSeatList += "</select> </form>";
document.getElementById("selectASeat").innerHTML = selectSeatList;


//drop down of booked seats



var bookedSeatList = "<form> <select id='bookedSeats'>";
for (var i = 0; i < tickets.seatNumbersBooked.length; i++) {

    bookedSeatList += "<option value=" + tickets.seatNumbersBooked[i] + ">" + tickets.seatNumbersBooked[i] + "</option>";
}
selectSeatList += "</select> </form>";
document.getElementById("seatsBooked").innerHTML = bookedSeatList;
