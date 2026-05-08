console.log("hello chat");

let score = 1;
let Ben = "jason";

let players = {
  ben:{
    score:100,
    wins:3
  },
  jason:{
    score:3,
    wins:4
  },
    jack:{
    score:2,
    wins:3
  }
}
console.log()
console.log(players['jason']['wins'])
//console.log(players['jason']['score']['wins'])
console.log("hello  Ben" +" you have "+ players['ben']['wins'])
console.log("hello jack" +" you have "+ players['jack']['wins'])
console.log("hello jason" +" you have "+ players['jason']['wins'])