/**
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */


function descendingOrder(n) {
  //  let arr = n.toString().split("")

  //  arr.sort((a,b) => {
  //    return b-a
  //  })

  //   let num = parseInt(arr.join(""))

  //   return num

  // After completing challenge, I figured I could chain all the commands together into one line
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
}
