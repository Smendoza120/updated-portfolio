function Contact() {
  return (
    <section className="contact__container">
      <h2 className="contact__title">Contact</h2>
      <form className="contact__form" action="">

        <div className="contact__data">
          <input className="contact__name" type="text" placeholder="Name" required/>
          <input className="contact__email" type="email" placeholder="Email" required/>
        </div>

        <input className="contact__subject" type="text" placeholder="Subject" />
        <textarea className="contact__text-area" placeholder="Message" required></textarea>
        
        <div className="contact__buttons">
          <button className="contact__buttons-button">Cancel</button>
          <button className="contact__buttons-button">Send</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
