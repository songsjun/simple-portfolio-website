(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  var recipient = "hello@junsong.dev";
  var subjectBase = "Portfolio inquiry from ";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput ? nameInput.value.trim() : "";
    var email = emailInput ? emailInput.value.trim() : "";
    var message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email) {
      status.textContent = "Please enter both your name and email before sending.";
      return;
    }

    var subject = subjectBase + name;
    var lines = [
      "Name: " + name,
      "Email: " + email,
      "",
      "Message:",
      message || "No message provided."
    ];

    var mailtoUrl =
      "mailto:" +
      recipient +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    status.textContent = "Opening your email app...";
    window.location.href = mailtoUrl;
  });
})();
