
window.addEventListener("load",()=>{

let coin = document.getElementById("coin");
let button = document.getElementById("button");
let heads = 0;
let tails = 0;
let url = "Interjections2.json";
let word = document.getElementById("word");
let sound = new Audio("Assets/AudioInterjections/02Coin.mp3");

/* On click of button spin coin ainamtion */
function coinToss() {
  console.log("coinTossing");
  sound.play();

  /* Random number 0 or 1  */
  let x = Math.floor(Math.random() * 2);
  let randomword = Math.floor(Math.random() * 217);
  /* If statement */
  if (x === 0) {
    coin.innerHTML = '<img class="heads animate-coin" src="./Assets/quarterfront.png"/>'; 
    heads += 1;
   
  } else {
    coin.innerHTML = '<img class="tails animate-coin" src="./Assets/quarterback.png"/>';
     tails += 1;
  }
  fetch(url)
 .then(response => response.json())
.then(data =>{
  console.log(data.interjections[randomword]); 
  
  let interjectionSound = new Audio("Assets/AudioInterjections/"+data.interjections[randomword]+".mp3");
  // interjectionSound.play();
  setTimeout(()=>{
    interjectionSound.play();
    word.innerHTML = data.interjections[randomword];
},2500);

});
}
button.onclick = function() {
  coinToss();
};


})

// //   console.log("Page loaded");

// let button = document.getElementById("button");
// let result =  document.getElementById("result");

// button.addEventListener("click",()=>{

// //       let url = ;
// //       fetch(url)
// //       .then(response => response.json())
// //       .then(data =>{
// //       
// //           result.innerHTML = interjections;
// //       });
// //   });


// //   })
