import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
    };

    emailjs.send('service_wzt88gt', 'template_i50nl6g', data , 'sjdsMB6WoxBhmKeGu')
      .then((result) => {
        alert('Message envoyé avec succès!');
        form.current.reset();
      }, (error) => {
        alert('Erreur dans l\'envoie du message.');
      });
  };

  return (
    <div id="contact" className='pb-5 contact col-md-12'>
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="contact">
        <div className='contact font-trebuchet'>
          <label>Nom:</label>
          <input type="text" name="user_name" required className="input-form" />
        </div>
        <div className='contact font-trebuchet'>
          <label>Email:</label>
          <input type="email" name="user_email" required className="input-form" />
        </div>
        <div className='contact font-trebuchet'>
          <label>Message:</label>
          <textarea name="message" required className="input-form input-message" />
        </div>
        <button type="submit" className="button-submit-form-contact">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;