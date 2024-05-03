import {
    Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Rarity = () => {
    return (
        <Accordion
            className="Mui-Accordion"
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Rarity</Typography>
            </AccordionSummary>
            <AccordionDetails>

            </AccordionDetails>
        </Accordion>
    )
}

export default Rarity
