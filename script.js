const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const recipient = 'hello@junsong.dev';
const subjectPrefix = 'Portfolio inquiry from';

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email) {
      formStatus.textContent = 'Please enter both your name and email before composing the message.';
      return;
    }

    const subject = `${subjectPrefix} ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message || 'No message provided.'
    ];

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    formStatus.textContent = 'Opening your email client.';
    window.location.href = mailtoUrl;
  });
}
