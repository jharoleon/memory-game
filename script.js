const gameContainer = document.getElementById("game");
let card1 = null; 
let card2 = null; 



const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let currentCard = event.target;
  if(card1 === null || card1 === currentCard){
    currentCard.style.backgroundColor = currentCard.className;
    card1 = currentCard;
    console.log(card1)
  }
    else if (card2 === null){
      currentCard.style.backgroundColor = currentCard.className;
      card2 = currentCard;
      console.log(card2)
    
        if (card1.className === card2.className){

          card1 = null;
          card2 = null;
          console.log("match")
        }
        else {
          setTimeout(() => {
          card1.style.backgroundColor = null;
          card2.style.backgroundColor = null;
          card1 = null;
          card2 = null;
          console.log("doesnt match");
          }, 1000);
          
        }
  }

  console.log(currentCard.className)

}

// when the DOM loads
createDivsForColors(shuffledColors);
