import React from "react";
import DisplayBasicInfo from "./displayBasicInfo";
import DisplayFood from "./displayFood";
import DisplayAmenities from "./displayAmenities";
import DisplayImages from "./displayImages";
import DisplaySimilarProperty from "./displaySimilarProperty";

class DisplayProperty extends React.Component {

    getBasicData(propData) {
        var basicInfo = {
            name: propData.name,
            addressLine1: propData.addressLine1,
            addressLine2: propData.addressLine2,
            city: propData.city,
            desc: propData.description
        };

        return basicInfo;
    }

    render() {

        var propertyData = this.props.propertyData;
        var basicInfo = this.getBasicData(propertyData);
        var amenities = propertyData.amenities;
        var food = propertyData.food;
        //var room = propertyData.room;

        return (
            <div className="propContainer">
                <DisplayImages />
                <DisplayBasicInfo basicInfo={basicInfo} />
                <DisplayFood food={food} />
                <DisplayAmenities amenities={amenities} />
                <DisplaySimilarProperty latitude={propertyData.location[1]} longitude={propertyData.location[0]} />
            </div>
        );
    }
}

export default DisplayProperty;