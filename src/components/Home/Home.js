import React, { Component } from "react";
import GamesGrid from "../helper/GamesGrid";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    if (this.props.popularGames.length === 0) {
      this.props.getTopGames(40);
    }
  }
  render() {
    return (
      <div className="MainDiv">
        {this.props.popularGames.length > 0 && (
          <GamesGrid allGames={this.props.popularGames} />
        )}
      </div>
    );
  }
}

export default Home;
