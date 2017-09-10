import React from "react";
import Constants from "./constants";

class DisplayAmenities extends React.Component {

    displayAmenitiesData(amenities) {
        var amenitiesList = [];
        var i=0;
        for(var key in amenities) {
            if(amenities.hasOwnProperty(key)) {
                var val = amenities[key];
                if(val.available == "1") {
                    var title = val.title.replace(/_/, " ");
                    var detail = !!val.details && !val.details.includes("Available")? ("(" + val.details + ")") : " ";
                    var imagePath = "../images/" + key + ".png";
                    amenitiesList.push(<div key={i} className="amenity in-bl">
                        <div className="amenityImage in-bl">
                            {!!imagePath? <img src={require("../images/" + key + ".png")} /> : null}
                        </div>
                        <div className="amenityInfo in-bl">
                            <div className="amenityTitle">{title}</div>
                            <div className="amenityDetail">{detail}</div>
                        </div>
                    </div>);
                    i++;
                }
            }
        }
        return amenitiesList;
    }

    render() {

        var amenitiesData = this.props.amenities;

        if(!!amenitiesData) {
            return (
                <div className="amenitiesContainer categoryHeading">
                    <div className="amenitiesTitle title">{Constants.AMENITIES}</div>
                    {this.displayAmenitiesData(amenitiesData)}
                </div>
            );
        } else {
            return null;
        }
    }

}

export default DisplayAmenities;