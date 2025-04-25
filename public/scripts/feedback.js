document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star-rating input");
  const starLabels = document.querySelectorAll(".star-rating label");
  let currentRating = 0;

  // Function to update stars visual state
  const updateStars = (rating, isHover = false) => {
    starLabels.forEach((label) => {
      const starValue = parseInt(label.dataset.value, 10);
      if (starValue <= rating) {
        label.classList.add("active");
        if (isHover) {
          label.classList.add("hover");
        }
      } else {
        label.classList.remove("active");
        label.classList.remove("hover");
      }
    });
  };

  // Handle hover effects
  starLabels.forEach((label) => {
    const starValue = parseInt(label.dataset.value, 10);

    label.addEventListener("mouseenter", () => {
      updateStars(starValue, true);
    });

    label.addEventListener("mouseleave", () => {
      if (currentRating === 0) {
        starLabels.forEach((label) => {
          label.classList.remove("active");
          label.classList.remove("hover");
        });
      } else {
        updateStars(currentRating);
      }
    });
  });

  // Handle click events
  stars.forEach((star) => {
    const starValue = parseInt(star.nextElementSibling.dataset.value, 10);
    star.addEventListener("change", () => {
      currentRating = starValue;
      updateStars(currentRating);
    });
  });

  // Handle feedback form submission
  const feedbackForm = document.getElementById("feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        const formData = new FormData(feedbackForm);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          location: formData.get("location"),
          preferences: formData.get("preferences"),
          rating: currentRating,
        };

        console.log("Submitting feedback data:", data);
        const res = await fetch("/.netlify/functions/submitFeedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          alert("Thank you for your feedback!");
          feedbackForm.reset();
          currentRating = 0;
          updateStars(0);
        } else {
          const result = await res.json().catch(() => ({}));
          throw new Error(result.error || "Feedback submission failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "Sorry, there was an error sending your feedback. Please try again."
        );
      }
    });
  }
});
