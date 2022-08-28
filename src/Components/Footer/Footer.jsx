import "./footer.css";
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"


const Footer = () => {
    return (
        <footer className="footer-container" id="footer">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="Github Icon" />
                    <img src={Instagram} alt="Instagram Icon" />
                    <img src={Linkedin} alt="Linkedin Icon" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="FitClub Logo" />
                </div>
            </div>

            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </footer>
    );
}

export default Footer;
