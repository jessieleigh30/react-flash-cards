import React from "react";
import { Card, Button } from 'semantic-ui-react';
const Cards = ({  varCards, remove }) => (
   // Semantic Card 
   <Card.Group>

      {
         varCards.map(card => (
            <Card 
               key={card.id}
               {...card} 
               remove={remove}
            >
               <Card.Content>
                  <Card.Header> Question </Card.Header>
                  <Card.Description>
                     {card.frontQuestion}
                  </Card.Description>

               </Card.Content>

               <Card.Content extra>
                  <div className='ui two buttons'>
                     <Button basic color='green'>
                        Edit
                   </Button>
                     {console.log(card.id)}
                     <Button basic color='red' onClick={() => remove(card.id)}>
                        Delete
                  </Button>
                  </div>
               </Card.Content>
            </Card>
         ))
      }

   </Card.Group>
);
export default Cards;










