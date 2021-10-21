const actionBtn = document.querySelector("#close-btn");
const popup = document.querySelector(".popup");

actionBtn.addEventListener('click', () => {
    popup.remove();
});