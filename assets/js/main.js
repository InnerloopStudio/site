import { submitEmail } from "./firebase.js";
import { t } from "./i18n.js";

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
    formSection.innerHTML = `<div class="success-message">${t("success")}</div>`;
  } catch (err) {
    button.disabled = false;
    button.textContent = t("notify");

    const errorEl = document.createElement("div");
    errorEl.className = "error-message";
    errorEl.textContent = t("error");
    formSection.appendChild(errorEl);
  }
});
