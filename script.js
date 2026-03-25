const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const statusNode = document.getElementById('form-status');

const CONTACT_EMAIL = 'hello@junsong.dev';
const SUBJECT_PREFIX = 'Portfolio inquiry from';

if (contactForm && nameInput && emailInput && messageInput && statusNode) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email) {
      statusNode.textContent = 'Please enter your name and email before opening a draft.';
      statusNode.classList.remove('is-success');
      return;
    }

    const subject = `${SUBJECT_PREFIX} ${name}`;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message || 'No message provided.'
    ];

    const body = lines.join('\n');
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    statusNode.textContent = 'Opening your email client.';
    statusNode.classList.add('is-success');
    window.location.href = mailtoUrl;
  });
}
