const audioW = new Audio("sounds/crash.mp3");
const audioA = new Audio("sounds/kick-bass.mp3");
const audioS = new Audio("sounds/snare.mp3");
const audioD = new Audio("sounds/tom-1.mp3");
const audioJ = new Audio("sounds/tom-2.mp3");
const audioK = new Audio("sounds/tom-3.mp3");
const audioL = new Audio("sounds/tom-4.mp3");

var buttonList = document.querySelectorAll(".drum");

buttonList.forEach((button) => {
  button.addEventListener("click", handleClick);
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  playSound(e.key);
});

function handleClick(e) {
  console.log(e.target.innerHTML);

  playSound(e.target.innerHTML);
  // const audio = new Audio("sounds/crash.mp3");
  // audio.play();
}
// function handleClick() {
//   this.style.color = "white";
//   console.log(this);
// }

function playSound(input) {
  // e.target.innerHTML;
  switch (input) {
    case "w":
      audioW.play();
      break;
    case "s":
      audioS.play();
      break;
    case "a":
      audioA.play();

      break;
    case "d":
      audioD.play();

      break;
    case "j":
      audioJ.play();

      break;
    case "k":
      audioK.play();
      break;

    case "l":
      audioL.play();
      break;

    default:
      break;
  }
}
