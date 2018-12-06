import React from "react";
import { Card, } from 'semantic-ui-react';
const Cards = ({ varCards, }) => (
  // Semantic Card 
   <div>
      <ul>
         {varCards.map(v => (
            <li key={v.id}>{v.frontQuestion}</li>
         ))}
      </ul>
   </div>
)
export default Cards;










