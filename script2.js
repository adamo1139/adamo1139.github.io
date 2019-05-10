var modal = document.querySelector(".modal");
var button = document.querySelector(".button");
var closebutton = document.querySelector("dialog > .button");

function buttonOnClick() {
    if (modal.open == true) {
        modal.close();
    } else if (modal.open == false) {
        modal.showModal();
    }
}

button.addEventListener("click", buttonOnClick);
closebutton.addEventListener("click", buttonOnClick);
