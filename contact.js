function initContactForm() {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      this.classList.add("loading");

      setTimeout(() => {
        this.classList.remove("loading");

        alert("Thank you for your message! We'll get back to you soon.");
        this.reset();
      }, 2000);
    });
  }
}

function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initFAQAccordion();
  initContactForm();
});
