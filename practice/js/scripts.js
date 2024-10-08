const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

// open modal
openButton.addEventListener("click", () => {
    dialogBox.showModal();

});

// close modal

closeButton.addEventListener("click", () => {
    dialogBox.close();

});