// https://github.com/oss-ps/assignment-javascript.git

// 1st Assaignment
function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter;
}
var output=kilometerToMeter(40.5);
console.log(output);

//2nd assaignment
function budgetCalculator(watch,phone,laptop){
    var watchPrice=watch*50;
    var phonePrice=phone*100;
    var laptopPrice=laptop*500;
    var totalPrice=watchPrice+phonePrice+laptopPrice;
    return totalPrice;
}
var price = budgetCalculator(10,5,2);
console.log(price);

// 3rd assaignment
function hotelCost(dayStay){
    var cost=0;
    if(dayStay<=10){
        cost=dayStay*100;
    }
    else if(dayStay<=20){
        var firstTenDays=10*100;
        var remainingDays=dayStay-10;
        var secondTenDaysCost= remainingDays*80;
        cost=firstTenDays+secondTenDaysCost;
    }
    else{
        var firstTenDays=10*100;
        var secondTenDaysCost=10*80;
        var remainingDays=dayStay-20;
        var thirdPartCost=remainingDays*50;
        cost=firstTenDays+secondTenDaysCost+thirdPartCost;
    }
    return cost;
}
var totalCost=hotelCost(21);
console.log(totalCost);

// 4th assaignmnt
function megaFriend(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
  console.log(megaFriend(['boop', 'pagol','sagol', 'hello']));