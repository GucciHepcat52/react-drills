import React, { Component } from "react";
import foodData from "../foodData";

export default class AppThree extends Component {
  constructor() {
    super();
    this.state = {
      food: foodData.foods.map((food) => {
        return <h3 key={food}>{food}</h3>;
      }),
      foodFilteredArray: foodData.foods.map((food) => {
        return <h3 key={food}>{food}</h3>;
      })
    };
    this.filterFoods = this.filterFoods.bind(this);
  }

  filterFoods(event) {
    const filtered = this.state.food.filter((item) => item.props.children.includes(event.target.value))
    console.log(filtered)
    this.setState({foodFilteredArray: filtered.map((food) => {
        return <h3 key={food.key}>{food.props.children}</h3>;
    })})
  }

  render() {
    return (
      <div>
        <h2>App Three</h2>
        <input type="text" onChange={this.filterFoods}/>
        {this.state.foodFilteredArray}
      </div>
    );
  }
}
