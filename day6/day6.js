
const fs = require('fs');
// let regex = /[0-9]*/
// console.log(RegExp(/[0-9]*/).exec(data))


let data = fs.readFileSync('inputs', 'utf8')

data = data.split('\n').map(val => {
    let [x, y] = val.split(', ');
    return {x: +x, y: +y};
});
data = [
  {x: 1,y: 1},
  {x: 1,y: 6},
  {x: 8,y: 3},
  {x: 3,y: 4},
  {x: 5,y: 5},
  {x: 8,y: 9}
]
let maxX = 0
let maxY = 0
Object.keys(data).forEach( line => {
  maxX = Math.max(maxX, data[line].x)
  maxY = Math.max(maxY, data[line].y)
})

let sizeGrid = Math.max(maxX, maxY)

let grid = []
for( let i = 0; i < sizeGrid+1; i++){
  grid[i] = []
  for( let j = 0; j < sizeGrid+1; j++){
    grid[i][j] = 0
  }
}
let id = 1
Object.keys(data).forEach( line => {
  grid[data[line].y][data[line].x] = id
  id++
})

console.log(grid)
console.log('///////////////////////////////////')

for(let i = 0; i < 5; i++){
grid = grid.map( (line, x, currentGrid) => {
  return line.map( (value, y) => {
    if( value != 0){
      return value
    }
    else if( x > 0 && x < sizeGrid && y > 0 && y < sizeGrid){
      try{
        console.log(maxY)
        if(currentGrid[x-1][y] === 0 && currentGrid[x+1][y] === 0 && currentGrid[x][y+1] === 0) return currentGrid[x][y-1]
        if(currentGrid[x-1][y] === 0 && currentGrid[x+1][y] === 0 && currentGrid[x][y-1] === 0) return currentGrid[x][y+1]
        if(currentGrid[x+1][y] === 0 && currentGrid[x][y-1] === 0 && currentGrid[x][y+1] === 0) return currentGrid[x-1][y]
        if(currentGrid[x-1][y] === 0 && currentGrid[x][y-1] === 0 && currentGrid[x][y+1] === 0) return currentGrid[x+1][y]
        else return value
      }
      catch(err){
        return value
      }
    }
    else return value
  })
})
}
console.log(grid)

// grid.forEach( (line, x) => {
//   line.forEach( (value, y) => {
//     if(value != 0){
//       try{
//         if(gridResult[x-2][y] === 0) gridResult[x-1][y] = value
//       }
//       catch(err){
//         console.error(err)
//       }
//       try{
//         if(gridResult[x+2][y] === 0) gridResult[x+1][y] = value
//       }
//       catch(err){
//         console.error(err)
//       }
//       try{
//         if(gridResult[x][y-2] === 0) gridResult[x][y-1] = value
//       }
//       catch(err){
//         console.error(err)
//       }
//       try{
//         if(gridResult[x][y+2] === 0) gridResult[x][y+1] = value
//       }
//       catch(err){
//         console.error(err)
//       }
//     }
//   })
// })
// console.log(gridResult)



// grid.forEach( (line, x) => {
//   line.forEach( (value, y) => {
//     gridResult[x][y] = dst(x, y)
//   })
// })
//
// function dst(x, y){
//   let shortestDst = 10000
//   Object.keys(data).forEach( points => {
//     let dst = Math.abs(x - data[points].x) + Math.abs(y - data[points].y)
//     shortestDst = Math.min(shortestDst, dst)
//   })
//   return shortestDst
// }
// console.log(gridResult)
