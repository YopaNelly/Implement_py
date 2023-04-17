<!DOCTYPE html>
<html>
<head>
	<title>Permutations Calculator</title>
</head>
<body>
	<h1>Permutations Calculator</h1>
	<p>Enter a set of numbers separated by commas:</p>
	<input type="text" id="input">
	<button onclick="calculate()">Calculate</button>
	<p id="output"></p>

	<script>
		function calculate() {
			// Get the input value and split it into an array
			let input = document.getElementById("input").value;
			let numbers = input.split(",");

			// Calculate all permutations using a recursive function
			let permutations = permute(numbers);

			// Display the permutations on the page
			let output = document.getElementById("output");
			output.innerHTML = "Permutations: " + permutations.join(", ");
		}

		function permute(numbers) {
// Base case: if there's only one number, return it as a single-element array
if (numbers.length == 1) {
				return [numbers];
			}

			// Recursive case: for each number in the array, calculate all permutations of the remaining numbers
			let result = [];
			for (let i = 0; i < numbers.length; i++) {
				let remaining = numbers.slice(0, i).concat(numbers.slice(i + 1));
				let permutations = permute(remaining);
				for (let j = 0; j < permutations.length; j++) {
					result.push([numbers[i]].concat(permutations[j]));
				}
			}
			return result;
		}
	</script>
</body>
</html>

