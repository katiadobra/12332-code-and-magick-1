'use strict';

function getMessage(a, b) {

  if (typeof(a) === 'boolean') {

    if (a === true) {
      return "Я попал в " + b;
    }
    return "Я никуда не попал";
  }

  if (typeof(a) === 'number') {
    return 'Я прыгнул на ' + (a * 100) + ' сантиметров';
  }

  if (Array.isArray(a)) {

    if (Array.isArray(b)) {
      var length = 0;
      for (var i = 0; i < b.length; i++) {
        length += a[i] * b[i];
      }
      return 'Я прошёл ' + length + ' метров';
    }

    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return 'Я прошёл ' + sum + ' шагов';
  }

  return 'Ничего не произошло.';

}
