const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let tutorialsNew = []
const titleCased = () => {
  let tutorialsHold = tutorials.map((sentance)=>sentance.split(' '))
  tutorialsHold.forEach((sentance)=>{
    let holdSentance = ""
    let holdWord = undefined
    sentance.forEach((word)=>{
      holdWord = (word.substring(0,1).toUpperCase())+(word.substring(1,word.length))
      holdSentance = holdSentance + " " + holdWord
    })
    tutorialsNew.push(holdSentance.substring(1,holdSentance.length))
  })
  return tutorialsNew
}