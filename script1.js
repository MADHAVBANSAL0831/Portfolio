document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const sendMailButton = document.getElementById('sendMailButton');
  
    sendMailButton.addEventListener('click', async () => {
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
  
      // Call the sendMail function with form data
      const response = await sendMail({ name, email, phone, message });
  
      if (response.ok) {
        alert('Email sent successfully!');
        form.reset();
      } else {
        alert('Failed to send email.');
      }
    });
  
    async function sendMail(data) {
      return fetch('/api/sendMail', { // Adjust endpoint for Vercel
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }
  });
  