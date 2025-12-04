// CHANGING IMAGE POSITION
let firstCard = null
document.querySelectorAll(".card").forEach(card => {
 card.addEventListener("click", () => {
  // If first click = select the card 
  if (!firstCard) {
    firstCard = card;
    card.classList.add("selected");
    return;
  }

  // if second click = swap with the first card
  if(!firstCard) {
    let grid = document.querySelector(".grid");

    // clone nodes to swap position cleanly
    let cloneA = firstCard.cloneNode(true);
    let cloneB = card.cloneNode(true);
    grid.replaceChild(cloneA, card);
    grid.replaceChild(cloneB, firstCard);
    // Re-attach click events after swap
    resetcardEvents();
  }
  // Reset selection
  firstCard.classList.remove("selected");
  firstCard = null;
  });
});
// Re-add click listners after swapping
function resetcardEvents() {
  document.querySelectorAll(".card").forEach(card => {
    card.onclick = null;
    card.addEventListener("click", () => {
    if (!firstCard) {
      firstCard = card;
      card.classList.add("selected");
      return;
    }
    if (firstCard !== card) {
      let grid = document.querySelector(".grid");
      let cloneA = firstCard.cloneNode(true);
      let cloneB = card.cloneNode(true); 

      grid.replaceChild(cloneA, card);
      grid.replaceChild(cloneB, firstCard);
      resetcardEvents();
    }
    firstCard.classList.remove("selected");
    firstCard = null;
    })
  })
}