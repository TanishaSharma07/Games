let choices = document.querySelectorAll(".choice");
let compScore = 0;
let userScore = 0;
const msg = document.querySelector(".msg");
let compCount = document.querySelector("#comp-count");
let userCount = document.querySelector("#user-count");
let userImg = document.querySelector("#userImg");
let compImg = document.querySelector("#compImg");
const randomChoice = () => {
  const choiceArr = ["rock", "paper", "scissor"];
  const options = choiceArr[Math.floor(Math.random() * 3)];
  compImg.src = `${options}.png`;
  return options;
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin === true) {
    userScore++;
    userCount.innerText = userScore;
    msg.innerText = `You won 😎 your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compCount.innerText = compScore;
    msg.innerText = `You lose 😕 computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = randomChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "rock" ? true : false;
    } else {
      // scissor
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

const drawGame = () => {
  console.log("its a Draw");
  msg.innerText = "its a Draw";
  msg.style.backgroundColor = " rgb(3, 3, 40)";
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    userImg.src = `${userChoice}.png`;

    playGame(userChoice);
  });
});
// to add click event on each img ,have to loop on node list
