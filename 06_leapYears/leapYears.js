const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 && year % 100 == 0) 
        {return true}
    else
        {return false}
};

years = 1600
console.log(leapYears(years))
console.log(years % 4 == 0)
console.log(years % 400 == 0)
console.log(years % 100 != 0)

// Do not edit below this line
module.exports = leapYears;
