import { StyledExperience } from "../Styles";
import experience from "../img/experience.png";
const Experience = () => {
  return (
    <StyledExperience id="experience">
      <div>
        <img src={experience} alt="" />
        <h1>Experience</h1>
      </div>
      <section>
        <h3>Freelance Full-Stack Developer</h3>
        <h3>2021 - Actualidad</h3>
        <p>
          Colaboración estrecha con clientes para comprender sus necesidades y
          entregar distintos proyectos de desarrollo web a tiempo y dentro del
          presupuesto; realizando distintas tareas como maquetación web, diseño
          responsive y mobile first, optimización SEO, metodologías ágiles
          (Scrum), integración de APIs, gestión de bases de datos relacionales y
          no relacionales, entre otras.
        </p>
      </section>
      <section>
        <h3>
          Dependienta de retail | Guess - Adolfo Dominguez - Carolina Herrera -
          Nike
        </h3>
        <h3>2022 - 2024</h3>
        <p>
          Atención personalizada a clientes, ofreciendo asesoramiento y
          recomendaciones de productos basadas en sus necesidades.
          Implementación de estrategias de venta cruzada y upselling para
          aumentar el ticket medio. Gestión eficaz de la caja registradora,
          incluyendo cobros, devoluciones y cambios. Reposición constante del
          stock y mantenimiento del orden y limpieza del área de trabajo.
        </p>
      </section>
      <section>
        <h3>E-commerce manager | Roma by Rochi</h3>
        <h3>2021 - 2022</h3>
        <p>
          Fidelización y seguimiento de clientes a través de programas de
          lealtad y campañas de email marketing personalizadas. Gestión completa
          del ciclo de vida del cliente, desde la adquisición hasta la
          postventa. Implementación de estrategias de SEO y SEM para incrementar
          el tráfico orgánico y de pago. Análisis detallado del rendimiento del
          negocio utilizando Google Analytics.
        </p>
      </section>
      <section>
        <h3>Administrativa | Power System</h3>
        <h3>2017 - 2019</h3>
        <p>
          Gestión administrativa, incluyendo facturación, cierre contable
          mensual, abastecimiento de oficina. Habilidades de comunicación
          efectiva para atender llamadas y brindar soporte a clientes internos y
          externos.
        </p>
      </section>
      <section>
        <h3>Emprendimiento | Philipinos</h3>
        <h3>2016 - 2020</h3>
        <p>
          Diseño de ropa urbana, producción, gestión de inventario, ventas
          mayoristas y minoristas, marketing digital y administración de
          negocios.
        </p>
      </section>
    </StyledExperience>
  );
};

export default Experience;
