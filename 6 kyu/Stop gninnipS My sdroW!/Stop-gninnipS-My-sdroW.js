function spinWords(string){
  let newStrArr = []
  let newStr = ""
  let stringArr = string.split(" ")
    
  stringArr.map((word) => {
    if(word.length > 4){
       let temp = word.split("").reverse().join("")
      newStrArr.push(temp)
    }
    
    else
      newStrArr.push(word)
    
  })
  
  newStr = newStrArr.join(" ")
  
  return newStr
  
}