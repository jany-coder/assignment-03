//1st function - km to meter
function kilometerToMeter(kilometer) {

    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;

    } else {
        console.log('Invalid input')
    }

}
var totalMeter = kilometerToMeter(5);
console.log(totalMeter);

//2nd function - budget calculator


function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {

    var watch = 50;
    var phone = 100;
    var laptop = 500;

    if (watchQuantity >= 0 && phoneQuantity >= 0 && laptopQuantity >= 0) {
        var totalCost = watch * watchQuantity + phone * phoneQuantity + laptop * laptopQuantity;
    } else {
        console.log("Inavalid Input");
    }

    return totalCost;

}

var totalBudget = budgetCalculator(1, 1, 0);
console.log(totalBudget);



//3rd function - hotel cost

function hotelCost(days) {
    var cost = 0;

    if (days >= 0) {

        if (days <= 10) {
            cost = days * 100;
        } else if (days <= 20) {

            var firstPart = 10 * 100;
            var remaining = days - 10;
            var secondPart = remaining * 80;
            cost = firstPart + secondPart;

        } else {
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = days - 20;
            var thirdPart = remaining * 50;
            cost = firstPart + secondPart + thirdPart;
        }

    } else {
        console.log("invaid Days");
    }
    return cost;
}
var total = hotelCost(22);

console.log(total);

//4rth function - find largest name

function megaFriend(array){
    var largestName = "";

    array.forEach(function(word) {
        if (word.length > largestName.length) {
            largestName = word;
        }
    });

    return largestName;
}

var word = megaFriend(["Jamal", "Ismail", "Baishakhi", "Azizul Haque", "Tonmoy"]);
console.log(word);