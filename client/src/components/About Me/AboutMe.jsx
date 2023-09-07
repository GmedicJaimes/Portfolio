import style from "../About Me/AboutMe.module.css";

const AboutMe = () => {
  return (
    <main className={style.containerAboutMe}>
      <h5>Get To Know More</h5>
      <h1>About Me</h1>
      <section className={style.aboutMeInfo}>
        <div className={style.aboutMeSection}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/8207/8207096.png"
            alt=""
          />
          <h2>Experience</h2>
          <p>+10 months Frontend developer</p>
          <p>+4 months Fullstack developer</p>
        </div>
        <div className={style.aboutMeSection}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/942/942806.png"
            alt=""
          />
          <h2>Education</h2>
          <p>SoyHenry Bootcamp (FullStack Developer)</p>
          <p>Platzi (Frontend Developer)</p>
        </div>
      </section>
      <section className={style.aboutMeText}>
        <p>
          I am an enthusiastic Fullstack developer with a passion for technology
          and software development. I am currently focused on acquiring skills
          and knowledge in both front-end and back-end development, focusing
          more on front-end development with the aim of creating efficient and
          attractive web applications.
        </p>
        <br />
        <p>
          Although I still have no professional experience in the field, my
          youth and enthusiasm allow me to keep abreast of the latest trends and
          technologies in the field of web development. In addition, my academic
          background in Fullstack Development has provided me with a solid
          foundation to tackle projects and learn quickly and effectively.
        </p>
      </section>
    </main>
  );
};

export default AboutMe;
