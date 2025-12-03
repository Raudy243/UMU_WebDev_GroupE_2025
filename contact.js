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

document.addEventListener("DOMContentLoaded", initContactForm);
