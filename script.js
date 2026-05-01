/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'hello world'
    }
  )
}
function simpleRead() {
  console.log("reading message()")
  firebase.database().ref('/').child('message').once('value', displayRead,);
  console.log("leaving simpleRead");

}

function displayRead(snapshot) {
  console.log("running displayRead(), the message is : " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}

function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log('there was no record when trying to read the message');
  }
  else {
    console.log("the message is " + dbData);
  }
}

function fb_readError(error) {
  console.log("there was an error reading the message");
  console.error(error);
}

function messagecheck() {
  console.log("reading message()")
  firebase.database().ref('/').child('message').once('value', displayRead, fb_readError);
  console.log("leaving simpleRead")
}

function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', fb_logDatabaseRead)
}
function fb_logDatabaseRead(snapshot) {
  console.log("running logDatabaseRead(), the message is : " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
  //firebase.database().ref('/message').on('value', displayRead)
}

function xiao() {
  console.log("Running xiao()")
  firebase.database().ref('user/xiao').set(
    {
      age: 99,
      height: 5.11,
    }
  )
}

firebase.database().ref('/').set(
  {
    game1: {
      scores: {
        dhruv: 99999,
        jack: 10000,
        toby: 9,
        yug: 987654321,
      }
    }
  }
);


highscoreTable = {
  game1: {
    scores: {
      Dhruv: 99999,
      Jack: 10000,
      Micheal: "3.141",
      Toby: 9,
      Yug: 987654321,
    }
  },
  game2: {
    scores: {
      Dhruv: 13,
      Jack: 14,
      Mikeala: 7,
      Sasha: 3,
      Yug: 12,
    }
  }
}


firebase.database().ref('/').set(highscoreTable)
firebase.database().ref('/game1/scores/jenna/').set(123456789);
firebase.database().ref('/game1/scores/Benson/').set(6789);
firebase.database().ref('/game1/scores/Ben/').set(1234);

let scores = "toby";
let score = "9";
firebase.database().ref('/game1/users/' + user).set(
  score
);

//function fb_readHighScores() {
 // console.log("Reading High Scores")
 // firebase.database().ref('/game1/users').once('value', fb_logDatabaseRead, fb_readError)
 // console.log("leaving High Scores")
//}

function Readscores(){
console.log("Read scores")
firebase.database().ref('/game1/scores').once('value', )
}

function displayScores(snapshot){
console.log(snapshot.val)

}