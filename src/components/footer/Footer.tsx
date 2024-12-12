import "./footer.scss";
import logoFooter from "../../assets/footer_logo.jpg"

function Footer() {
  
    return (
      <>
        <footer>
            <img src={logoFooter} alt="Logo Kasa" className="footer-logo"/>
            <div className="footer-text">© 2020 Kasa. All rights reserved</div>
        </footer>
      </> 
    );
  }

export default Footer