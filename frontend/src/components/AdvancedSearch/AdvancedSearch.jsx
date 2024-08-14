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
            <Accordion className="accordion-adv-search" allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <Grid className="accordion-adv-button">
                        <AccordionItemHeading>
                            <AccordionItemButton
                                style={{
                                    backgroundColor: 'rgb(24, 24, 24)',
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: '18px'
                                }}>
                                Advanced Search
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </Grid>
                    <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
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
