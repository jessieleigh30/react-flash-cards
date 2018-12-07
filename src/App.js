import React, { Component } from 'react';
import './App.css';
import Cards from "./Cards";
import CardForm from "./CardForm";
import { Container, Header, Card, Button, CardDescription } from "semantic-ui-react";




class App extends Component {
  state = {
    cards: [
      {id: 1, frontQuestion: "Who painted the Sistine chapel ceiling?", backAnswer: "Michelangelo",},
      {id: 2, frontQuestion: "Picasso painting that was a reaction to the bombing of a town in WWII", backAnswer: "Guernica",},
      {id: 3, frontQuestion: "What art movement was Matisse associated with?", backAnswer: "Fauvism",},
    ],
  };

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData};
    this.setState({ cards: [card, ...this.state.cards], });
  };

  removeCard = (id) => {
    let {cards} = this.state;
    const remaining = cards.filter( cards => {
      return (cards.id !== id)
    });
    this.setState({ cards: [...remaining], });
   
  }

  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        
        <Header as= "h1"> React Flash Cards</Header>
        <br/>
        <CardForm add={this.addCard}/>
        <br/>
        <Cards varCards={this.state.cards} remove={this.removeCard}/>
        
      </Container>

    );
  }
}

export default App;
