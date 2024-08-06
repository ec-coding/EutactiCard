import React, { useState, useEffect, useContext } from 'react';
import './card.css';
import './Modal.css'

export default function Card({ card }) {

//   const cardName = `${card.name}`

  return (
    <>
        <img src={card.images.small} data-bs-toggle="modal" alt="..."
        key={card.id}
        />

    </>
  )
}