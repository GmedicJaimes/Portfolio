import img from "../../assets/foto2.png";
import style from "../About/About.module.css";

const About = () => {
  return (
    <section className={style.containerAbout}>
      <div className={style.infoAbout}>
        <h1>
          Hello<span>!</span>
        </h1>
        <h1>I'm Gulliano Jaimes</h1>
        <h3>Fullstack | Frontend Developer</h3>
      </div>
      <div className={style.imageAbout}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default About;
