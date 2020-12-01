console.log("project is up");

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");
// B- MESSAGES
const successMessage = document.querySelector(".success");
const failureMessage = document.querySelector(".failure");
// C- MODAL
const modal = document.querySelector(".modal");

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onclick = function (event) {
  //   console.log("onclick attribute");
};
//  C- element.addEventListener('click', callback)

launchButton.addEventListener("click", function (event) {
  console.log("using the eventListener");
});

launchButton.addEventListener("click", function (event) {
  // console.log("using the eventListener AGAIN");
});

document.addEventListener("click", function (event) {
  //   console.log("clicking on the document");
  if (event.target === launchButton) {
    // console.log("you clicked the launch button");
  } else {
    // console.log("you clicked somewhere else");
  }
});

Array.from(document.links).forEach(function (link) {
  link.addEventListener("click", function (event) {
    console.log(
      `disrupting the default behavior of "${event.target.textContent}"`
    );
    event.preventDefault();
  });
});

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

launchButton.addEventListener("click", function (event) {
  // we have absolute power over the DOM
  modal.classList.remove("off");
  successMessage.classList.add("off");
  failureMessage.classList.add("off");
});

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

confirmButton.addEventListener("click", function (event) {
  modal.classList.add("off");
  successMessage.classList.remove("off");
});

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

cancelButton.addEventListener("click", function (event) {
  modal.classList.add("off");
  failureMessage.classList.remove("off");
});

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener("keydown", function (event) {
  // if the event object contains the key 'escape', kill modal
  if (event.key === "Escape") {
    modal.classList.add("off");
  }
});

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

Array.from(document.all).forEach((elem) => {
  elem.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log("\n");
  });
});

// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {}

function closeModal() {}

function killReports() {}

// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
