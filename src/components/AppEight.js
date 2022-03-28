import { React, Component } from "react";
import axios from "axios";

export default class AppEight extends Component {
  constructor() {
    super();
    this.state = {
      pikachu: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then((res) => {
        this.setState({ pikachu: res.data });
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>{this.state.pikachu.name}</h1>
        <h4>Weight: {this.state.pikachu.weight} pounds</h4>
      </div>
    );
  }
}
