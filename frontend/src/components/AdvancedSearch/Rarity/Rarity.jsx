import {
    Grid, Typography
} from '@mui/material';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import RarityEntry from './RarityEntry/RarityEntry';

const Rarity = ({ rarityData }) => {
    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Rarity
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        <AccordionItemPanel>
                            <Grid container justifyContent="center" alignContent="flex-start" py={4}>
                                <RarityEntry name="Common" icon="" rarityData={rarityData} />
                                <RarityEntry name="Uncommon" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo ex" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo EX" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo GX" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo Lv.X" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Prime" icon="" rarityData={rarityData} />
                                <RarityEntry name="LEGEND" icon="" rarityData={rarityData} />
                                <RarityEntry name="Ultra Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Double Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare BREAK" icon="" rarityData={rarityData} />
                                <RarityEntry name="ACE SPEC Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Amazing Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Classic Collection" icon="" rarityData={rarityData} />
                                <RarityEntry name="Hyper Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Illustration Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Radiant Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare ACE" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo Star" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo V" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo VMAX" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo VSTAR" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Prime" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Prism Star" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Rainbow" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Secret" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Shining" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Shiny" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Shiny GX" icon="" rarityData={rarityData} />
                                <RarityEntry name="Rare Ultra" icon="" rarityData={rarityData} />
                                <RarityEntry name="Shiny Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Shiny Ultra Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Special Illustration Rare" icon="" rarityData={rarityData} />
                                <RarityEntry name="Promo" icon="" rarityData={rarityData} />
                            </Grid>
                        </AccordionItemPanel>

                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Rarity
