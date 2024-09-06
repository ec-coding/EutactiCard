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

const AdvSearch = ({ setData, typeData, rarityData, hitPointData, retreatCostData, weaknessData, resistanceData }) => {

    return (
        <>
            <Accordion className="accordion-adv-search" allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <Grid className="accordion-adv-button">
                        <AccordionItemHeading>
                            <AccordionItemButton
                                style={{
                                    backgroundColor: 'rgb(224, 224, 224)',
                                    color: 'black',
                                    // border: '0.25em solid white',
                                    textAlign: 'center',
                                    fontSize: '18px'
                                }}>
                                Advanced Search
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </Grid>
                    <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                        <Accordion allowMultipleExpanded allowZeroExpanded>
                            <Expansion setData={setData} />
                            <CardType typeData={typeData} />
                            <Rarity rarityData={rarityData} />
                            <HitPoints hitPointData={hitPointData} />
                            <RetreatCost retreatCostData={retreatCostData} />
                            <Weakness weaknessData={weaknessData} />
                            <Resistance resistanceData={resistanceData} />
                        </Accordion>
                        <Grid py={4} sx={{
                    backgroundColor: 'rgb(224, 224, 224)',
                }}>
                </Grid>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default AdvSearch
