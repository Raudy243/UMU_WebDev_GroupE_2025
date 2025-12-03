// weeksupply
function goToWeeklyBox() {
  const section = document.getElementById("weekly-box");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const weeklyBoxBtn = document.getElementById("add-weekly-box-btn");

  weeklyBoxBtn.addEventListener("click", () => {
    alert("Weekly Farm Box added to cart!");
  });
});

// shop
function goToShop() {
  const section = document.getElementById("shop");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.getElementById("add-shop-btn");

  shopBtn.addEventListener("click", () => {
    alert("Favorite added to cart!");
  });
});
// prodce
function goToShop() {
  const section = document.getElementById("shop");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

