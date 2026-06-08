// winning patterns:- 012,345,678,036,147,258,246,048
let turnO = true;
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let winMsg = document.querySelector(".winmsg");
let msgContainer = document.querySelector(".msgContainer");
let winPatterns = [
  [3, 4, 5],
  [0, 1, 2],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
let boxDisable = () => {
  boxes.forEach((box) => {
    box.style.pointerEvents = "none";
  });
};
newGameBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.pointerEvents = "auto";
    box.innerText = "";
    msgContainer.classList.add("hide");
  });
});
const showWinner = (winner) => {
  winMsg.innerText = `Congratulations winner is ${winner}`;
  msgContainer.classList.remove("hide");
  boxDisable(); //rather than looping upon divs to disable clicking , made a seprate function
};
const findWinner = () => {
  winPatterns.forEach((pattern) => {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    // pattern checks 1 subarray at a time and pattern[0] means firstly on 0th idx of 1st subarray once it is checked then move on 0th idx of second subarray and so on.similiary with pattern1 &pattern[2]
    //now pos1=box[pattern[0]]= firstly the pattern go on first subarray [3,4,5],
    // pattern[0]=3, box[pattern[0]]= 3rd box
    // pattern[1]=4, box[pattern[1]]= 4th box
    // pattern[2]=5, box[pattern[2]]= 5th box
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos1 === pos3) {
        showWinner(pos1);
      }
    }
  });
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.style.pointerEvents = "none"; //to avoid change of val of div upon clicking again
    //if box is button or form element then box.default=true
    findWinner();
  });
});

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
    winMsg.innerText = "";
  });
});
