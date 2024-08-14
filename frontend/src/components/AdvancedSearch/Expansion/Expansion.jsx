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

const Expansion = () => {
    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Expansion
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                    <Accordion className="accordion-adv-inner" allowMultipleExpanded allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Scarlet & Violet</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Temporal Fates" icon="https://static.tcgcollector.com/content/content/images/01/ad/f3/01adf304feae3a089ca857a8e65faff4f49c26aca62b5604232a78fad660be8d.png" logo="https://tcg.pokemon.com/assets/img/sv-expansions/temporal-forces/logo/en-us/sv5-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Paldean Fates" icon="https://static.tcgcollector.com/content/content/images/96/3e/30/963e305d2bd496dd5098f5f46abe9e45c92dd0e70c1cce24216dd350b03b36d1.png" logo="https://tcg.pokemon.com/assets/img/sv-expansions/paldean-fates/logo/en-us/sv04pt5-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Paradox Rift" icon="https://static.tcgcollector.com/content/images/b3/b5/72/b3b572bfa9e75d02399fbddd0fd0e9d1a7b7085535807b5b268e718f5e50afde.png" logo="https://tcg.pokemon.com/assets/img/sv-expansions/paradox-rift/logo/en-us/sv04-logo-cmyk.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="151" icon="https://static.tcgcollector.com/content/images/3d/ac/2a/3dac2ab147d3f8eb932d76f1c4cb6d268fabfa01682d6ed94fc77eee5cd73f4a.png" logo="https://tcg.pokemon.com/assets/img/sv-expansions/151/logo/en-us/logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Obsidian Flames" icon="https://static.tcgcollector.com/content/images/23/ed/37/23ed37956a839f38548ea84b416ae122664e4561328bf2f7f85d318fe4880982.png" logo="https://tcg.pokemon.com/assets/img/sv-expansions/obsidian-flames/logo/en-us/sv03-header-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Paldea Evolved" icon="https://static.tcgcollector.com/content/images/0f/ed/2a/0fed2ae3bdeb65b2ea540a2c5b01bb245f58bc5c2d5d46630e716907d8729efc.png" logo="https://tcg.pokemon.com/assets/img/sv-expansions/paldea-evolved/logo/en-us/sv02-header-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Scarlet & Violet" icon="https://static.tcgcollector.com/content/images/2d/2e/d0/2d2ed03f7dec34b14f3d98e2ec9230714cf1590ba71a93596a252941bfd49d49.png" logo="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/logo/en-us/sv01-logo.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Sword & Shield</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Crown Zenith" icon="https://static.tcgcollector.com/content/images/55/01/2f/55012fdc1c11c3efe2c53605458103e760870fefa5e6e9d4ba667416b6a8b40e.png" logo="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/logos/en-us/swsh12pt5-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Silver Tempest" icon="https://static.tcgcollector.com/content/images/ee/3d/e9/ee3de90de9b0f6da7a497608e57e567354bd1522f97cf0d37a71bc08cd970a0a.png" logo="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/global/logos/en-us/swsh12-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Lost Origin" icon="https://static.tcgcollector.com/content/images/a3/cb/a8/a3cba8ee36c377d20c366ca8d449906e6fedee5197b96ec86544257f7c18de49.png" logo="https://tcg.pokemon.com/assets/img/expansions/lost-origin/global/logos/en-us/swsh11-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Pokémon GO" icon="https://static.tcgcollector.com/content/images/7f/5f/e0/7f5fe07f574528f5d136cbc9ca2211d5f20713ccc6f9cde3f41b88d2f9b42da0.png" logo="https://tcg.pokemon.com/assets/img/expansions/tcg-go/global/logos/en-us/swsh10Pt5-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Astral Radiance" icon="https://static.tcgcollector.com/content/images/79/cd/4a/79cd4af1a84ba11aa614b055b8a0f7828b0d545ef733d37fb72d23f8d181f46b.png" logo="https://tcg.pokemon.com/assets/img/expansions/astral-radiance/global/logos/en-us/swsh10-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Brilliant Stars" icon="https://static.tcgcollector.com/content/images/0c/46/74/0c467460faa2a9df9c788878676c080073a5066e32ab88670d8490eaf0c68070.png" logo="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/global/logos/en-us/swsh09-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Fusion Strike" icon="https://static.tcgcollector.com/content/images/1a/de/f8/1adef8b0a3cd040ada83e63144aa24e496af214e9b477531e1d4b72eb9c35947.png" logo="https://tcg.pokemon.com/assets/img/expansions/fusion-strike/global/logos/en-us/swsh08-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Celebrations" icon="https://static.tcgcollector.com/content/images/cd/aa/7a/cdaa7aa724d1a510b1f3295c5bf37ad671875572b381972b489838b20c793477.png" logo="https://tcg.pokemon.com/assets/img/expansions/celebrations/global/logos/en-us/celebrations-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Evolving Skies" icon="https://static.tcgcollector.com/content/images/85/6c/8e/856c8e145b518567ef2df68505d8546e2300ba4fe07b46929c4d1c0b7106d3dc.png" logo="https://tcg.pokemon.com/assets/img/expansions/evolving-skies/global/logos/en-us/swsh7-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Chilling Reign" icon="https://static.tcgcollector.com/content/images/57/8e/58/578e58fe911c9169616df2423e8cbe3da5d8aa908dfdf1274c9f0d08034677c7.png" logo="https://tcg.pokemon.com/assets/img/expansions/chilling-reign/global/logos/en-us/swsh6-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Battle Styles" icon="https://static.tcgcollector.com/content/images/fd/14/8d/fd148db3fc66ff5c129be9bc34c8ab21d5962dae4ea4d1bc0843754d64efabf7.png" logo="https://tcg.pokemon.com/assets/img/expansions/battle-styles/global/logos/en-us/swsh5-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Shining Fates" icon="https://static.tcgcollector.com/content/images/3a/f6/22/3af622924274e89e6464e97f38d5abe0edf59e2749e3821568b30b2e6f6b06aa.png" logo="https://tcg.pokemon.com/assets/img/expansions/shining-fates/global/logos/en-us/swsh45-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Vivid Voltage" icon="https://static.tcgcollector.com/content/images/1e/d6/a9/1ed6a924327828ad9d10f7a97c2a792174f5e4a86e1698939c93120344c2d7c0.png" logo="https://tcg.pokemon.com/assets/img/expansions/vivid-voltage/global/logos/en-us/vivid-voltage.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Champion's Path" icon="https://static.tcgcollector.com/content/images/5f/17/8d/5f178d80893a1f80f006ba078370abc9ad8d760ee7275b3472a30730fc76fa5e.png" logo="https://tcg.pokemon.com/assets/img/expansions/champions-path/global/logos/en-us/swsh35-logo.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Darkness Ablaze" icon="https://static.tcgcollector.com/content/images/14/22/8e/14228e6771c9c1d9ba54b643b9d743e4f35ec8c04a3a7d9edfef43dc08e03b6b.png" logo="https://tcg.pokemon.com/assets/img/expansions/darkness-ablaze/global/logos/en-us/darkness-ablaze.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Rebel Clash" icon="https://static.tcgcollector.com/content/images/a1/43/91/a14391cb7b7b0af7ba29875216f341fc56f151ac59efdccd4783b4c9f33930ce.png" logo="https://tcg.pokemon.com/assets/img/expansions/rebel-clash/global/logos/en-us/rebel-clash.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Sword & Shield" icon="https://static.tcgcollector.com/content/images/6f/95/74/6f9574b5ae81e367ea42ca5616ed1caca4d3cb31e95cd5dbfa52d09c12818288.png" logo="https://tcg.pokemon.com/assets/img/global/logos/en-us/sword-shield.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Sun & Moon</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Cosmic Eclipse" icon="https://static.tcgcollector.com/content/images/bb/ac/a6/bbaca6800b5302e433e4d7dba7bb31bc66ed7e7f4723b748efbbba7f89dc8e69.png" logo="https://www.pokemontcg.com/assets/cosmic-eclipse/img/logos/en-us/cosmic-eclipse.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Hidden Fates" icon="https://static.tcgcollector.com/content/images/12/5b/f8/125bf80a4a380a112eaff3c9c81cc5e4a70c4ede2ea4881884620b1d65b4b20b.png" logo="https://www.pokemontcg.com/assets/hidden-fates/img/logos/en-us/hidden-fates.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Unified Minds" icon="https://static.tcgcollector.com/content/images/f1/7d/d9/f17dd9ae8920d4cd3912e844e89de7dc00a956100e011cc3c58b72a350dc541d.png" logo="https://www.pokemontcg.com/assets/unified-minds/img/logos/en-us/unified-minds.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Unbroken Bonds" icon="https://static.tcgcollector.com/content/images/15/e7/da/15e7da38b572eab4d2f688527fe40ba118fcb03baee06b1f5bc0ff9b332a5526.png" logo="https://www.pokemontcg.com/assets/unbroken-bonds/img/logos/en-us/unbroken-bonds.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Detective Pikachu" icon="https://static.tcgcollector.com/content/images/a1/e2/5a/a1e25ac3d588f93053c419184d23e573cab5db4df26243e89d1bfb7aa5daa571.png" logo="https://www.pokemontcg.com/assets/detective-pikachu/img/logos/en-us/detective-pikachu.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Team Up" icon="https://static.tcgcollector.com/content/images/64/44/ec/6444ecd6d58adfaef2b81b82fceca4834f83cf8088e8f158d010adcaa04f29b5.png" logo="https://www.pokemontcg.com/assets/team-up/img/logos/en-us/team-up.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Lost Thunder" icon="https://static.tcgcollector.com/content/images/f1/d5/6f/f1d56f7ea3600d551483c017412d09decaca86b169abc5d70bcd1ae44f791c11.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm08/sm08_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Dragon Majesty" icon="https://static.tcgcollector.com/content/images/35/ac/f6/35acf63febee4f15f3c3d4ecb218b17a02f2039038672a6a918c2c6a4c7b3510.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm075/sm075_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Celestial Storm" icon="https://static.tcgcollector.com/content/images/9e/69/64/9e6964138ed9999f7598f061a69c642de89fe0a31285c0d0806e765cfe100d5c.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm07/sm07_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Forbidden Light" icon="https://static.tcgcollector.com/content/images/8e/c8/25/8ec825de9ffcee615c26d3a4eb8afeaa73439af9b97fc6da62e15d6c86615b01.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm06/sm06_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Ultra Prism" icon="https://static.tcgcollector.com/content/images/51/c8/55/51c8559e57e7eca80bae4e8e3f115316c8e5f92756f6d1b5fc354bd86c922773.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm05/sm05_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Crimson Invasion" icon="https://static.tcgcollector.com/content/images/e6/98/ae/e698aebc0ff644c0840d04e198756bb71285773b9675131e84e3e733a87d29d5.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm04/sm04_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Shining Legends" icon="https://static.tcgcollector.com/content/images/57/09/fa/5709fa65aa96a20f9402e0a0755fea3c9487bc480760d0e0c75910ddc781d92d.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm035/sm035_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Burning Shadows" icon="https://static.tcgcollector.com/content/images/cd/cc/73/cdcc73cf3592b8a37f3641b167dfd9f002214fd3a59ee32392879889b5c66fec.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm03/sm03_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Guardians Rising" icon="https://static.tcgcollector.com/content/images/f8/57/fd/f857fd7a4b1f8accf032f86dfec0bbee83c579dbc998b56af21690e9434506ee.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm02/sm02_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Sun & Moon" icon="https://static.tcgcollector.com/content/images/9e/6c/42/9e6c42c2eacd4e4be3c174b291cdeb64a9b0e6d3b986413af13dcbcb0630a5cd.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/sm_series/sm01/sm01_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>XY</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Evolutions" icon="https://static.tcgcollector.com/content/images/c6/47/6a/c6476aaa96bc87cbf5a387e59b094f5f6b39fd1009f724b5d08cab8e70fc4da2.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy12/xy12-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Steam Siege" icon="https://static.tcgcollector.com/content/images/4d/91/34/4d9134bc1ee19c7f1200fa872b87b3cf7948d615215c080522a63ec28914e674.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy11/xy11-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Fates Collide" icon="https://static.tcgcollector.com/content/images/28/32/14/28321425c3a00aa6a3b733ace97eae9422a070281952a94abbd915fa8fe098f6.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy10/xy10-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Generations" icon="https://static.tcgcollector.com/content/images/72/fe/be/72febee2041cbbcda0d56eedf8ad9dcec82f87cab40640f7e4d945b5a7018d6c.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/generations/generations-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="BREAKpoint" icon="https://static.tcgcollector.com/content/images/0d/a0/65/0da06530e1fc70348b19a12f0bcfb5048745975b2b30dbd6448aa03700a4150f.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy09/xy09-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="BREAKthrough" icon="https://static.tcgcollector.com/content/images/20/36/74/203674164d02af990e66fcdc425d32072b72508bd8cf20cb11104a751dc6c700.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy08/xy08-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Ancient Origins" icon="https://static.tcgcollector.com/content/images/2e/ff/3a/2eff3a34a1ebff138db3e01a413f0794b61b91e9e93ef2b5850aa94c40db5ec9.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy07/xy07-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Roaring Skies" icon="https://static.tcgcollector.com/content/images/c0/06/d3/c006d3fd666d1fe9ba4fb8faa4003921f7847a59eff8c7bf4aeee35bc9da4a15.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy06/xy06-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Double Crisis" icon="https://static.tcgcollector.com/content/images/ea/48/7b/ea487b0105ab0a110f9f62148344ba7e3b9b25c50034823085c5f0934c745414.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/double-crisis/double-crisis-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Primal Clash" icon="https://static.tcgcollector.com/content/images/0e/2c/cb/0e2ccb69f8ddaafb5efc6a97a2cfcbc92d04b6666a1bbea82efc8567c9ba0d71.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy05/xy05-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Phantom Forces" icon="https://static.tcgcollector.com/content/images/3b/ad/7d/3bad7d8dab35a3023101b7aec0bdeb9ffcca3501ace6b3d2001b772be572f45b.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy04/xy04-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Furious Fists" icon="https://static.tcgcollector.com/content/images/ac/0d/ac/ac0dac4a6d49bac7c1ff28dd38a6d727e387c8fd9094af97a70060d52d5e228f.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy03/xy03-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Flashfire" icon="https://static.tcgcollector.com/content/images/c2/af/db/c2afdb456eb3fd4bfe476133264a6af8848b3761ba7d9d41d0dbfbe3b5f4218d.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy02/xy02-logo-169-en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="XY" icon="https://static.tcgcollector.com/content/images/68/d1/e1/68d1e1215c94a9493a7f104e512cc8934e46896b2d51976adf8ad83702db069b.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy01/xy01_slider_logo_en.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Kalos Starter Set" icon="https://static.tcgcollector.com/content/images/2a/0f/7a/2a0f7acc4cad782915c64072ea1076e353b09993223e2d95f104f4be1f350db6.png" logo="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/xy_series/xy00/xy0_logo_169_en.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Black & White</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Legendary Treasures" logo="https://archives.bulbagarden.net/media/upload/thumb/4/45/BW11_Logo_EN.png/180px-BW11_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/eb/f9/a6/ebf9a6cefa92c463616be5d11641af7a15ff2d92f3ae1d858924435f52ab9476.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Plasma Blast" logo="https://archives.bulbagarden.net/media/upload/thumb/c/cc/BW10_Logo_EN.png/180px-BW10_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/b5/5c/e7/b55ce7b93e64ed91b85acc7f3e765fa99b69bc9a61c40439c4e675874c8480f1.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Plasma Freeze" logo="https://archives.bulbagarden.net/media/upload/thumb/d/d6/BW9_Logo_EN.png/180px-BW9_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/38/d0/4b/38d04bdfb1270b6b3da96290e98aec8291ed6842ad29983b0313974d74e9279b.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Plasma Storm" logo="https://archives.bulbagarden.net/media/upload/thumb/2/20/BW8_Logo_EN.png/180px-BW8_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/6c/e9/bb/6ce9bbdef3c3406aab97b9a28b20962080382aec9a388a237c91467970b1e23e.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Boundaries Crossed" logo="https://archives.bulbagarden.net/media/upload/thumb/8/86/BW7_Logo_EN.png/180px-BW7_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/4f/ae/9c/4fae9cb98394382f39ad4b62c96b95c572a10f7bf0159636f1c690311a318dab.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Dragon Vault" logo="https://archives.bulbagarden.net/media/upload/thumb/0/0e/Dragon_Vault_Logo_EN.png/180px-Dragon_Vault_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/1e/f4/ac/1ef4ac1a2759fb65f01d43fbe57ecf133300d2c3e45cda89ac4f428a56b78667.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Dragons Exalted" logo="https://archives.bulbagarden.net/media/upload/thumb/0/08/BW6_Logo_EN.png/180px-BW6_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/b8/c2/ea/b8c2ea1e222262ccdaa6caaaa98b7b64d99f87e90240a3d4b8a8f124230650c2.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Dark Explorers" logo="https://archives.bulbagarden.net/media/upload/thumb/d/d3/BW5_Logo_EN.png/180px-BW5_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/01/c4/33/01c433047bacc70245fb3cbd14a27332061aada3771f7a433b71a0a99a409314.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Next Destinies" logo="https://archives.bulbagarden.net/media/upload/thumb/1/16/BW4_Logo_EN.png/180px-BW4_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/8d/58/f7/8d58f776288b79d57dc0bb265519449760ab6a9ee56c98a0d820948aa8756624.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Noble Victories" logo="https://archives.bulbagarden.net/media/upload/thumb/1/18/BW3_Logo_EN.png/180px-BW3_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/1b/ce/c5/1bcec5a0010033d4b4d5278e3b2391f5c61763a77cad33a5778ac96d3e53705d.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Emerging Powers" logo="https://archives.bulbagarden.net/media/upload/thumb/4/40/BW2_Logo_EN.png/180px-BW2_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/3d/a0/af/3da0afaf73682d08cd2a0c7e553778fedce46b86110760bcb2da70f231301dfa.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Black & White" logo="https://archives.bulbagarden.net/media/upload/thumb/6/63/BW1_Logo_EN.png/180px-BW1_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/62/45/40/624540af7b5167869f5804aae74669a8d81ba4bc1acba01a348c27df888fbe2f.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Call of Legends</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Call of Legends" logo="https://archives.bulbagarden.net/media/upload/thumb/b/b5/COL1_Logo_EN.png/180px-COL1_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/e2/5f/26/e25f2644d84d0110ad41fdc764e43a8db4c707e76c3736b2c3ba2407f3410bde.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>HeartGold & SoulSilver</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Triumphant" logo="https://archives.bulbagarden.net/media/upload/thumb/9/97/HS4_Logo_EN.png/180px-HS4_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/72/1e/7d/721e7d752a0f69324ed1913a2f9d2d3e5f1248e74c595e4b12132ef786306ef8.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Undaunted" logo="https://archives.bulbagarden.net/media/upload/thumb/0/06/HS3_Logo_EN.png/180px-HS3_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/c8/61/07/c861070429ac38bb6c2731703573fed8dd68a9ff73612b0d86a3d10b9b24a04f.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Unleashed" logo="https://archives.bulbagarden.net/media/upload/thumb/2/27/HS2_Logo_EN.png/180px-HS2_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/4f/71/2d/4f712dcb89cf85c341d2973f9f18e802825d864994a490bac9e2e75d86bd6163.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="HeartGold & SoulSilver" logo="https://archives.bulbagarden.net/media/upload/thumb/0/02/HS1_Logo_EN.png/180px-HS1_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/82/7b/6b/827b6b33523da5e10546ad31711deef3db9876747feaa6ed3737250829b57b23.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Platinum</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Arceus" logo="https://archives.bulbagarden.net/media/upload/thumb/0/00/PL4_Logo_EN.png/180px-PL4_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/6a/f5/f1/6af5f1f846c9dffcc537d30fc824d22b30ac60b05e6108f666c1b2c8d4197e32.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Supreme Victors" logo="https://archives.bulbagarden.net/media/upload/thumb/1/1b/PL3_Logo_EN.png/180px-PL3_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/52/15/f3/5215f3b53e7ec7c4a5dc4d139af536b52b7ce3a0f0f480884927e5798cf34030.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Rising Rivals" logo="https://archives.bulbagarden.net/media/upload/thumb/c/cd/PL2_Logo_EN.png/180px-PL2_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/cb/a2/07/cba207c0f941dc89923acbd53799a3f8202c97250bf149107d663c2df91a205e.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Platinum" logo="https://archives.bulbagarden.net/media/upload/thumb/4/47/PL1_Logo_EN.png/180px-PL1_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/80/7b/29/807b29d11a5768c8e44e1f84e0455d2e71b9bf7a203aa4a2dae81e94f7dcf54a.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Diamond & Pearl</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Stormfront" logo="https://archives.bulbagarden.net/media/upload/thumb/d/d5/DP7_Logo_EN.png/180px-DP7_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/c1/d0/b1/c1d0b1a1f191515c180da254e619e41724d459543016325cb61c2421d89cf7f1.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Legends Awakened" logo="https://archives.bulbagarden.net/media/upload/thumb/d/d7/DP6_Logo_EN.png/180px-DP6_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/a0/72/e4/a072e4947003c37491218c42e64ecbc6181fb57fdd8eb076f792c18af655334f.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Majestic Dawn" logo="https://archives.bulbagarden.net/media/upload/thumb/d/de/DP5_Logo_EN.png/180px-DP5_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/6a/42/17/6a4217fbe7863f13dac2019ec33c2887db9e5f68424457a4ccbb238a528a44e5.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Great Encounters" logo="https://archives.bulbagarden.net/media/upload/thumb/c/cc/DP4_Logo_EN.png/180px-DP4_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/18/1a/b0/181ab09d0d4d071a7663a818727abe63432e26a339daa9915682340c18085931.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Secret Wonders" logo="https://archives.bulbagarden.net/media/upload/thumb/1/19/DP3_Logo_EN.png/180px-DP3_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/05/34/b3/0534b3206fcdefb1ebf567d9073a8f8d8f79363042cd4cbaf746cf24d9038c1c.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Mysterious Treasures" logo="https://archives.bulbagarden.net/media/upload/thumb/1/1c/DP2_Logo_EN.png/180px-DP2_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/f3/f9/b7/f3f9b79bb4bb10f216f0d14edcb4f4536477f87868e0eb55b76c54c532a6ee44.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Diamond & Pearl" logo="https://archives.bulbagarden.net/media/upload/thumb/a/a2/DP1_Logo_EN.png/180px-DP1_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/43/cb/f1/43cbf148d8324caaa158bf52303c8f21d2a45658e68ef14e2c9062be5bca829a.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>EX</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="EX Power Keepers" logo="https://archives.bulbagarden.net/media/upload/thumb/e/eb/EX16_Logo_EN.png/180px-EX16_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/68/6a/27/686a279016197c67bfe22b2e942828d52d68228b024aecb7578eb539b561058f.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Dragon Frontiers" logo="https://archives.bulbagarden.net/media/upload/thumb/d/d4/EX15_Logo_EN.png/180px-EX15_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/92/f6/b7/92f6b77b484f0edafb3776b88572351e74f3f2f60a1a3748b6375f887c156f04.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Crystal Guardians" logo="https://archives.bulbagarden.net/media/upload/thumb/1/14/EX14_Logo_EN.png/180px-EX14_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/34/81/cd/3481cd056b70c4e227c64cc8870769960c0a4d07f46e1fe996abb545d280b8cb.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Holon Phantoms" logo="https://archives.bulbagarden.net/media/upload/thumb/4/45/EX13_Logo_EN.png/180px-EX13_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/29/0c/cf/290ccf2e94184ad5e70d649ab74b8c436089b1b035e3187bbfca4c1cf5e8a5c4.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Legend Maker" logo="https://archives.bulbagarden.net/media/upload/thumb/c/c6/EX12_Logo_EN.png/180px-EX12_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/a3/01/bb/a301bbd167f1a1457c997743b056035b876f36fcb5ffe747353a364a9198adc5.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Delta Species" logo="https://archives.bulbagarden.net/media/upload/thumb/7/7d/EX11_Logo_EN.png/180px-EX11_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/8f/e9/2a/8fe92a79d2869eda845fbce663ea782cae128163d4af268c6b0f7cb085c90a2d.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Unseen Forces" logo="https://archives.bulbagarden.net/media/upload/thumb/3/31/EX10_Logo_EN.png/180px-EX10_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/02/fb/9f/02fb9fb625ace1ade76374ca405653b9a8ba8e745bee6d1cd89b0c1781befed7.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Emerald" logo="https://archives.bulbagarden.net/media/upload/thumb/e/e5/EX9_Logo_EN.png/180px-EX9_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/1c/d4/d9/1cd4d96a763f072f951b21bc3681f72fbe93f2f39f0432143cf65aba0f2176d0.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Deoxys" logo="https://archives.bulbagarden.net/media/upload/thumb/2/2b/EX8_Logo_EN.png/180px-EX8_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/85/18/be/8518be98c00c55fff8a97b4bc5fe0df3822d04036e5cf3db559999fdebc69154.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Team Rocket Returns" logo="https://archives.bulbagarden.net/media/upload/thumb/9/94/EX7_Logo_EN.png/180px-EX7_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/aa/eb/aa/aaebaad70c1e68b688a2c61ce1e184ac7429779a52d604f2ae5735c3c7a8589a.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX FireRed & LeafGreen" logo="https://archives.bulbagarden.net/media/upload/thumb/a/a4/EX6_Logo_EN.png/180px-EX6_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/bb/0f/64/bb0f6411f02f1d75325d3cb4ed31b6c6cef3c2cb0381f198e807aad6b9c1a1b5.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Hidden Legends" logo="https://archives.bulbagarden.net/media/upload/thumb/0/02/EX5_Logo_EN.png/180px-EX5_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/73/5b/ce/735bce57d82f12307b559d3654e21895680735ce04756eb7c5d0bfeaae30bf7e.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Team Magma vs Team Aqua" logo="https://archives.bulbagarden.net/media/upload/thumb/1/10/EX4_Logo_EN.png/180px-EX4_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/b9/0e/14/b90e14a114b08da19d09c273632c985ec81bf1fe422d9271a0aa3d53b0248df4.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Dragon" logo="https://archives.bulbagarden.net/media/upload/thumb/2/24/EX3_Logo_EN.png/180px-EX3_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/a6/dc/9b/a6dc9b0693b9914b63c1303b5a0d1e636ee01f1944db8f2bd4d0dbc2b0acc8aa.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Sandstorm" logo="https://archives.bulbagarden.net/media/upload/thumb/6/65/EX2_Logo_EN.png/180px-EX2_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/1e/56/aa/1e56aaf924d43ee94ac20540f8bd748812bcfc687af96afd21b14e4711039bad.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="EX Ruby & Sapphire" logo="https://archives.bulbagarden.net/media/upload/thumb/e/ec/EX1_Logo_EN.png/360px-EX1_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/ec/9b/46/ec9b46c6a6af0504fb7dca328c24e0e8707f53e1c16318702658e351f3c50e87.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>e-Card</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Skyridge" logo="https://archives.bulbagarden.net/media/upload/thumb/b/b8/E3_Logo_EN.png/180px-E3_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/62/61/86/626186019cda8ba1f035d94c8d76277e67dd2583bb2ded60b549b9ca53212291.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Aquapolis" logo="https://archives.bulbagarden.net/media/upload/thumb/0/0d/E2_Logo_EN.png/180px-E2_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/08/a4/f3/08a4f3aebba72075fd1b842dcad155fdf688bd199e8daf0f85a206e059181c89.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Expedition Base Set" logo="https://archives.bulbagarden.net/media/upload/thumb/e/ed/E1_Logo_EN.png/180px-E1_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/5d/92/c9/5d92c9bfcb7a4a48a72f68faca572873a203616d82f32511cfb2831517e2f815.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Legendary Collection</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Legendary Collection" logo="https://archives.bulbagarden.net/media/upload/thumb/8/81/Legendary_Collection_Logo.png/180px-Legendary_Collection_Logo.png" icon="https://static.tcgcollector.com/content/images/64/db/f9/64dbf91a7d92661907a97e867af3ad90d8f04b203b3ddb7057ccff35a92711c7.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Neo</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Neo Destiny" logo="https://archives.bulbagarden.net/media/upload/thumb/1/18/Neo_Destiny_Logo_EN.png/180px-Neo_Destiny_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/06/2f/06/062f063656dd8fafeb900029216193d7fe87ff384632374a14bfbd575615aac7.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Neo Revelation" logo="https://archives.bulbagarden.net/media/upload/thumb/4/49/Neo_Revelation_Logo_EN.png/180px-Neo_Revelation_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/f5/e6/fc/f5e6fc6c005f5e673f388eb1a9e965420b8fc05fa783d8c1fb01531d469bb4a9.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Neo Discovery" logo="https://archives.bulbagarden.net/media/upload/thumb/9/98/Neo_Discovery_Logo_EN.png/180px-Neo_Discovery_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/11/00/a4/1100a4307e790c776c63b39aea5fbee529ebb1984bd50d73ae6c4380897601c9.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Neo Genesis" logo="https://archives.bulbagarden.net/media/upload/thumb/5/55/Neo_Genesis_Logo_EN.png/180px-Neo_Genesis_Logo_EN.png" icon="https://static.tcgcollector.com/content/images/c4/5c/83/c45c83cbd5330e8c935154f2fcc0106a47c4afebbd5937c4ebfb9413deda7d3a.png" uncheckedBg="" checkedBg="" />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Original</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container paddingY={4}>
                                    <ExpSet name="Gym Challenge" logo="https://archives.bulbagarden.net/media/upload/thumb/e/e0/Gym_Challenge_Logo.png/180px-Gym_Challenge_Logo.png" icon="https://static.tcgcollector.com/content/images/d0/14/5a/d0145a8c462868c5b278f4773bdb5d503b63276eeabc7dd5a09198f039ba66b6.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Gym Heroes" logo="https://archives.bulbagarden.net/media/upload/thumb/1/1b/Gym_Heroes_Logo.png/180px-Gym_Heroes_Logo.png" icon="https://static.tcgcollector.com/content/images/55/64/1d/55641d4a3bd0a75979516a75c7bf1943d507f293a30067fb818a5c3ee8495d95.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Team Rocket" logo="https://archives.bulbagarden.net/media/upload/thumb/5/5d/Team_Rocket_Logo.png/180px-Team_Rocket_Logo.png" icon="https://static.tcgcollector.com/content/images/b3/f1/36/b3f1362dc965bf8f4e4277230a59b8da19b2483656c9abc1e6f26b438a5e7eff.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Base Set 2" logo="https://archives.bulbagarden.net/media/upload/2/20/Base_Set_2_Logo.png" icon="https://static.tcgcollector.com/content/images/b7/07/11/b70711673f41206d627333977c841de6d7cfc45d6dfb6a59954da6e286c28119.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Fossil" logo="https://archives.bulbagarden.net/media/upload/7/7f/Fossil_Logo.png" icon="https://static.tcgcollector.com/content/images/18/95/33/1895336413f90615d2fc5c066a25249fa0ff586a305898b17cff816beacba6c0.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Jungle" logo="https://archives.bulbagarden.net/media/upload/6/69/Jungle_Logo.png" icon="https://static.tcgcollector.com/content/images/b3/29/21/b3292175be900286c87d6fadb2ea14e6edd0cbb833d43190449ce5c5e6707c3d.png" uncheckedBg="" checkedBg="" />
                                    <ExpSet name="Base Set" logo="https://archives.bulbagarden.net/media/upload/thumb/6/62/Pok%C3%A9mon_TCG_logo.png/180px-Pok%C3%A9mon_TCG_logo.png" icon="https://i.imgur.com/yATpJei.png" uncheckedBg="" checkedBg="" />
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
