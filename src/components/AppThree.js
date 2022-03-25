import React, { useState, Component } from "react";
import foodData from "../foodData"

export default class AppThree extends Component {
    constructor() {
        super();
        this.state = {
            food: foodData.foods,
            userInput: ""
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}