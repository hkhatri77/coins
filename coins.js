function coins(amt) {
    var coins = function(amt) {
        var change = [],
        [25, 10, 5, 1].forEach(function(coins) {
            while (total + coins <= amt) {
                change.push(coins);
                total += coins;
            }
        });
        return change;
    };
}

var result = coins(11)
    // --> 10, 1
console.assert(result instanceof Array)
console.assert(result[0] === 10 && result[1] === 1)
result = coins(39)
    // --> 25, 10, 1, 1, 1, 1
console.assert(result[0] === 25 && result[1] === 10 && result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1)
