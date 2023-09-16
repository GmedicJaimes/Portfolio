import { useForm, ValidationError } from "@formspree/react";
import style from "./Form.module.css";

const Form = () => {
  const [state, handleSubmit] = useForm("mwkdqbwp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className={style.containerForm}>
      <h5>Let's Stay In Touch</h5>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit} id="contact" className={style.form}>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
