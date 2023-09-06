import img from "../../assets/foto3.png";
import style from "../About/About.module.css";

const About = () => {
  return (
    <section className={style.containerAbout}>
      <div className={style.infoAbout}>
        <h2>
          Hi<span>!</span> I'm
        </h2>
        <h1>Gulliano Jaimes</h1>
        <h3>Fullstack | Frontend Developer</h3>
        {/* <p>
          I am an enthusiastic Fullstack developer with a passion for technology
          and software development. I am currently focused on acquiring skills
          and knowledge in both front-end and back-end development, focusing
          more on front-end development with the aim of creating efficient and
          attractive web applications.
        </p> */}
        <div className={style.buttonsAbout}>
          <a href="https://www.linkedin.com/in/gulliano-jaimes/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
              alt=""
            />
          </a>
          <a href="https://github.com/GmedicJaimes">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/909/909263.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={style.imageAbout}>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
