import React from "react"
import Constants from "./constants";

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="logo"><a href="https://zolostays.com"><img src={require("../images/logo.png")} /></a></div>
                <div className="searchBox">
                    <input className="search" type="text" placeholder={Constants.HEADER.PLACEHOLDER} />
                    <button className="searchSubmit"><span>{Constants.HEADER.SEARCH}</span></button>
                </div>
                <div className="loginFields">
                    <a className="login" href="https://zolostays.com/login?signIn=true">{Constants.HEADER.LOGIN}</a>
                    <a className="signup" href="https://zolostays.com/login?signIn=false">{Constants.HEADER.SIGN_UP}</a>
                </div>
            </div>
        );
    }

}

export default Header;