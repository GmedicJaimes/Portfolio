import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import style from "./Form.module.css";

const Form = () => {
  // const [state, handleSubmit] = useForm("mwkdqbwp");
  // if (state.succeeded) {
  //   return alert("Mensaje enviado con exito");
  // }

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_ko9zlca";
    const templateId = "template_7pfur1e";
    const apiKey = "sBFwvp9y4MJkxDaIv";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
      })
      .catch((error) => console.error(error));

    Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success",
    });
  };

  return (
    <section className={style.containerForm}>
      <h5>Let's Stay In Touch</h5>
      <h1>Contact Me</h1>

      <form
        ref={refForm}
        onSubmit={handleSubmit}
        id="contact"
        className={style.form}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="from_name"
          placeholder="Gulliano Jaimes"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          maxLength="500"
          id="message"
          name="message"
          placeholder="Type yout message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
