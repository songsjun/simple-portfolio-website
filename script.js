(function () {
  var form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  var recipient = form.getAttribute("data-recipient");
  if (!recipient) {
    return;
  }

  form.addEventListener("submit", function (event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput ? nameInput.value.trim() : "";
    var email = emailInput ? emailInput.value.trim() : "";
    var message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    event.preventDefault();

    var subject = encodeURIComponent("Portfolio inquiry from " + name);
    var body = encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Message:\n" + (message || "No message provided.")
    );

    window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  });
})();
