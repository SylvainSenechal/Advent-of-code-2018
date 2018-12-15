let state = "##.###.......#..#.##..#####...#...#######....##.##.##.##..#.#.##########...##.##..##.##...####..####"

// Regex :
// (([# | .])*) (=>) ([# | .])
// "$1" : "$4",

let input =
{
"#.#.#" : "#",
".##.." : ".",
"#.#.." : ".",
"..###" : "#",
".#..#" : "#",
"..#.." : ".",
"####." : "#",
"###.." : "#",
"#...." : ".",
".#.#." : "#",
"....#" : ".",
"#...#" : "#",
"..#.#" : "#",
"#..#." : "#",
".#..." : "#",
"##..#" : ".",
"##..." : ".",
"#..##" : ".",
".#.##" : "#",
".##.#" : ".",
"#.##." : "#",
".####" : ".",
".###." : ".",
"..##." : ".",
"##.#." : ".",
"...##" : "#",
"...#." : ".",
"....." : ".",
"##.##" : ".",
"###.#" : "#",
"#####" : "#",
"#.###" : ".",
}


const sumPot = (state, generation) => {
  let sum = 0
  state.split('').forEach( (letter, index) => {
    if (letter === "#") {
      sum += -generation*2 + index
    }
  })
  return sum
}


// const part1 = () => {
//   let generation = 20
//   for(let i = 0; i < generation; i++){
//     let stateTemp = ""
//     state = ".." + state
//     state += ".."
//     state.split('').forEach( (letter, index, state) => {
//       let around = (state[index-2] || ".") + (state[index-1] || ".") + letter + (state[index+1] || ".") + (state[index+2] || ".")
//       stateTemp += input[around]
//     })
//     state = stateTemp
//   }
//   return sumPot(state, generation)
// }
// console.log(part1())

// Part 2 :

let lastSum = 0
let diffSum = 0
let lastDiffSum = 0

let redondant = 0
let generation = 1000

for(let i = 0; i < generation; i++){
  let stateTemp = ""
  state = ".." + state
  state += ".."
  state.split('').forEach( (letter, index, state) => {
    let around = (state[index-2] || ".") + (state[index-1] || ".") + letter + (state[index+1] || ".") + (state[index+2] || ".")
    stateTemp += input[around]
  })
  // console.log(stateTemp)
  // console.log(stateTemp.length)
  state = stateTemp

  lastDiffSum = diffSum
  diffSum = sumPot(state, i+1) - lastSum
  lastSum = sumPot(state, i+1)
  console.log("diff ", diffSum, "curr ", lastSum)
  if(lastDiffSum === diffSum) {
    redondant = i+1
    break;
  }
}
console.log(lastSum)
console.log( (50000000000-redondant)*23 + lastSum)
// Result : 1150000000457
