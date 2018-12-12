let input = 1718

const powerLevel = (x, y) =>  Math.floor((((x+10)*y + input) * (x+10)/100)).toString().slice(-1) - 5
let grid = []
for(let i = 0; i < 300; i++){
  grid[i] = []
  for(let j = 0; j < 300; j++){
    grid[i][j] = powerLevel(i+1, j+1)
  }
}
const powerSquare = squareSize => {
  let maxPower = 0
  let maxX = 1
  let maxY = 1
  for (let x = 1; x < 301-squareSize; x++){
    for (let y = 1; y < 301-squareSize; y++){
      let power = 0
      for(let i = 0; i < squareSize; i++){
        for(let j = 0; j < squareSize; j++){
          power += grid[x+i-1][y+j-1] // powerLevel(x+i, y+j)
        }
      }
      if(power > maxPower){
        maxPower = power
        maxX = x
        maxY = y
      }
    }
  }

  return {maxX, maxY, maxPower}
}

let max3 = powerSquare(3)
console.log(max3.maxX)
console.log(max3.maxY)


let maxXn = 0
let maxYn = 0
let maxSize = 1
let maxPower = 0
for(let i = 1; i < 300; i++){
  let max = powerSquare(i)
  console.log(i)
  if(max.maxPower > maxPower){
    maxPower = max.maxPower
    maxXn = max.maxX
    maxYn = max.maxY
    maxSize = i
  }
}
console.log(maxXn)
console.log(maxYn)
console.log(maxSize)
