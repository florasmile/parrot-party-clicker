// Add javascript code to Party Parrot Clicker such that:
const NUM_OF_COUNTS = 10;

const state = {
  clickCountLabel: null,
  clickCount: 0,
  parrotImg: null,
  resetButton: null
};

const handleImgClicked = () => {
  //add count to state
  state.clickCount++;
  state.clickCountLabel.textContent = state.clickCount;
  if (state.clickCount === NUM_OF_COUNTS) {
    state.parrotImg.classList.add('big-parrot');
  } else {
    state.parrotImg.classList.remove('big-parrot');
  }
  //change count in html
};

const handleResetCount = () => {
  state.clickCount = 0;
  state.clickCountLabel.textContent = state.clickCount;
};

const registerEvents = () => {
  state.parrotImg.addEventListener('click', handleImgClicked);
  state.resetButton.addEventListener('click', handleResetCount);
};
const loadControls = () => {
  state.clickCountLabel = document.getElementById('click-count-label');
  state.parrotImg = document.querySelector('img');
  state.resetButton = document.getElementById('reset-button');
};

const onLoaded = () => {
  loadControls();
  registerEvents();
};

onLoaded();
// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
