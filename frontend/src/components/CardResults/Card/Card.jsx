import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Typography, styled } from "@mui/material"
import './Card.scss';

const Card = ({ card }) => {

  const openCardInfo = () => {

  }

  //   const cardName = `${card.name}`
  const Img = styled('img')({
    width: '21.5vh',
    borderRadius: '0.25em',
    // boxShadow: '2.5px 2.5px 0.75em black, inset 2.5px 2.5px 0 rgba(255, 255, 255, 0.75), inset -2.5px -2.5px 0 rgba(0, 0, 0, 0.75)',
  });

  const ImgShadow = () => (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0.39em',
        left: '36.5px',
        width: '76%',
        height: '8%',
        borderRadius: '0.25em',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        transform: 'skew(150deg)',
        zIndex: -1,
      }}
    />
  );

  // Lighten the color to mimic the actual color of a card's sides
  const CardThickener = () => (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0.44em',
        left: '31px',
        width: '193px',
        height: '266px',
        borderRadius: '0.25em',
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Shadow color
        zIndex: -1,
      }}
    />
  );

  return (
    <Grid item xs={2.375} container sx={{ position: 'relative' }} marginY={4.5} marginX={3.5}>
      <Grid item xs={12} sx={{ zIndex: '1' }}>
        <ImgShadow />
        <CardThickener />
        <Img src={card.images.small} key={card.id} data-bs-toggle="modal" alt="..." onClick={openCardInfo}
          sx={{
            width: '193px', // Adjust as needed
            height: '266px', // Adjust as needed
            // boxShadow: '0 0 10px 5px rgba(0, 0, 255, 0.5)', // Initial glow
            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition
            '&:hover': {
              boxShadow: '0 0 20px 10px rgba(0, 0, 255, 0.7)', // Expanded glow on hover
            },
            animation: 'glow 1.5s infinite alternate', // Continuous glow animation
          }}
        />
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          position: 'absolute',
          bottom: '-3.5em',
          left: 0,
          right: 0,
          overflow: 'visible', // Allows the SVG to overflow its container
        }}
      >
        <Grid item>
          <svg
            viewBox="-10 0 320 110"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: '280px', // Fixed width
              height: '110px', // Fixed height
              maxWidth: 'none', // Prevents max-width constraints
              display: 'block', // Removes any extra space below the SVG
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.85))',
            }}
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#a6b6d4', stopOpacity: 0.95 }} />
                <stop offset="25%" style={{ stopColor: '#61534d', stopOpacity: 0.95 }} />
                <stop offset="50%" style={{ stopColor: '#e2d3d3', stopOpacity: 0.95 }} />
                <stop offset="75%" style={{ stopColor: '#61534d', stopOpacity: 0.95 }} />
                <stop offset="100%" style={{ stopColor: '#a6b6d4', stopOpacity: 0.95 }} />
              </linearGradient>
            </defs>
            <ellipse
              cx="150"
              cy="40"
              rx="150"
              ry="40"
              fill="url(#grad1)"
              stroke="rgba(256, 256, 256, 0.75)"
              strokeWidth="2.5"
            />
          </svg>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Card