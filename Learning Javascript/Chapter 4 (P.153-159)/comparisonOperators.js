var largerNumber = 100; 
var supposedlySmallerNumber = 101;
var comparison = largerNumber > supposedlySmallerNumber; 

var el = document.getElementById('comparisonOperatorOne');
el.textContent = comparison; 





var largeNumber = 100;
var equalNumber = 100;
var comparison = largeNumber >= equalNumber; 

var el = document.getElementById('comparisonOperatorTwo');
el.textContent = comparison; 





var stringOne = 'Hello';
var stringTwo = 'Hi';
var comparison = stringOne !== stringTwo; 

var el = document.getElementById('comparisonOperatorThree');
el.textContent = comparison; 





var number = 3; 
var string = '3';
var comparison = number == string; 
 
var el = document.getElementById('comparisonOperatorFour');
el.textContent = comparison; 





var number = 3; 
var string = '3';
var comparison = number === string; 
 
var el = document.getElementById('comparisonOperatorFive');
el.textContent = comparison; 





var firstNumber = 1;
var secondNumber = 5; 
var thirdNumber = 17;
var fourthNumber = 10;
var comparisonOne = (firstNumber <= secondNumber) && (thirdNumber >= fourthNumber); 
var comparisonTwo = (firstNumber <= secondNumber) || (thirdNumber <= fourthNumber); 
var comparisonThree = !(thirdNumber <= firstNumber); 

var el = document.getElementById('comparisonOperatorSix');
el.textContent = comparisonOne; 

var el = document.getElementById('comparisonOperatorSeven'); 
el.textContent = comparisonTwo; 

var el = document.getElementById('comparisonOperatorEight');
el.textContent = comparisonThree; 