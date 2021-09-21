function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  if(someValue <= 400){
    return "This one is on me!";
  } else if(someValue > 2000){
    if(someValue >= 2500){
return 'No can do.';
    }
    return 'I will gladly take your thirty bucks.';
  }
  }
  //don't forget to return whatever the result is!

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return"Thank you so much."
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return 'Bye.';
    }
  }
  