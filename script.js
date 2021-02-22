var wrapper = document.querySelector(".wrapper");
var resultEle = document.querySelector(".result");
var submitEle = document.querySelector(".submit");

function addNumbers(){
  var number1 = Number(prompt("How many miles on average per year do you drive?"));
  var number2 = Number(prompt("What is the current cost of a gallon of gasoline in your area? (use a decimal)"));
  var number3 = 12;
  var number4 = 17;
  var number5 = 26;
  var number6 = 29;
  
  resultEle.innerHTML = addition_1(number1,number2,number3,number4,number5,number6);
  
}

function addition_1(nm1,nm2,nm3,nm4,nm5,nm6,total_1a,total_1b,total_2a,total_2b,total_3a,total_3b,total_4a,total_4b){

  var total_1a = nm1/nm3;
  var total_1b = total_1a * nm2;
  
  var total_2a = nm1/nm4;
  var total_2b = total_2a * nm2;
  
  var total_3a = nm1/nm5;
  var total_3b = total_3a * nm2;
  
  var total_4a = nm1/nm6;
  var total_4b = total_4a * nm2;
  
  return "To drive a car with a MPG rating of " + nm3 +  " for " + nm1 + " miles at $" + nm2 + "  per gallon it would cost $" + total_1b +  ". To drive a car with a MPG rating of " + nm4 +  " for " + nm1 + " miles at $" + nm2 + "  per gallon it would cost $" + total_2b + ". To drive a car with a MPG rating of " + nm5 +  " for " + nm1 + " miles at $" + nm2 + "  per gallon it would cost $" + total_3b + ". To drive a car with a MPG rating of " + nm6 +  " for " + nm1 + " miles at $" + nm2 + "  per gallon it would cost $" + total_4b + ".";
  
}

addNumbers();

submitEle.addEventListener("click", function(){
  addNumbers();          
})