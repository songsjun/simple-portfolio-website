const CONTACT_EMAIL = "hello@junsong.dev";
const MAIL_SUBJECT = "Portfolio inquiry";

function getTrimmedValue(field) {
  return field.value.trim();
}

function setError(field, errorElement, message) {
  field.setAttribute("aria-invalid", message ? "true" : "false");
  errorElement.textContent = message;
}

function buildMailtoUrl(name, email, message) {
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message || "No message provided."
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(body)}`;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const formStatus = document.getElementById("form-status");

  if (
    !(nameField instanceof HTMLInputElement) ||
    !(emailField instanceof HTMLInputElement) ||
    !(messageField instanceof HTMLTextAreaElement) ||
    !(nameError instanceof HTMLElement) ||
    !(emailError instanceof HTMLElement) ||
    !(formStatus instanceof HTMLElement)
  ) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = getTrimmedValue(nameField);
    const email = getTrimmedValue(emailField);
    const message = getTrimmedValue(messageField);

    setError(nameField, nameError, "");
    setError(emailField, emailError, "");
    formStatus.textContent = "";
    formStatus.removeAttribute("data-state");

    let hasError = false;

    if (!name) {
      setError(nameField, nameError, "Please enter your name.");
      hasError = true;
    }

    if (!email) {
      setError(emailField, emailError, "Please enter your email.");
      hasError = true;
    }

    if (hasError) {
      formStatus.textContent = "Name and email are required before opening an email draft.";
      if (!name) {
        nameField.focus();
      } else {
        emailField.focus();
      }
      return;
    }

    const mailtoUrl = buildMailtoUrl(name, email, message);
    formStatus.textContent = "Opening your default email app...";
    formStatus.dataset.state = "success";
    window.location.href = mailtoUrl;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactForm);
} else {
  initContactForm();
}
