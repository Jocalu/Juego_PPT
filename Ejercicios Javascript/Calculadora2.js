
var outputResults = [];

function toFixedDecimals(result){
    if(Number.isInteger(result)){
        return result.toFixed();
    }else{
        return result.toFixed(3);
    }
}

function calculator(a, b){  

    if((typeof a === 'number' && typeof b === 'number') || (typeof a === 'number' && b === undefined)){
        
        if(b === undefined){
            var resultSqrt = Math.sqrt(a);
            console.log(`${a}½ = ${toFixedDecimals(resultSqrt)}`.toString());
        }else{
            var results = [];
            var resultSum = a + b;            
            var resultRest = a - b;
            var resultMult = a * b;
            var resultDiv = a / b;

            results.push(resultSum);
            results.push(resultRest);
            results.push(resultMult);
            results.push(resultDiv);

            for(var i = 0; i < results.length; i++){
                switch(i){
                    case 0:
                        outputResults.push(`${a} + ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                    case 1:
                        outputResults.push(`${a} - ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                    case 2:
                        outputResults.push(`${a} × ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                    case 3:
                        outputResults.push(`${a} ÷ ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                }
            }
        }

        for(var i = 0; i < outputResults.length; i++){
            console.log(outputResults[i]);
        }

    }else{
        console.log('No te entiendo. Introduce valores numéricos');
    }
}
