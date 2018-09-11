function balance($strarr) {
  $scale = eval("return " . $strarr[0] . ";");
  $weights = eval("return " . $strarr[1] . ";");
  $diff = abs($scale[0] - $scale[1]);

    for ($i=0; $i<=count($weights)-1; $i++) {
      if ($diff == $weights[$i]) {
        return "$diff";
      }
      for ($j=1; $j<=count($weights)-1; $j++) {
        if ($diff == $weights[$i]+$weights[$j] && $i != $j) {
          return "$weights[$i], $weights[$j]";
        }
        if ( $diff == abs($weights[$i] - $weights[$j]) && $i != $j) {
          return "$weights[$i], $weights[$j]";
        }
      }
    }

    return "not possible";
}

echo balance(["[18, 4]","[3, 4, 7]"]);

