import React, { Component } from 'react';
import './App.css';
import Cards from "./Cards";
import CardForm from "./CardForm";
import { Container, Header, Card, Button } from "semantic-ui-react";



class App extends Component {
  state = {
    cards: [
      {id: 1, frontQuestion: "What is Jessica's dog's name?", backAnswer: "Baymax",},
      {id: 1, frontQuestion: "What is Jessica's cat's name?", backAnswer: "Cosmo",},
      {id: 1, frontQuestion: "How old is Baymax", backAnswer: "3",},
    ],
  };

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addCard = (cardData)=> {
    let card = { id: this.getId.id()...cardData,};
    this.setState({ cards: [card, ...this.state.cards]})
  };

  render() {
    return (
      <Container>
        
        <Header as= "h1"> React Flash Cards</Header>
        <br/>
        <CardForm add={this.addCard}/>
        <br/>
        <Card.Group> 
          <Cards varCards={this.state.cards}/>
        </Card.Group>
      </Container>

    );
  }
}

export default App;
