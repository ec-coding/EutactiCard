import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Typography, styled } from "@mui/material"
import './Card.scss';

const Card = ({ card }) => {

  const openCardInfo = () => {
    
  }

  //   const cardName = `${card.name}`
  const Img = styled('img')({
    width: '21.5vh',
    margin: '0.5em',
    borderRadius: '0.25em',
    boxShadow: '2.5px 2.5px 0.75em black, inset 2.5px 2.5px 0 rgba(255, 255, 255, 0.75), inset -2.5px -2.5px 0 rgba(0, 0, 0, 0.75)',
  });

  return (
    <Grid item>
      <Img src={card.images.small} key={card.id} data-bs-toggle="modal" alt="..." onClick={openCardInfo} />
    </Grid>
  )
}

export default Card