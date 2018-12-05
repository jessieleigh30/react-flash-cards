import React, { Component } from 'react';
import './App.css';
import Cards from "./Cards";
import { Container, Header, Card, Button } from "semantic-ui-react";



class App extends Component {
  state = {
    cards: [
      {id: 1, frontQuestion: "What is Jessica's dog's name?", backAnswer: "Baymax",},
      {id: 1, frontQuestion: "What is Jessica's cat's name?", backAnswer: "Cosmo",},
      {id: 1, frontQuestion: "How old is Baymax", backAnswer: "3",},
    ],
  };
  render() {
    return (
      <Container>
        <Header as= "h1"> React Flash Cards</Header>
        <Card.Group> 
          <Cards varCards={this.state.cards}>
          </Cards>
        </Card.Group>
      </Container>

    );
  }
}

export default App;
