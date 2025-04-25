document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Handle multiple checkbox values
    const solutions = form.querySelectorAll('input[name="solution"]:checked');
    const solutionValues = Array.from(solutions).map((cb) => cb.value);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone") || "", // optional
      solutions: solutionValues,
      message: formData.get("message") || "",
    };

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;

    try {
      const res = await fetch("/.netlify/functions/submitInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Thanks! Your message has been sent.");
        form.reset();
        submitBtn.disabled = false;
      } else {
        const result = await res.json().catch(() => ({}));
        alert(result.error || "Something went wrong. Please try again.");
        submitBtn.disabled = false;
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Network error. Try again later.");
      submitBtn.disabled = false;
    }
  });
