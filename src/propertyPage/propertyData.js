import React from "react";
import Header from "./header";
import DisplayProperty from "./displayProperty";
import Footer from "./footer";

class PropertyData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            propData : ""
        };
    }

    getPropData() {
        var thiz = this;
        fetch("https://prodapi.livezelo.com/pgs/details/555ee5177a6f6c54b6230000.json", {method: 'get'})
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            thiz.setState({
                propData : response.result[0]
            });
        }).catch(function(err) {
            console.log("Error : "+err);
        })

    }

    componentDidMount() {
        this.getPropData();
    }

    render() {
        return (
            <div className="mainDiv">
                <Header />
                {!!this.state.propData ? <DisplayProperty propertyData={this.state.propData} /> : null}
                <Footer />
            </div>
        );
    }

}

export default PropertyData;