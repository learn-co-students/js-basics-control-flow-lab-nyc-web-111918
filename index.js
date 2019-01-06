// Write your code in this file!
function scuberGreetingForFeet(distance){
  // let result
  if (distance <= 400) {
    // result = 'This one is on me!'
    return'This one is on me!'
 } else if (distance >= 2500){
   // result = "No can do."
    return "No can do."
 }else {
   // result = 'I will gladly take your thirty bucks.'
   return 'I will gladly take your thirty bucks.'
 }
 // return result
}

function ternaryCheckCity(city){
  if (city === "NYC"){
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(statement){
  if (statement === 'generous'){
    return 'Thank you so much.'
  } else if (statement === 'not as generous'){
    return "Thank you."
  }else {
    return "Bye."
  }
}
