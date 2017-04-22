function chainRule(constant, power) {
    var newConstant = constant * power;
    var newPower = power - 1; 
    var answer = newConstant + 'x^' + newPower; 
    return answer; 
}

var equation = chainRule(2, 2)

var el = document.getElementById('answer');
el .textContent = equation;