import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
  const [formSend, setFormSend] = useState(false);
  
  // const sendEmail = (event) => {
  //   event.preventDefault();

  //   emailjs.sendForm('service_78za5il', 'template_dla641t', event.target, '7DCszwyAVjVc8xSv2')
  //   .them(response => console.log(response))
  //   .catch(error => console.log(error))
  // }

  return (
    <section id="contact" className="contact__container">
      <h2 className="contact__title">Contact</h2>

      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: ''
        }}
        validate={(values)=>{
          let errors = {};

          if(!values.name){
            errors.name = 'Porfavor ingresa un nombre';
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
            errors.name = 'El nombre solo puede contener letras y espacios';
          }

          if(!values.email){
            errors.email = 'Porfavor ingresa un correo electronico';
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo.';
          }

          if(!values.message){
            errors.message = 'Profavor ingresa un mensaje';
          }

          return errors;
        }}
        onSubmit={()=>{
          setFormSend(true);
          setTimeout(()=>{
            setFormSend(false)
          }, 5000)
        }}
      >
        {( {errors} ) => (
          <Form 
            className="contact__form"
            action="https://formsubmit.co/sanchezharold13@gmail.com"
            method="POST"
            target="_blank">
            <div className="contact__name">
              <label className="contact__label" htmlFor="name">
                Name
              </label>
              <Field
                className="contact__input"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <ErrorMessage name="name" component={()=>(
                <div className="contact__error">{errors.name}</div>
              )}/>
            </div>

            <div className="contact__email">
              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <Field
                className="contact__input"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component={()=>(
                <div className="contact__error">{errors.email}</div>
              )}/>
            </div>

            <div className="contact__subject">
              <label className="contact__label" htmlFor="subject">
                Subject
              </label>
              <Field
                className="contact__input"
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className="contact__message">
              <label className="contact__label" htmlFor="message">
                Message
              </label>
              <Field
                as='textarea'
                className="contact__text-area"
                id="message"
                name="message"
                placeholder="Message"
              ></Field>
              <ErrorMessage name="message" component={()=>(
                <div className="contact__error">{errors.message}</div>
              )}/>
            </div>

            <div className="contact__buttons">
              <button type="reset" className="contact__buttons-button">Cancel</button>
              <button type="submit" className="contact__buttons-button">Send</button>
            </div>
            {formSend && <p className="contact__confirm">Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Contact;
