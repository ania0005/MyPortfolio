import './Style.css';
import instagram from "./../../img/icons/instagram.svg";
import linkedin from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";


const Footer = () => {
    return ( 
        <footer class="footer">
    <div class="container">
        <div class="footer__wrapper">
            <ul class="social">
                <li class="social__item"><a href="https://www.linkedin.com/in/tetiana-samoilenko-9691161a2/" target="_blank"><img src={linkedin} alt="Link"/></a></li>
                <li class="social__item"><a href="https://github.com/ania0005" target="_blank"><img src={gitHub} alt="Link"/></a></li>                
                <li class="social__item"><a href="https://www.instagram.com/samoilenkoo_tanya/" target="_blank"><img src={instagram} alt="Link"/></a></li>
                
            </ul>
            <div class="copyright">
                <p>© 2024</p>
            </div>
        </div>
    </div>
</footer>
     );
}
 
export default Footer;