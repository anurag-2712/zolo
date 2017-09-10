import React from "react";
import Constants from "./constants";

class DisplaySimilarProperty extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            similarProp : ""
        };
    }

    getSimilarProperty(latitude, longitude) {
        var thiz = this;
        fetch("http://prodapi.livezelo.com/centers/search-nearby-pgs-optimized?latitude=" + latitude + "&longitude=" + longitude)
        .then(function(response){
            return response.json();
        }).then(function(response){
            thiz.setState({
                similarProp: response.result
            });
        }).catch(function(err){
            console.log("Similar Property encountered error : "+err);
        })
    }

    processData(similarProps) {
        var similarPropsList = [];

        for(var i = 0 ; i < similarProps.length ; i++) {
            var similarProp = similarProps[i];
            similarPropsList.push(<div key={i} className="similarProp">
                <div className="similarImg" title={similarProp.name}><img src={similarProp["cover_photo"].url} /></div>
                <div className="similarName">{similarProp.name}</div>
                <div className="similarAddress">
                    <div className="similarAddr1" title={similarProp.addressLine1}>{similarProp.addressLine1}</div>
                    <div className="similarAddr2" title={similarProp.addressLine2}>{similarProp.addressLine2}</div>
                </div>
                <div className="similarDetails"><a title="View details" href={"https://zolostays.com/pgs?id="+similarProp.id}>{Constants.SIMILAR_PROPERTY.SEE_DETAILS}</a></div>
            </div>);
        }

        return similarPropsList;
    }

    componentDidMount() {
        this.getSimilarProperty(this.props.latitude, this.props.longitude);
    }

    render() {

        return (
            <div className="similarProperty categoryHeading">
                <div className="similarPropTitle title">{Constants.SIMILAR_PROPERTY.SIMILAR_PROPERTY_TITLE}</div>
                {!!this.state.similarProp? this.processData(this.state.similarProp) : null}
            </div>
        );
    }
}

export default DisplaySimilarProperty;