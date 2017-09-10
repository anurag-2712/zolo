import React from "react";
const DOM =  React.DOM;
import Constants from "./constants";

class DisplayImages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: ""
        }
    }

    getImagesData() {
        var thiz = this;
        fetch("https://prodapi.livezelo.com/v2/pgs/555ee5177a6f6c54b6230000/photos.json")
        .then(function(response){
            return response.json();
        }).then(function(response){
            thiz.setState({
                images: response.result[0]
            });
        }).catch(function(err){
            console.log("Display Images, error encountered : "+err);
        })
    }

    showImagesData(images) {
        var imagesList = [];

        if(!!images) {
            imagesList.push(<div className="imageBlockHead">
                <span className="imageBlckTitle">{Constants.ROOM}</span>
            </div>);

            var k = 0;
            for (var key in images) {
                var val = images[key];
                for (var j = 0; j < val.length; j++) {
                    var url = val[j].photo.url;
                    var caption = val[j].caption;
                    imagesList.push(<div key={k} className="imageBlock">
                        <a title={"View the " + caption} href={url} target="_blank">{caption}</a>
                    </div>);
                    k++;
                }
            }
        }

        return imagesList;
    }

    componentDidMount() {
        this.getImagesData();
    }

    render() {

        return (
            <div className="imagesContainer">
                <div className="imageLinks in-bl">
                    {!!this.state.images? this.showImagesData(this.state.images) : null}
                </div>
                <div className="bannerImage in-bl">
                    <img src={require("../images/banner.png")} />
                </div>
            </div>
        );
    }


}

export default DisplayImages;