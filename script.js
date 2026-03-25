(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (!form || !status) {
    return;
  }

  var emailAddress = 'junsong@example.com';
  var subjectPrefix = 'Portfolio inquiry from ';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var nameInput = form.elements.namedItem('name');
    var emailInput = form.elements.namedItem('email');
    var messageInput = form.elements.namedItem('message');

    if (!(nameInput instanceof HTMLInputElement) || !(emailInput instanceof HTMLInputElement) || !(messageInput instanceof HTMLTextAreaElement)) {
      return;
    }

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    form.classList.remove('is-invalid');
    nameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    status.className = 'form-status';

    if (!name || !email) {
      form.classList.add('is-invalid');
      status.textContent = 'Please enter your name and email before sending.';
      status.classList.add('is-error');

      if (!name) {
        nameInput.classList.add('input-error');
        nameInput.focus();
      }

      if (!email) {
        emailInput.classList.add('input-error');
        if (name) {
          emailInput.focus();
        }
      }

      return;
    }

    var subject = subjectPrefix + name;
    var body = [
      'Name: ' + name,
      'Email: ' + email,
      '',
      message || 'No message provided.'
    ].join('\n');
    var mailtoUrl =
      'mailto:' +
      emailAddress +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);

    status.textContent = 'Opening your email app with a prefilled message.';
    status.classList.add('is-success');
    window.location.href = mailtoUrl;
  });
})();
