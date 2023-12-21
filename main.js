function firstLetterCapitalizer(word) {

  let arr = word.split('')

  arr.splice(0, 1, word.charAt(0).toUpperCase())

  return arr.join('')
  
}

console.log(firstLetterCapitalizer('chris'))
