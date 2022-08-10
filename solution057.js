// Round up to the next multiple of 5
    // input:    output:
    // 0    ->   0
    // 2    ->   5
    // 3    ->   5
    // 12   ->   15
    // 21   ->   25
    // 30   ->   30
    // -2   ->   0
    // -5   ->   -5
    // etc.

 function roundToNext5(n){
    return Math.ceil(n/5)*5;
    }