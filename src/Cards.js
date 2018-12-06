import React from "react";
import { Card, Button } from 'semantic-ui-react';
const Cards = ({ id, varCards, remove }) => (
   // Semantic Card 
   <Card.Group>

      {
         varCards.map(v => (
            <Card 
               key={v.id}
               {...v} 
               remove={remove}
            >
               <Card.Content>
                  <Card.Header> Question </Card.Header>
                  <Card.Description>
                     {v.frontquestion}
                  </Card.Description>

               </Card.Content>

               <Card.Content extra>
                  <div className='ui two buttons'>
                     <Button basic color='green'>
                        Edit
                   </Button>
                     {console.log(v.id)}
                     <Button basic color='red' onClick={() => remove(id)}>
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










