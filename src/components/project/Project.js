import "./Style.css";
import BtnGitHub from "../btnGitHub/BtnGitHub";
import BtnSite from "../btnSite/BtnSite";

const Project = ({ title, img, skills, siteLink, gitHubLink }) => {
  return (
    <li className="project">
      <img src={img} alt={title} className="project__img" />
      <h3 className="project__title">{title}</h3>
      <div className="btn-card">
        {siteLink && (
          <BtnSite link={siteLink} />
        )}
      </div>
      <div className="btn-card">
        {gitHubLink && (
          <BtnGitHub link={gitHubLink} />
        )}
      </div>
    </li>
  );
};

export default Project;

