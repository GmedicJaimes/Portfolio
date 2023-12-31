import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import style from "./Form.module.css";
import { FormattedMessage } from "react-intl";

const Form = () => {
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
      <h5>
        <FormattedMessage
          id="contact.subtitle"
          defaultMessage="Let's Stay In Touch"
        />
      </h5>
      <h1>
        {" "}
        <FormattedMessage id="contact.title" defaultMessage="Contact Me" />
      </h1>

      <form
        ref={refForm}
        onSubmit={handleSubmit}
        id="contact"
        className={style.form}
      >
        <label htmlFor="name">
          {" "}
          <FormattedMessage id="contact.one" defaultMessage="Name" />
        </label>
        <input
          id="name"
          type="text"
          name="from_name"
          placeholder="Gulliano Jaimes"
          required
        />

        <label htmlFor="email">
          <FormattedMessage id="contact.two" defaultMessage="Email" />
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
          required
        />

        <label htmlFor="message">
          <FormattedMessage id="contact.three" defaultMessage="Message" />
        </label>
        <textarea
          maxLength="500"
          id="message"
          name="message"
          placeholder="Type your message"
          required
        />

        <button type="submit">
          <FormattedMessage id="contact.button" defaultMessage="Submit" />
        </button>
      </form>
    </section>
  );
};

export default Form;
