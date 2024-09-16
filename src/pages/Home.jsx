import { StyledHome, Technologies } from "../Styles";
import profilePicture from "../img/profile.jpg";
import code from "../img/code.png";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import java from "../img/java.png";
import springboot from "../img/springboot.png";
import mysql from "../img/mysql.png";
import python from "../img/python.png";
import figma from "../img/figma.png";
import adobexd from "../img/adobexd.png";
import illustrator from "../img/illustrator.png";
import photoshop from "../img/photoshop.png";

const Home = () => {
  return (
    <StyledHome id="home">
      <section>
        <img src={profilePicture} alt="" />
        <h1>&#10024;¡Hola mundo! Soy Lucía | Full-Stack Developer&#10024;</h1>
      </section>
      <p>
        Soy una apasionada por la creación de interfaces de usuario intuitivas y
        eficientes. Me encanta aprender nuevas tecnologías y estoy siempre
        buscando mejorar mis habilidades.
        <br />
        <br />
        Mi viaje en el mundo del desarrollo web comenzó en 2020, cuando me
        embarqué en un viaje de aprendizaje autodidacta en HTML, CSS y
        JavaScript orientado a objetos.
        <br />
        <br />
        Mi objetivo era convertirme en una desarrolladora capaz de crear
        aplicaciones web y móviles utilizando React.
        <br />
        <br />A principios de 2024, buscando acelerar mi aprendizaje y adquirir
        experiencia práctica, me uní al Bootcamp de 600 horas de programación
        Full-Stack en JavaScript y Java de Fundación Esplai. Esta experiencia me
        permitió consolidar mis conocimientos de Front-End y dar mis primeros
        pasos en el Back-End.
        <br />
        <br />
        Me defino como una persona organizada, detallista y con una gran
        capacidad para trabajar de forma dinámica y positiva, siempre orientada
        a la consecución de resultados.
        <br />
        <br />
        Soy expeditiva, con gran iniciativa y capacidad resolutiva. Además,
        cuento con fuertes habilidades comunicativas y una gran capacidad de
        adaptación a nuevos entornos y desafíos.
      </p>
      <Technologies>
        <div>
          <img src={code} alt="" />
          <h2>Tecnologías</h2>
        </div>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={java} alt="" />
        <img src={springboot} alt="" />
        <img src={mysql} alt="" />
        <img src={python} alt="" />
        <img src={figma} alt="" />
        <img src={adobexd} alt="" />
        <img src={illustrator} alt="" />
        <img src={photoshop} alt="" />
      </Technologies>
    </StyledHome>
  );
};

export default Home;
