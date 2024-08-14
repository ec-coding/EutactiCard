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

const Rarity = () => {
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
                            <Grid container justifyContent="center" alignContent="flex-start">
                                <RarityEntry name="Common" icon="https://static.tcgcollector.com/content/images/8a/1c/2a/8a1c2ab1fde8fd743c2e5803829f112cdf3442ad808ed361ed6665ed03759915.svg" />
                                <RarityEntry name="Uncommon" icon="https://static.tcgcollector.com/content/images/cf/b2/69/cfb26909969e41a2dbd881b877164cf87836dc1de4eb05d72883da3c65b2209f.svg" />
                                <RarityEntry name="Rare" icon="https://static.tcgcollector.com/content/images/cd/95/31/cd95311030f0ad690306ffad615d50823c4c4f1d97dbc90d4aa98bc0fab21822.svg" />
                                <RarityEntry name="Rare Holo" icon="https://static.tcgcollector.com/content/images/39/26/4d/39264dba06e81707203520d206a7a2563f6560d21393399a76af9776e0848870.svg" />
                                <RarityEntry name="Rare Holo EX" icon="https://static.tcgcollector.com/content/images/7c/58/73/7c587313b20e8401eb9fd8cff47116b0a73eccf73755c84f92125fb30f5d7849.svg" />
                                <RarityEntry name="Rare Holo GX" icon="https://static.tcgcollector.com/content/images/7c/58/73/7c587313b20e8401eb9fd8cff47116b0a73eccf73755c84f92125fb30f5d7849.svg" />
                                <RarityEntry name="Rare Holo Lv.X" icon="https://static.tcgcollector.com/content/images/7c/58/73/7c587313b20e8401eb9fd8cff47116b0a73eccf73755c84f92125fb30f5d7849.svg" />
                                <RarityEntry name="Rare Prime" icon="https://static.tcgcollector.com/content/images/7c/58/73/7c587313b20e8401eb9fd8cff47116b0a73eccf73755c84f92125fb30f5d7849.svg" />
                                <RarityEntry name="LEGEND" icon="https://static.tcgcollector.com/content/images/7c/58/73/7c587313b20e8401eb9fd8cff47116b0a73eccf73755c84f92125fb30f5d7849.svg" />
                                <RarityEntry name="Ultra Rare" icon="https://static.tcgcollector.com/content/images/6e/a2/28/6ea228dec9fb712be5dd25f49443f43bb113e42dca8267a3068f9c3746ca04e8.svg" />
                                <RarityEntry name="Double Rare" icon="https://static.tcgcollector.com/content/images/b9/16/32/b91632f55383ed26dcba80d988184440ee618a395fe6a79a931fec86ad70e028.svg" />
                                <RarityEntry name="Rare BREAK" icon="https://static.tcgcollector.com/content/images/95/33/1d/95331d7aa894442be2ecee63365a492998706ee5bdedc834daf6b8a3769fc1cf.svg" />
                            </Grid>
                        </AccordionItemPanel>

                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Rarity
