// For Loops

var i;

for (i=0; i <= 9; i++) {
    document.write(i); 
}





var firstValue = 10;
var secondValue = 20;
var thirdValue = 30;
var fourthValue = 33;
var fifthValue= 71; 
var valueNumber = 0;  
var valuesToPrint = [firstValue, secondValue, thirdValue, fourthValue, fifthValue];
var arrayLength = valuesToPrint.length; 
var i;
var message = ' ';

for (i = 0; i < arrayLength; i++) {
    valueNumber = (i + 1);
    message += 'Here is value ' + valueNumber + ' : ' + valuesToPrint[i] + ',\n\n'; 
}

var el = document.getElementById('firstId');
el.textContent = message; 



// While Loops (don't know how many times code should run)
 
var i = 1;    
var messageTwo = ' ';    

while (i < 10) {
    messageTwo += i;
    i++; 
}

document.getElementById('secondId').textContent = messageTwo; 