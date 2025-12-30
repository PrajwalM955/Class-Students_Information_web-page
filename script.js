document.addEventListener("DOMContentLoaded", () => {
  const students = document.querySelectorAll(".student");
  const card = document.getElementById("infoCard");
  const cardName = document.getElementById("cardName");
  const cardRoll = document.getElementById("cardRoll");
  const cardEmail = document.getElementById("cardEmail");
  const cardGender = document.getElementById("cardGender");
  const cardImage = document.getElementById("cardImage");

  students.forEach(student => {
    student.addEventListener("mouseenter", () => {
      // Set card details
      cardName.textContent = student.dataset.name || "N/A";
      cardRoll.textContent = student.dataset.roll || "N/A";
      cardEmail.textContent = student.dataset.email || "N/A";
      cardGender.textContent = student.dataset.gender || "N/A";

      // Set profile image
      if (student.dataset.image) {
        cardImage.src = student.dataset.image;
        cardImage.style.display = "block";
      } else {
        cardImage.style.display = "none";
      }

      // Show info card
      card.style.display = "block";
    });

    student.addEventListener("mouseleave", () => {
      // Hide info card
      card.style.display = "none";
    });
  });
});
