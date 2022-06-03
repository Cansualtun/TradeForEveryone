const sendButton = document.getElementById('Submit');
const form = document.getElementById('form');

sendButton.addEventListener('click', function(e) {
    e.preventDefault();
    sendButton.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_28fetgc';

   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      sendButton.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      sendButton.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});