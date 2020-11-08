function calculator() {
    var results = [];
    var sum;
    var txtSum = 'Addition: ';
    var sub;
    var txtSub = 'Substraction: ';
    var mul;
    var txtMul = 'Multiplication: ';
    var div;
    var txtDiv = 'Division: ';
    if (!checkNumber(arguments)) {
      console.log('No calculation because no valid argument');
    } else if (arguments.length === 0) {
      console.log('No input');
    } else if (arguments.length === 1) {
      results.push(
        'Square root ' + arguments[0] + ' = ' + Math.sqrt(arguments[0]).toFixed(3)
      );
    } else {
      for (num in arguments) {
        if (num === '0') {
          sum = arguments[num];
          sub = arguments[num];
          mul = arguments[num];
          div = arguments[num];
        } else {
          sum += arguments[num];
          sub -= arguments[num];
          mul *= arguments[num];
          div /= arguments[num];
        }
        txtSum += arguments[num] + ' + ';
        txtSub += arguments[num] + ' - ';
        txtMul += arguments[num] + ' * ';
        txtDiv += arguments[num] + ' / ';
      }
      txtSum = txtSum.substring(0, txtSum.length - 2) + ' = ' + sum.toFixed(3);
      txtSub = txtSub.substring(0, txtSub.length - 2) + ' =' + sub.toFixed(3);
      txtMul = txtMul.substring(0, txtMul.length - 2) + ' = ' + mul.toFixed(3);
      txtDiv = txtDiv.substring(0, txtDiv.length - 2) + ' = ' + div.toFixed(3);
      results.push(txtSum);
      results.push(txtSub);
      results.push(txtMul);
      results.push(txtDiv);
    }
    console.log(results.join('\n'));
  }
  
  function checkNumber(arguments) {
    for (num in arguments) {
      if (typeof arguments[num] !== 'number' || Number.isNaN(arguments[num])) {
        console.log(arguments[num] + ' is not a number.');
        return false;
      }
    }
    return true;
  }