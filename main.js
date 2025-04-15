function numericalmonth() {
	var mon = document.getElementById('monthnum').value;

	switch (parseInt(mon)) {
		case 1:
			document.getElementById('result').innerHTML = "January";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 2:
			document.getElementById('result').innerHTML = "February";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 3:
			document.getElementById('result').innerHTML = "March";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 4:
			document.getElementById('result').innerHTML = "April";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 5:
			document.getElementById('result').innerHTML = "May";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 6:
			document.getElementById('result').innerHTML = "June";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 7:
			document.getElementById('result').innerHTML = "July";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 8:
			document.getElementById('result').innerHTML = "August";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 9:
			document.getElementById('result').innerHTML = "September";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 10:
			document.getElementById('result').innerHTML = "October";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 11:
			document.getElementById('result').innerHTML = "November";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		case 12:
			document.getElementById('result').innerHTML = "December";
			document.getElementById('change').innerHTML = "The month corresponding to the number is . . .";
			break;
		default:
			document.getElementById('result').innerHTML = "Invalid value";
	}
}

function determineseason(){
	var mon = document.getElementById('monthnum').value;

	switch (parseInt(mon)){
		case 12:
		case 1:
		case 2:
			document.getElementById('result').innerHTML = "Winter";
			document.getElementById('change').innerHTML = "The season corresponding to the number is . . .";
			break;

		case 3:
		case 4:
		case 5:
			document.getElementById('result').innerHTML = "Spring";
			document.getElementById('change').innerHTML = "The season corresponding to the number is . . .";
			break;

		case 6:
		case 7:
		case 8:
			document.getElementById('result').innerHTML = "Summer";
			document.getElementById('change').innerHTML = "The season corresponding to the number is . . .";
			break;

		case 9:
		case 10:
		case 11:
			document.getElementById('result').innerHTML = "Autumn";
			document.getElementById('change').innerHTML = "The season corresponding to the number is . . .";
			break;

		default:
			document.getElementById('result').innerHTML = "Invalid value";
			document.getElementById('change').innerHTML = "The season corresponding to the number is . . .";
	}
}