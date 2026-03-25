(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (!form || !status) {
    return;
  }

  var recipient = 'hello@example.com';
  var subjectPrefix = 'Portfolio inquiry from ';

  form.addEventListener('submit', function (event) {
    var nameField = document.getElementById('name');
    var emailField = document.getElementById('email');
    var messageField = document.getElementById('message');

    if (!nameField || !emailField || !messageField) {
      return;
    }

    var name = nameField.value.trim();
    var email = emailField.value.trim();
    var message = messageField.value.trim();

    if (!name || !email) {
      event.preventDefault();
      status.textContent = 'Please enter both your name and email before sending.';
      status.className = 'form-status is-error';
      return;
    }

    event.preventDefault();

    var bodyLines = [
      'Name: ' + name,
      'Email: ' + email,
      '',
      'Message:',
      message || '(No message provided)'
    ];

    var mailtoUrl =
      'mailto:' +
      recipient +
      '?subject=' +
      encodeURIComponent(subjectPrefix + name) +
      '&body=' +
      encodeURIComponent(bodyLines.join('\n'));

    status.textContent = 'Opening your email app with a prefilled draft.';
    status.className = 'form-status is-success';
    window.location.href = mailtoUrl;
  });
})();
