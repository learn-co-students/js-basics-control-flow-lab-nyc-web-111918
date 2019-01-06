function scuberGreetingForFeet(someValue){

  let result;
  if (someValue <= 400){
    return result = 'This one is on me!';
  }
  else if (someValue > 2000 && someValue <2500){
    return result = 'I will gladly take your thirty bucks.';
  }
  else if (someValue >2500){
    return result = 'No can do.';
  }
}

function ternaryCheckCity(city){
  let result;
  return result = city==="NYC"? 'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(tip){
  let result;
  switch(tip){
    case 'generous':
      return result = 'Thank you so much.';
      break;
    case 'not as generous':
      return result = 'Thank you.';
      break;
    default:
      return result = 'Bye.';
      break;
  }
}
