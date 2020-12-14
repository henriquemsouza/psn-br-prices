import React, { Component } from "react";
import { push } from "react-router-redux";
import store from "../../redux/store";

import LazyFadeIn from "../helper/LazyFadeIn";
import ListOfPlatforms from "../helper/ListOfPlatforms";
import {
  Row,
  Col,
  Badge,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import "./GamesGrid.css";

class Game extends Component {
  handleClick(gameId) {
    store.dispatch(push(`/games/${gameId}`));
  }
  render() {
    const { title, image, price, discount, psPlusPrice } = this.props;
    const { platforms, gameContentType } = this.props.details;
    const imageHeight = parseInt(image.slice(-3), 10);
    const discountBadge = psPlusPrice ? (
      <Badge pill color="info" className="discountBadge">
        {discount}% PS+
      </Badge>
    ) : (
      <Badge pill color="primary" className="discountBadge">
        {discount}%
      </Badge>
    );

    return (
      <Card className="game">
        <LazyFadeIn height={imageHeight} offset={imageHeight * 1.5}>
          <CardImg className="cardImg" width="100%" src={image} alt={title} />
        </LazyFadeIn>


        <CardBody>
          <CardSubtitle>
            <strong>{title}</strong>
          </CardSubtitle>
          <small>{gameContentType}</small>
          <br />
          <ListOfPlatforms platforms={platforms} />
          {discount && <div>{discountBadge}</div>}
        </CardBody>

        <CardFooter className="customCardFooter">{price}</CardFooter>
      </Card>
    );
  }
}

const GamesGrid = (props) => {
  const { allGames } = props;
  const gamesGrid = allGames.map((game, i) => {
    return (
      <Col lg="2" md="4" sm="6" xs="12" key={`${game._id} ${i}`}>
        <Game {...game} />
      </Col>
    );
  });
  return <Row className="testediv">{gamesGrid}</Row>;
};

export default GamesGrid;
