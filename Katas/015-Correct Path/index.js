function Correctpath(str) {
  var l = 0;
  var r = 0;
  var u = 0;
  var d = 0;
  var random = "";
  var begin = [0, 0];
  var missing = [];
  str.split('').map(function (e) {
    switch (e) {
      case 'l':
        l = l + 1;
        break;
      case 'r':
        r = r + 1;
        break;
      case 'u':
        u = u + 1;
        break;
      case 'd':
        d = d + 1;
        break;
      default:
        random += "?";
        break;
    }
  });
  begin[0] += r - l;
  begin[1] += d - u;
  for (i = 0; i < random.length; i++) {
    if (begin[0] < 4) {
      missing.push('r')
      begin[0] += 1
    } else if (begin[1] < 4) {
      missing.push('d')
      begin[1] += 1
    } else if (begin[0] > 4) {
      missing.push('l');
      begin[0] -= 1;
    } else {
      missing.push('u')
      begin[1] -= 1;
    }
  }
  console.log(missing)
}
Correctpath("drdr??rrddd?");