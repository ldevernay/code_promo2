<?php
	//Find the difference between the sum of the squares and the square of the sums of the first N natural numbers.

//The square of the sum of the first ten natural numbers is:

//(1 + 2 + ... + 10)^2 = 55^2 = 3025

//The sum of the squares of the first ten natural numbers is:

//1^2 + 2^2 + ... + 10^2 = 385

//Hence the difference between the square of the sum of the first ten natural numbers and the sum of the squares is 2640:

//3025 - 385 = 2640
?>

<?php
	function a($n){
		$r = 0;
		$s = 0;
	for($i=1;$i<=$n;$i++){
		$r+=$i*$i;
	}
	for($i=1; $i<=$n; $i++) {
		$s += $i;
	}
		$s = pow($s, 2);
		echo $s - $r;
	}
	a(10);
?>







