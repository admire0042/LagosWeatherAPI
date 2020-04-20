const txtResult = document.getElementById('txtResult');
const txtNum1 = document.getElementById('txtNum1');
const txtNum2 = document.getElementById('txtNum2');

const btns = document.querySelectorAll('input[type="button"]');

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', calculate);
}



const calculator = (function() {
	function add(num1, num2) {
		return num1 + num2;
	}

	function sub(num1, num2) {
		return num1 - num2;
	}
	function multiply(num1, num2) {
		return num1 * num2;
	}
	function divide(num1, num2) {
		return num1 / num2;
	}

	function modulus(num1, num2) {
		return num1 % num2;
	}

	function run(operator, num1, num2) {
		if (operator === "+") {
			return add(num1, num2);
		} else if (operator === "-") {
			return sub(num1, num2);
		} else if (operator === "*") {
			return multiply(num1, num2);
		} else if (operator === "/") {
			if (num2 === 0) {
				return "Can't divide a number by zero";
			}
			return divide(num1, num2);
		} else if (operator === "%") {
			if (num2 === 0) {
				return "Invalid value";
			}
			return modulus(num1, num2);
		} else {
			return "Invalid operation!";
		}
	}

	return{run}
})();



function calculate(e) {
	let num1 = parseInt(txtNum1.value);
	let num2 = parseInt(txtNum2.value);

	let operator = e.target.value;

	txtResult.value = calculator.run(operator, num1, num2);
}


