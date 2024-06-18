import siteIcon from "./gitSite-black.svg";

const BtnSite = ({link}) => {
    return ( 
<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                    <img src={siteIcon} alt="" />
                    Website
                </a>
     );
}
export default BtnSite;