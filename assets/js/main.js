import { submitEmail } from "./firebase.js";

const form = document.getElementById("waitlist-form");
const formSection = document.querySelector(".form-section");
const emailInput = document.getElementById("email-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  if (!email) return;

  const existingError = formSection.querySelector(".error-message");
  if (existingError) existingError.remove();

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "...";

  try {
    await submitEmail(email);
    formSection.innerHTML = '<div class="success-message">You\'re on the list.</div>';
  } catch (err) {
    button.disabled = false;
    button.textContent = "Notify me";

    const errorEl = document.createElement("div");
    errorEl.className = "error-message";
    errorEl.textContent = "Try again.";
    formSection.appendChild(errorEl);
  }
});