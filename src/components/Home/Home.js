import React, { Component } from "react";
import GamesGrid from "../helper/GamesGrid";
import "./Home.css";
import InputSearchAmount from "../Home/InputSearchAmount";

class Home extends Component {
  componentDidMount() {
    if (this.props.popularGames.length === 0) {
      this.props.getTopGames(20);
    }
  }
  render() {
    return (
      <div className="MainDiv">
        <InputSearchAmount {...this.props} />

        {this.props.popularGames.length > 0 && (
          <GamesGrid allGames={this.props.popularGames} />
        )}
      </div>
    );
  }
}

export default Home;
