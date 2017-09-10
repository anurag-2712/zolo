import React from "react";
import Constants from "./constants";

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
               <span className="home"><a href="https://zolostays.com">{Constants.FOOTER.HOME}</a></span> |
                <span className="aboutus"><a href="https://zolostays.com/about-us">{Constants.FOOTER.ABOUT_US}</a></span> |
                <span className="pp"><a href="https://zolostays.com/privacy-policy">{Constants.FOOTER.PRIVACY_POLICY}</a></span> |
                <span className="tc"><a href="https://zolostays.com/terms">{Constants.FOOTER.TERMS}</a></span> |
                <span className="copyright">{Constants.FOOTER.COPYRIGHT}</span>
            </div>
        );
    }

}

export default Footer;