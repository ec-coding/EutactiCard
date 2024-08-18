import React, { memo, useCallback, useContext, useEffect, useState } from 'react';
import { Card, FormControlLabel, Grid, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

const SearchElement = ({ elementName, context, toggleElement, weaknessData, resistanceData }) => {

    const handleChange = () => {
        if (context === "basicSearch") {
            toggleElement(elementName, context);
        } else if (context === "weakness") {
            weaknessData(elementName, context)
        } else if (context === "resistance") {
            resistanceData(elementName, context)
        }

    };

    const background = (() => {
        switch (elementName) {
            case 'grass':
                return 'linear-gradient(264deg, #F4D03F 0%, #77CC55 15%, #055a3b 100%)';
            case 'fire':
                return 'linear-gradient(270deg, rgb(255, 247, 93) 0%, rgb(254, 101, 13) 55%, rgb(243, 60, 4) 70%, rgb(218, 31, 5) 85%, rgb(161, 1, 0) 100%)';
            case 'water':
                return 'linear-gradient(250deg, #1366c5 0%, #2BC0E4 61%, #2a238d 100%)';
            case 'lightning':
                return 'linear-gradient(65deg, #db9a22 0%, #d5e25a 40%, #FAB536 100%)';
            case 'fighting':
                return 'linear-gradient(to left, rgb(182, 156, 103), rgb(153, 102, 0) 55%, rgb(112, 26, 0) 100%)';
            case 'psychic':
                return 'linear-gradient(to left, rgb(230, 140, 204) 0%, #a18cd1 25%, #1f1044 100%)';
            case 'colorless':
                return 'linear-gradient(to right, #AAAA99, #e4e4e4)';
            case 'darkness':
                return 'linear-gradient(to left, #3b3941 0%, #141414 100%)';
            case 'metal':
                return 'linear-gradient(65deg, #a6b6d4, #61534d, #e2d3d3, #61534d, #a6b6d4)';
            case 'fairy':
                return 'linear-gradient(to right, #e66465, #9198e5)';
            case 'dragon':
                return 'linear-gradient(to right, #BF953F 5%, #FCF6BA 15%, #B38728 35%, #FBF5B7 75%, #AA771C 100%)';
        }
    })();

    return (
        <Grid item lg={3.75}
            sx={{
                background: 'darkGrey',
                border: '2px solid lightGrey',
                borderRadius: '5px',
            }}
        >
            <Card
                sx={{
                    boxShadow: '1.5px 1.5px 0.5em black, inset 1.5px 1.5px 0 rgba(255, 255, 255, 0.75), inset -1.5px -1.5px 0 rgba(0, 0, 0, 0.75)',
                    margin: '1px',
                    paddingY: '5px',
                    borderRadius: '5px',
                    backgroundImage: `${background}`,
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between" // Aligns items to the left and right
                >
                    <Grid item
                        marginLeft="8px"
                        marginRight="12px"
                        sx={{ borderRadius: '50%' }}
                    >
                        <div className={`icon-${elementName} m-0`}></div>
                    </Grid>
                    <Grid item sx={{ marginRight: 'auto' }}>
                        <Typography
                            sx={{
                                color: 'white',
                                textShadow: '1.5px 1.5px 2px black',
                                fontSize: '14px'
                            }}
                            variant="body1"
                        >
                            {elementName.toUpperCase()}
                        </Typography>
                    </Grid>
                    <Checkbox
                        color="default"
                        sx={{ height: '20px' }}
                        onClick={handleChange}
                    />
                </Grid>
            </Card>
        </Grid>
    )
};

export default SearchElement
