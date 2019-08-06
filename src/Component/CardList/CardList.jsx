import React from 'react';
import './CardList.css';
import { Card } from '../Card/Card.jsx'

export const CardList = props => {
  return (
    <div className='card-list' >
    {
      props.users.map(user => (
        <Card key={user.id} user={user} />
      ))
    }
  </div>
  )
};