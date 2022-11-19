const sumAll = function(n1, n2) {
    let acumulador = 0
    if (n1 < 0 || n2 < 0) {return 'ERROR'} //Googlear return when non a number parameter
    else {
        if (n2 > n1){
            while (n1 <= n2){
                acumulador = acumulador + n1
                n1++
                }
        } else if (n1 > n2){
            while (n2 <= n1){
            acumulador = acumulador + n2
                n2++
            }
        }
    }
    return acumulador;
};


//console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
