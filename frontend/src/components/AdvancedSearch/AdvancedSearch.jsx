import React from 'react'
import {
    Container,
    Grid,
    Typography,
} from '@mui/material';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Expansion from './Expansion/Expansion';
import CardType from './CardType/CardType';
import Rarity from './Rarity/Rarity';
import HitPoints from './HitPoints/HitPoints';
import RetreatCost from './RetreatCost/RetreatCost';
import Weakness from './Weakness/Weakness';
import Resistance from './Resistance/Resistance';
import './AdvancedSearch.scss'

const AdvSearch = () => {

    return (
        <>

            <Accordion allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Advanced Search
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel
                        sx={{
                            marginBottom: "1rem",
                        }}
                    >
                        <Accordion allowMultipleExpanded allowZeroExpanded>
                                <Grid>
                                    <Expansion />
                                    <CardType />
                                    <Rarity />
                                    <HitPoints />
                                    <RetreatCost />
                                    <Weakness />
                                    <Resistance />
                                </Grid>
                        </Accordion>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default AdvSearch
