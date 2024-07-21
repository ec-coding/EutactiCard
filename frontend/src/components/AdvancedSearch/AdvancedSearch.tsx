import React from 'react'
import {
    Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Expansion from './Expansion';
import CardType from './CardType';
import Rarity from './Rarity';
import HitPoints from './HitPoints';
import RetreatCost from './RetreatCost';
import Weakness from './Weakness';
import Resistance from './Resistance';

const AdvSearch = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <Accordion
            className="Mui-Accordion Adv-Search"
            expanded={expanded}
            onChange={handleExpansion}
            // slots={{ transition: Fade as AccordionSlots['transition'] }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                '& .MuiPaper-root .MuiPaper-elevation .MuiPaper-rounded': { margin: '0' },
                // maxHeight: '562px', // Set maximum height to 100% of its containing element
                overflowY: 'auto',
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="AdvSearch-content"
                id="AdvSearch-header"
                sx={{
                    backgroundColor: 'rgb(24, 24, 24)',
                    border: '1px solid black'
                }}
            >
                <Typography color="white">Advanced Search</Typography>
            </AccordionSummary>
            <Expansion />
            <CardType />
            <Rarity />
            <HitPoints />
            <RetreatCost />
            <Weakness />
            <Resistance />
        </Accordion>
    )
}

export default AdvSearch
