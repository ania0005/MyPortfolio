import siteIcon from "./gitSite-black.svg";

const BtnSite = ({link}) => {
    return ( 
<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                    <img src={siteIcon} alt="" />
                    Wishlist site
                </a>
     );
}
export default BtnSite;