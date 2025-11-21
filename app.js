// Miles = Kilometers / 1.60934;

function kilometersToMiles() {
	const kilometers = document.getElementById("kilometers").value;
	const miles = kilometers / 1.60934;

	document.getElementById(
		"result"
	).textContent = `${kilometers} kilometers = ${miles.toFixed(2)} miles`;

	console.log(
		`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`
	);
}
