function electricalForce(chargeOne, chargeTwo, radius, theta) {
    var top = (9 * 1000000000) * chargeOne * chargeTwo;
    var bottom = (radius) * (radius);
    var force = top / bottom;
    var xVariable = Math.cos(theta) ; 
    var yVariable = Math.sin(theta) ;
    var polar = '(' + xVariable + ', ' + yVariable +')';
    return polar; 
}

var particleOne = electricalForce(.001, .001, 2, 0);
var particleTwo = electricalForce(.001, .001, Math.sqrt(5), 63);

var el = document.getElementById('answer');
el .textContent = particleOne; 

var el = document.getElementById('answerTwo');
el. textContent = particleTwo; 