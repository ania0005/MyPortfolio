import "./Style.css";
import resume from "./Lebenslauf.pdf";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Tania</em>
          </strong>
          <br />a full stack / frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={resume} className="btn">Download CV en/de</a>
        
      </div>
    </header>
  );
};

export default Header;
