var singleCost; 
var howMany;
var totalCost; 

singleCost = 12;
howMany = 9;
totalCost = singleCost * howMany;

var el = document.getElementById('cost');
el .textContent = '$' + totalCost; 