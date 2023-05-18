// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


function points(games) {
  // set a variable to hold our points
  let points = 0;
  
  // for each score in the array, I need to split them at the :
  // Home Score will be the first score, the away score is the second element. This way works for scores greater 1 digit should it change in the future
  games.map((score) => {
    let scores = score.split(":")
    let teamScore = parseInt(scores[0])
    let awayScore = parseInt(scores[1])
    
    // if team wins, +3 points
    if(teamScore > awayScore)
      points += 3
    
    // if we tie, +1 point
    else if(teamScore === awayScore)
      points += 1
  
  })
  
  return points;
  
}