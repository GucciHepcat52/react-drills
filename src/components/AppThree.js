import React, { useState, Component } from "react";
import foodData from "../foodData"

export default class AppThree extends Component {
    constructor() {
        super();
        this.state = {
            food: foodData.foods,
        }
        this.findItem = this.findItem.bind(this);
    }

    findItem(value) {
        const foundItem = this.state.foodData.foods.filter((item) => item === value)
        return foundItem;
    }

    render() {
        return (
            <div>
                <h2>App Three</h2>
                <input type="text" onChange={(e) => this.findItem(e.target.value)}/>
                <h3>{this.findItem}</h3>
            </div>
        )
    }
}