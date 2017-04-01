//Create a function that can be used for all hotels.
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
} 

//Add as many hotels as needed. 
var liceHotel = new Hotel('Lice', 100, 13);
var kaileyHotel = new Hotel('Kailey', 300, 288);
var kristaHotel = new Hotel('Krista', 250, 210);

//Now, display them on the web page. 
var details1 = liceHotel .name + ' Rooms: ';
    details1 += liceHotel .checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1; 

var details2 = kaileyHotel .name + ' Rooms: ';
    details2 += kaileyHotel .checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2; 

var details3 = kristaHotel .name + ' Rooms: ';
    details3 += kristaHotel .checkAvailability();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3; 