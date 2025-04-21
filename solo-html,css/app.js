const faqIcons = document.querySelectorAll(".faq-icon");

faqIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const faqText = document.querySelectorAll(".faq-group-text");
    faqText.forEach((text) => {
      text.style.display = "block";
    });
  });
});
