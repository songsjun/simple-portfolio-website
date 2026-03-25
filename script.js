(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (!form || !status) {
    return;
  }

  var fixedRecipient = 'junsong.song.dev@gmail.com';
  var fixedSubjectPrefix = 'Portfolio inquiry from ';

  function setStatus(message, type) {
    status.textContent = message;
    status.className = 'form-status' + (type ? ' is-' + type : '');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var nameInput = form.elements.namedItem('name');
    var emailInput = form.elements.namedItem('email');
    var messageInput = form.elements.namedItem('message');

    var name = nameInput && typeof nameInput.value === 'string' ? nameInput.value.trim() : '';
    var email = emailInput && typeof emailInput.value === 'string' ? emailInput.value.trim() : '';
    var message = messageInput && typeof messageInput.value === 'string' ? messageInput.value.trim() : '';

    if (!name || !email) {
      setStatus('Name and email are required before opening your mail app.', 'error');
      return;
    }

    var subject = fixedSubjectPrefix + name;
    var body = [
      'Name: ' + name,
      'Email: ' + email,
      '',
      'Message:',
      message || 'No message provided.'
    ].join('\n');

    var mailtoUrl = 'mailto:' + fixedRecipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    setStatus('Opening your default mail app with a prepared message.', 'success');
    window.location.href = mailtoUrl;
  });
})();
