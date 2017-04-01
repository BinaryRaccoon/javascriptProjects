//LITERAL NOTATION


//Create the Object and then add the Prperties and Methods 
var hotel = {}

hotel.name = 'Lice';
hotel.rooms = 100;
hotel.booked = 50;
hotel.checkAvailability = function() {
    return this.rooms - this.booked; 
};

//Create the Object with Properties and Methods

var hotel = {
    name: 'Lice',
    rooms: 100, 
    booked: 50,
    checkAvailability: function() {
        return this.rooms - this.booked; 
    }
};


//OBJECT CONSTRUCTOR NOTATION


//Create the Object and then add the Prperties and Methods 

var hotel = newObject();

hotel.name = 'Lice';
hotel.rooms = 100; 
hotel.booked = 50; 
hotel.checkAvailability = function() {
    return this.rooms - this.booked; 
};

//Create the Object with Properties and Methods

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked; 
    this.checkAvailability = function () {
        return this.rooms - this.booked; 
    };
}

var liceHotel = new Hotel('Lice', 100, 50);
var kaileyHotel = new Hotel('Kailey', 150, 100); 