import React from "react";
import Constants from "./constants";

class DisplayFood extends React.Component {

    processFoodData(foodData) {
        var weekdayList = [], weekendList = [];

        // In order lunch, breakfast and dinner
        for(var food in foodData) {
            if(food !== "basic") {
                var foodVal = foodData[food];
                if(foodVal.weekdays) {
                    var weekdayVal = foodVal.weekdays;
                    if(weekdayVal == "0") {
                        weekdayList.push("None");
                    } else if(weekdayVal == "1") {
                        weekdayList.push("Only Veg.");
                    } else if(weekdayVal == "2") {
                        weekdayList.push("Both Veg. & Non-veg.");
                    }
                }
                if(foodVal.weekend) {
                    var weekendVal = foodVal.weekend;
                    if(weekendVal == "0") {
                        weekendList.push("None");
                    } else if(weekendVal == "1") {
                        weekendList.push("Only Veg.");
                    } else if(weekendVal == "2") {
                        weekendList.push("Both Veg. & Non-veg.");
                    }
                }
            }
        }

        return {
            weekdayList: weekdayList,
            weekendList: weekendList
        }
    }

    showBreakfast(breakfast) {

        return(
            <div className="foodCat">
                <div className="foodImage">
                    <img src={require("../images/breakfast.png")} />
                </div>
                <div className="foodDetails">
                    <div className="meal">Breakfast</div>
                    <div className="option">{breakfast}</div>
                </div>
            </div>
        );
    }

    showLunch(lunch) {

        return(
            <div className="foodCat">
                <div className="foodImage">
                    <img src={require("../images/lunch.png")} />
                </div>
                <div className="foodDetails">
                    <div className="meal">Lunch</div>
                    <div className="option">{lunch}</div>
                </div>
            </div>
        );
    }

    showDinner(dinner) {

        return(
            <div className="foodCat">
                <div className="foodImage">
                    <img src={require("../images/dinner.png")} />
                </div>
                <div className="foodDetails">
                    <div className="meal">Dinner</div>
                    <div className="option">{dinner}</div>
                </div>
            </div>
        );
    }

    render() {

        var foodData = this.props.food;
        if(!!foodData) {

            var foodLists = this.processFoodData(foodData);
            var weekdayList = foodLists.weekdayList;
            var weekendList = foodLists.weekendList;

            return (
                <div className="foodContainer categoryHeading">
                    <div className="foodTitle title">{Constants.FOOD.FOOD_TITLE}</div>
                    <div className="weekday">
                        <div className="weekdayTitle foodSubTitle">{Constants.FOOD.WEEKDAYS}</div>
                        {this.showBreakfast(weekdayList[1])}
                        {this.showLunch(weekdayList[0])}
                        {this.showDinner(weekdayList[2])}
                    </div>
                    <div className="weekend">
                        <div className="weekendTitle foodSubTitle">{Constants.FOOD.WEEKENDS}</div>
                        {this.showBreakfast(weekendList[1])}
                        {this.showLunch(weekendList[0])}
                        {this.showDinner(weekendList[2])}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default DisplayFood;