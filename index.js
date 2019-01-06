function scuberGreetingForFeet(feet) {

  let result

  if (feet < 400) {
    result = "This one is on me!"
  } else if (feet > 2500) {
      result = "No can do."
  } else if (feet > 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
  return result
}

function ternaryCheckCity(city) {

  let string
  city == "NYC" ? (string = "Ok, sounds good.") : (string = "No go.")
  return string
}

function switchOnCharmFromTip(tip) {

  let response

  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }

  return response
}
