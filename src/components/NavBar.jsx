import { StyledNavBar } from "../Styles";
const NavBar = () => {
  return (
    <StyledNavBar>
      <a href="#home">
        <span className="background-span"></span>

        <span className="content-span">Home</span>
      </a>
      <a href="#experience">
        <span className="background-span"></span>

        <span className="content-span">Experience</span>
      </a>
      <a href="#projects">
        <span className="background-span"></span>

        <span className="content-span">Projects</span>
      </a>
      <a href="#contact">
        <span className="background-span"></span>

        <span className="content-span">Contact</span>
      </a>
    </StyledNavBar>
  );
};

export default NavBar;
