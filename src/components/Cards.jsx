import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Explore the hidden desert deep inside Africa"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-7.jpg"
              text="Night of the moon"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="People of the city"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Living above the economy"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
