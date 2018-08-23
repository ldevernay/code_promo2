<?php
$chaine = "102012";

function toDecimal($str) {

    $pattern = '/^[0-2]*$/';

    if (!preg_match($pattern,$str)){

        return 0;
    }
    $res = 0;
    $n = array_reverse(str_split($str));
    foreach($n as $key=>$value) {
        $res+=$value*pow(3,$key);
    }
    return $res;
}
echo toDecimal($chaine);
?>