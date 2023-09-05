import img from "../../assets/foto2.png";
import style from "../About/About.module.css";

const About = () => {
  return (
    <section className={style.containerAbout}>
      <div className={style.infoAbout}>
        <h1>
          Hello<span>!</span> I'm
        </h1>
        <h2>Gulliano Jaimes</h2>
        <h3>Fullstack | Frontend Developer</h3>
        <p>
          I am an enthusiastic Fullstack developer with a passion for technology
          and software development. I am currently focused on acquiring skills
          and knowledge in both front-end and back-end development, focusing
          more on front-end development with the aim of creating efficient and
          attractive web applications.
        </p>
      </div>
      <div className={style.imageAbout}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default About;
