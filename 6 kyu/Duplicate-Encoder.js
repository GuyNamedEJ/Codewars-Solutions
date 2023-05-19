/**
 * 
 * 
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
 */

function duplicateEncode(word){ 
  let encoded = ""
  
  word.split("").map((item) => {
    let arr = word.toLowerCase().split(item.toLowerCase())
    let numOccurence = arr.length-1
    let char = numOccurence > 1 ? ")" : "("    
    encoded += char
  })
  
  return encoded
}
