// Get modal and buttons
const rulesModal = document.getElementById("rulesModal");
const closeButton = document.getElementById("closeButton");
const rulesButton = document.querySelector(".rules-button");

// Show modal on button click
rulesButton.addEventListener("click", () => {
    rulesModal.style.display = "flex";
});

// Hide modal on close button click
closeButton.addEventListener("click", () => {
    rulesModal.style.display = "none";
});

// Hide modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === rulesModal) {
        rulesModal.style.display = "none";
    }
});
