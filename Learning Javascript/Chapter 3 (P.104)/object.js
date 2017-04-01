var hotel = {
    name: 'Lice Heaven',
    rooms: 100,
    booked: 13,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};

hotel.name = 'Lice Heaven (Renamed)';

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name; 

var elRooms = document.getElementById('roomsAvailable');
elRooms.textContent = hotel.checkAvailability();