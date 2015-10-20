
$(document).ready(function() {

 $("#button-submit").click(function(){
 	

 	// Variables
 	var user_choice = document.getElementById('user_number');
 	var user_choice_val = user_choice.value;

 	function FzBzFunction(user_choice){

	for (i = 1; i < user_choice; i++) {
		if ((i % 3 == 0 && i % 5 == 0)) {
			document.write("FizzBuzz");
			document.write("<br>");
		}
		else if (i % 3 == 0) {
			document.write("Fizz");
			document.write("<br>");
		}
		else if (i % 5 == 0) {
			document.write("Buzz");
			document.write("<br>");
		}
		else {
			document.write(i);
			document.write("<br>");
		}
	}
}

 });
});

// convert string to number

// validate that number is a int not a float 







