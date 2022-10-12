//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.myScores = scores;
  }

  get scores() {
    return this.myScores
  }

  get latest() {
    let scores = this.scores;
    return scores[scores.length - 1]
  }

  get personalBest() {
    return Math.max(...this.scores)
  }

  get personalTopThree() {
    //  Order score descendingly
    let scoresInOrder = this.scores.sort((a, b) => b - a);

    // select first three scores (the top three)
    let topThree = scoresInOrder.slice(0, 3);

    return topThree;
  }
}
