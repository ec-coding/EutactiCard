import React from 'react'
import {
    Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Expansion from './AdvancedSearch/Expansion';
import CardType from './AdvancedSearch/CardType';
import Rarity from './AdvancedSearch/Rarity';

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
                '& .MuiPaper-root .MuiPaper-elevation .MuiPaper-rounded': { margin: '0' }
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
                <Typography color="white">Expand All</Typography>
            </AccordionSummary>
            <Expansion />
            <CardType />
            <Rarity />
        </Accordion>
    )
}

export default AdvSearch
