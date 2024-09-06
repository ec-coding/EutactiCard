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
                                <RarityEntry name="Common" icon="common" rarityData={rarityData} />
                                <RarityEntry name="Uncommon" icon="uncommon" rarityData={rarityData} />
                                <RarityEntry name="Rare" icon="rare" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo" icon="rareHolo" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo ex" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo EX" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo GX" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo Lv.X" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Hyper Rare" icon="hyperRare" rarityData={rarityData} />
                                <RarityEntry name="ACE SPEC Rare" icon="aceSpec" rarityData={rarityData} />
                                <RarityEntry name="Ultra Rare" icon="ultraRare" rarityData={rarityData} />
                                <RarityEntry name="Double Rare" icon="doubleRare" rarityData={rarityData} />
                                <RarityEntry name="Rare Prime" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="LEGEND" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare BREAK" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Classic Collection" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Radiant Rare" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare ACE" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo Star" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo V" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo VMAX" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Holo VSTAR" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Prime" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Prism Star" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Shining" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Shiny" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Shiny GX" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Ultra" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Rare Rainbow" icon="rareSecret" rarityData={rarityData} />
                                <RarityEntry name="Rare Secret" icon="rareSecret" rarityData={rarityData} />
                                <RarityEntry name="Shiny Rare" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Shiny Ultra Rare" icon="rareUltra" rarityData={rarityData} />
                                <RarityEntry name="Illustration Rare" icon="illustrationRare" rarityData={rarityData} />
                                <RarityEntry name="Special Illustration Rare" icon="specialIllustrationRare" rarityData={rarityData} />
                                <RarityEntry name="Amazing Rare" icon="amazingRare" rarityData={rarityData} />
                                <RarityEntry name="Promo" icon="promo" rarityData={rarityData} />
                            </Grid>
                        </AccordionItemPanel>

                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Rarity
