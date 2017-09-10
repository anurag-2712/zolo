import React from "react";
import Constants from "./constants";

class DisplayBasicInfo extends React.Component {

    render() {

        var basicInfo = this.props.basicInfo;
        if(!!basicInfo) {
            return (
                <div className="basicInfo">
                    <div className="name">{basicInfo.name}</div>
                    <div className="address">{basicInfo.addressLine1}, {basicInfo.addressLine2}, {basicInfo.city}</div>
                    <div className="description categoryHeading">
                        <div className="descTitle title">{Constants.DESCRIPTION}</div>
                        <div className="desc">{basicInfo.desc}</div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default DisplayBasicInfo;