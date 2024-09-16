import project from "../img/projects.png";
import juniorTest from "../img/JuniorTest.png";
import aim from "../img/AIM.mp4";
import { StyledProjects } from "../Styles";
const Projects = () => {
  return (
    <StyledProjects id="projects">
      <div>
        <img src={project} alt="" />
        <h4>Projects</h4>
      </div>
      <section>
        <h5>AIM</h5>
        <h5>
          Tecnologías:
          <br />
          · Front-End: ReactJS y Vercel
          <br />
          · Back-End: Java, SpringBoot, MySQL, Railway y Heroku
          <br />· Metodología Scrum: Trello
        </h5>
        <h6>
          Este proyecto lo hemos realizado con otros 4 compañeros de un Bootcamp
          de 600hs de programación Full-Stack en JavaScript con React y Java con
          SpringBoot, como trabajo final demostrando los conocimientos
          aprendidos. Para llevarlo a cabo hemos dividido el mes de trabajo en 4
          sprints, utilizando metodología Scrum; he colaborado con el Scrum
          Master liderando el diseño del Front-End, priorizando una interfaz
          atractiva e intuitiva
        </h6>
        <div>
          <h6>
            <a href="https://www.aimapp.es">Link al proyecto</a>
          </h6>
          <h6>
            <a href="https://www.linkedin.com/posts/luciarodriguez98_ayer-se-termin%C3%B3-una-etapa-despu%C3%A9s-de-activity-7224714158217330690-mKji?utm_source=share&utm_medium=member_desktop">
              Link a la presentación
            </a>
          </h6>
          <h6>
            <a href="https://github.com/LuchiRodriguez/proyecto">
              Link al repositorio Front-End
            </a>
          </h6>
          <h6>
            <a href="https://github.com/DiegoV97/ProyectoFinal">
              Link al repositorio Back-End
            </a>
          </h6>
        </div>

        <video src={aim} controls />
      </section>
      <span />
      <section>
        <h5>Maquetación diseño responsive prueba técnica Junior Frontend</h5>
        <h5>Tecnologías: HTML y CSS</h5>
        <h6>
          Utilizando como referencia el diseño versión desktop en Figma, y
          partiendo de una carpeta con los assets, realicé la maquetación con
          enfoque mobile first, implementando media queries y transiciones.
        </h6>
        <h5>
          <a href="https://github.com/LuchiRodriguez/JuniorTest">
            Link al repositorio
          </a>
        </h5>

        <img src={juniorTest} alt="" />
      </section>
      <span></span>
    </StyledProjects>
  );
};

export default Projects;
