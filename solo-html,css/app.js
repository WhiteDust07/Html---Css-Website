/*
const { document } = require("postcss");

const faqIcons = document.querySelectorAll(".faq-icon");

faqIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const faqText = document.querySelectorAll(".faq-group-text");
    faqText.forEach((text) => {
      text.style.display = "block";
    });
  });
});
*/

// FAq Open

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupText = group.querySelector(".faq-group-text");
    const icon = groupHeader.querySelector("i");

    // toogle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // toogle visiblity of text
    groupText.classList.toggle("open");

    // close ohter open Faq bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupText = otherGroup.querySelector(".faq-group-text");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupText.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
