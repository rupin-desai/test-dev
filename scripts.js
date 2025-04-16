document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Optional: Add animation when cards come into view
  const cards = document.querySelectorAll(".card");

  // Simple function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add visible class if in viewport
  function checkCards() {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("visible");
      }
    });
  }

  // Check cards on scroll
  window.addEventListener("scroll", checkCards);

  // Initial check
  checkCards();
});
