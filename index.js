// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue <= 400) {
    greeting = 'This one is on me!'
  } else if (someValue > 2500) {
    greeting = 'No can do.'
  } else if (someValue > 2000) {
    greeting = 'I will gladly take your thirty bucks.'
  }
  return greeting
}

function ternaryCheckCity(someCity) {
  let cityCheck
  someCity === 'NYC' ? cityCheck = 'Ok, sounds good.' : cityCheck = 'No go.'
  return cityCheck
}

function switchOnCharmFromTip(tip) {
  let charm
  switch (tip) {
    case 'generous':
      return charm = 'Thank you so much.'
    case 'not as generous':
      return charm = 'Thank you.'
      break
    default:
      return charm = 'Bye.';
  }
}
