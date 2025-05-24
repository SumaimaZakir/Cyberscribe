document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent successfully!');
      form.reset();
    });
  }
});
