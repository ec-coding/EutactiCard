import React, { useState } from 'react';
import {
    Grid,
    Typography,
} from '@mui/material';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpSet from './ExpSet/ExpSet';

const Expansion = ({ setData }) => {
    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Expansion
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Scarlet & Violet</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Shrouded Fable" exp='14' set='9' setID="sv6pt5" setData={setData} />
                                    <ExpSet name="Twilight Masquerade" exp='14' set='8' setID="sv6" setData={setData} />
                                    <ExpSet name="Temporal Fates" exp='14' set='7' setID="sv5" setData={setData} />
                                    <ExpSet name="Paldean Fates" exp='14' set='6' setID="sv4pt5" setData={setData} />
                                    <ExpSet name="Paradox Rift" exp='14' set='5' setID="sv4" setData={setData} />
                                    <ExpSet name="151" exp='14' set='4' setID="sv3pt5" setData={setData} />
                                    <ExpSet name="Obsidian Flames" exp='14' set='3' setID="sv3" setData={setData} />
                                    <ExpSet name="Paldea Evolved" exp='14' set='2' setID="sv2" setData={setData} />
                                    <ExpSet name="Scarlet & Violet" exp='14' set='1' setID="sv1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Sword & Shield</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Crown Zenith" exp='13' set='17' setID="swsh12pt5" setData={setData} />
                                    <ExpSet name="Silver Tempest" exp='13' set='16' setID="swsh12" setData={setData} />
                                    <ExpSet name="Lost Origin" exp='13' set='15' setID="swsh11" setData={setData} />
                                    <ExpSet name="Pokémon GO" exp='13' set='14' setID="pgo" setData={setData} />
                                    <ExpSet name="Astral Radiance" exp='13' set='13' setID="swsh10" setData={setData} />
                                    <ExpSet name="Brilliant Stars" exp='13' set='12' setID="swsh9" setData={setData} />
                                    <ExpSet name="Fusion Strike" exp='13' set='11' setID="swsh8" setData={setData} />
                                    <ExpSet name="Celebrations" exp='13' set='10' setID="cel25" setData={setData} />
                                    <ExpSet name="Evolving Skies" exp='13' set='9' setID="swsh7" setData={setData} />
                                    <ExpSet name="Chilling Reign" exp='13' set='8' setID="swsh6" setData={setData} />
                                    <ExpSet name="Battle Styles" exp='13' set='7' setID="swsh5" setData={setData} />
                                    <ExpSet name="Shining Fates" exp='13' set='6' setID="swsh45" setData={setData} />
                                    <ExpSet name="Vivid Voltage" exp='13' set='5' setID="swsh4" setData={setData} />
                                    <ExpSet name="Champion's Path" exp='13' set='4' setID="swsh35" setData={setData} />
                                    <ExpSet name="Darkness Ablaze" exp='13' set='3' setID="swsh3" setData={setData} />
                                    <ExpSet name="Rebel Clash" exp='13' set='2' setID="swsh2" setData={setData} />
                                    <ExpSet name="Sword & Shield" exp='13' set='1' setID="swsh1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Sun & Moon</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Cosmic Eclipse" exp='12' set='16' setID="sm12" setData={setData} />
                                    <ExpSet name="Hidden Fates" exp='12' set='15' setID="sm115" setData={setData} />
                                    <ExpSet name="Unified Minds" exp='12' set='14' setID="sm11" setData={setData} />
                                    <ExpSet name="Unbroken Bonds" exp='12' set='13' setID="sm10" setData={setData} />
                                    <ExpSet name="Detective Pikachu" exp='12' set='12' setID="det1" setData={setData} />
                                    <ExpSet name="Team Up" exp='12' set='11' setID="sm9" setData={setData} />
                                    <ExpSet name="Lost Thunder" exp='12' set='10' setID="sm8" setData={setData} />
                                    <ExpSet name="Dragon Majesty" exp='12' set='9' setID="sm75" setData={setData} />
                                    <ExpSet name="Celestial Storm" exp='12' set='8' setID="sm7" setData={setData} />
                                    <ExpSet name="Forbidden Light" exp='12' set='7' setID="sm6" setData={setData} />
                                    <ExpSet name="Ultra Prism" exp='12' set='6' setID="sm5" setData={setData} />
                                    <ExpSet name="Crimson Invasion" exp='12' set='5' setID="sm4" setData={setData} />
                                    <ExpSet name="Shining Legends" exp='12' set='4' setID="sm35" setData={setData} />
                                    <ExpSet name="Burning Shadows" exp='12' set='3' setID="sm3" setData={setData} />
                                    <ExpSet name="Guardians Rising" exp='12' set='2' setID="sm2" setData={setData} />
                                    <ExpSet name="Sun & Moon" exp='12' set='1' setID="sm1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>XY</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Evolutions" exp='11' set='15' setID="xy12" setData={setData} />
                                    <ExpSet name="Steam Siege" exp='11' set='14' setID="xy11" setData={setData} />
                                    <ExpSet name="Fates Collide" exp='11' set='13' setID="xy10" setData={setData} />
                                    <ExpSet name="Generations" exp='11' set='12' setID="g1" setData={setData} />
                                    <ExpSet name="BREAKpoint" exp='11' set='11' setID="xy9" setData={setData} />
                                    <ExpSet name="BREAKthrough" exp='11' set='10' setID="xy8" setData={setData} />
                                    <ExpSet name="Ancient Origins" exp='11' set='9' setID="xy7" setData={setData} />
                                    <ExpSet name="Roaring Skies" exp='11' set='8' setID="xy6" setData={setData} />
                                    <ExpSet name="Double Crisis" exp='11' set='7' setID="dc1" setData={setData} />
                                    <ExpSet name="Primal Clash" exp='11' set='6' setID="xy5" setData={setData} />
                                    <ExpSet name="Phantom Forces" exp='11' set='5' setID="xy4" setData={setData} />
                                    <ExpSet name="Furious Fists" exp='11' set='4' setID="xy3" setData={setData} />
                                    <ExpSet name="Flashfire" exp='11' set='3' setID="xy2" setData={setData} />
                                    <ExpSet name="XY" exp='11' set='2' setID="xy1" setData={setData} />
                                    <ExpSet name="Kalos Starter Set" exp='11' set='1' setID="xy0" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Black & White</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Legendary Treasures" exp='10' set='12' setID="bw11" setData={setData} />
                                    <ExpSet name="Plasma Blast" exp='10' set='11' setID="bw10" setData={setData} />
                                    <ExpSet name="Plasma Freeze" exp='10' set='10' setID="bw9" setData={setData} />
                                    <ExpSet name="Plasma Storm" exp='10' set='9' setID="bw8" setData={setData} />
                                    <ExpSet name="Boundaries Crossed" exp='10' set='8' setID="bw7" setData={setData} />
                                    <ExpSet name="Dragon Vault" exp='10' set='7' setID="dv1" setData={setData} />
                                    <ExpSet name="Dragons Exalted" exp='10' set='6' setID="bw6" setData={setData} />
                                    <ExpSet name="Dark Explorers" exp='10' set='5' setID="bw5" setData={setData} />
                                    <ExpSet name="Next Destinies" exp='10' set='4' setID="bw4" setData={setData} />
                                    <ExpSet name="Noble Victories" exp='10' set='3' setID="bw3" setData={setData} />
                                    <ExpSet name="Emerging Powers" exp='10' set='2' setID="bw2" setData={setData} />
                                    <ExpSet name="Black & White" exp='10' set='1' setID="bw1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Call of Legends</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Call of Legends" exp='9' set='1' setID="col1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>HeartGold & SoulSilver</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Triumphant" exp='8' set='4' setID="hgss4" setData={setData} />
                                    <ExpSet name="Undaunted" exp='8' set='3' setID="hgss3" setData={setData} />
                                    <ExpSet name="Unleashed" exp='8' set='2' setID="hgss2" setData={setData} />
                                    <ExpSet name="HeartGold & SoulSilver" exp='8' set='1' setID="hgss1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Platinum</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Arceus" exp='7' set='4' setID="pl4" setData={setData} />
                                    <ExpSet name="Supreme Victors" exp='7' set='3' setID="pl3" setData={setData} />
                                    <ExpSet name="Rising Rivals" exp='7' set='2' setID="pl2" setData={setData} />
                                    <ExpSet name="Platinum" exp='7' set='1' setID="pl1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Diamond & Pearl</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Stormfront" exp='6' set='7' setID="dp7" setData={setData} />
                                    <ExpSet name="Legends Awakened" exp='6' set='6' setID="dp6" setData={setData} />
                                    <ExpSet name="Majestic Dawn" exp='6' set='5' setID="dp5" setData={setData} />
                                    <ExpSet name="Great Encounters" exp='6' set='4' setID="dp4" setData={setData} />
                                    <ExpSet name="Secret Wonders" exp='6' set='3' setID="dp3" setData={setData} />
                                    <ExpSet name="Mysterious Treasures" exp='6' set='2' setID="dp2" setData={setData} />
                                    <ExpSet name="Diamond & Pearl" exp='6' set='1' setID="dp1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>EX</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="EX Power Keepers" exp='5' set='16' setID="ex16" setData={setData} />
                                    <ExpSet name="EX Dragon Frontiers" exp='5' set='15' setID="ex15" setData={setData} />
                                    <ExpSet name="EX Crystal Guardians" exp='5' set='14' setID="ex14" setData={setData} />
                                    <ExpSet name="EX Holon Phantoms" exp='5' set='13' setID="ex13" setData={setData} />
                                    <ExpSet name="EX Legend Maker" exp='5' set='12' setID="ex12" setData={setData} />
                                    <ExpSet name="EX Delta Species" exp='5' set='11' setID="ex11" setData={setData} />
                                    <ExpSet name="EX Unseen Forces" exp='5' set='10' setID="ex10" setData={setData} />
                                    <ExpSet name="EX Emerald" exp='5' set='9' setID="ex9" setData={setData} />
                                    <ExpSet name="EX Deoxys" exp='5' set='8' setID="ex8" setData={setData} />
                                    <ExpSet name="EX Team Rocket Returns" exp='5' set='7' setID="ex7" setData={setData} />
                                    <ExpSet name="EX FireRed & LeafGreen" exp='5' set='6' setID="ex6" setData={setData} />
                                    <ExpSet name="EX Hidden Legends" exp='5' set='5' setID="ex5" setData={setData} />
                                    <ExpSet name="EX Team Magma vs Team Aqua" exp='5' set='4' setID="ex4" setData={setData} />
                                    <ExpSet name="EX Dragon" exp='5' set='3' setID="ex3" setData={setData} />
                                    <ExpSet name="EX Sandstorm" exp='5' set='2' setID="ex2" setData={setData} />
                                    <ExpSet name="EX Ruby & Sapphire" exp='5' set='1' setID="ex1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>e-Card</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Skyridge" exp='4' set='3' setID="ecard3" setData={setData} />
                                    <ExpSet name="Aquapolis" exp='4' set='2' setID="ecard2" setData={setData} />
                                    <ExpSet name="Expedition Base Set" exp='4' set='1' setID="ecard1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Legendary Collection</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Legendary Collection" exp='3' set='1' setID="base6" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Neo</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Neo Destiny" exp='2' set='4' setID="neo4" setData={setData} />
                                    <ExpSet name="Neo Revelation" exp='2' set='3' setID="neo3" setData={setData} />
                                    <ExpSet name="Neo Discovery" exp='2' set='2' setID="neo2" setData={setData} />
                                    <ExpSet name="Neo Genesis" exp='2' set='1' setID="neo1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Original</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Gym Challenge" exp='1' set='7' setID="gym2" setData={setData} />
                                    <ExpSet name="Gym Heroes" exp='1' set='6' setID="gym1" setData={setData} />
                                    <ExpSet name="Team Rocket" exp='1' set='5' setID="base5" setData={setData} />
                                    <ExpSet name="Base Set 2" exp='1' set='4' setID="base4" setData={setData} />
                                    <ExpSet name="Fossil" exp='1' set='3' setID="base3" setData={setData} />
                                    <ExpSet name="Jungle" exp='1' set='2' setID="base2" setData={setData} />
                                    <ExpSet name="Base" exp='1' set='1' setID="base1" setData={setData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Expansion
