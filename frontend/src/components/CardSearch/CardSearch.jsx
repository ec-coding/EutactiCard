import {
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Radio,
    Typography,
    TextField,
} from '@mui/material';
import SearchElement from '../SearchElement/SearchElement';
import AdvSearch from '../AdvancedSearch/AdvancedSearch';
import { useContext, useState } from 'react';
import CardContext from '../../contexts/CardContext';
import './CardSearch.scss'

const CardSearch = ({ }) => {
    const [cards, setCards] = useState([]);
    let elementEntries = [];
    let setEntries = [];
    let typeEntries = [];
    let rarityEntries = [];
    let hitPointRange = [];
    let retreatCostRange = [];
    let weaknessEntries = [];
    let resistanceEntries = [];

    const toggleElement = (element) => {
        if (elementEntries.includes(element)) {
            // Remove element from the context if unchecked
            elementEntries = elementEntries.filter(el => el !== element);
        } else {
            // Add element to the context only if it doesn't already exist
            elementEntries.push(element);
        }
    };

    const toggleSet = (set) => {
        if (setEntries.includes(set)) {
            setEntries = setEntries.filter(st => st !== set);
        } else {
            setEntries.push(set);
        }
    };

    const toggleType = (type) => {
        if (typeEntries.includes(type)) {
            typeEntries = typeEntries.filter(ty => ty !== type);
        } else {
            typeEntries.push(type);
        }
    };

    const toggleRarity = (rarity) => {
        if (rarityEntries.includes(rarity)) {
            rarityEntries = rarityEntries.filter(rar => rar !== rarity);
        } else {
            rarityEntries.push(rarity);
        }
    };

    const toggleHitPoints = (hitPoints) => {
        hitPointRange = hitPoints
    };

    const toggleRetreatCost = (retreatCost) => {
        retreatCostRange = retreatCost
    };

    const toggleWeakness = (weakness, context) => {
        if (weaknessEntries.includes(weakness)) {
            weaknessEntries = weaknessEntries.filter(weak => weak !== weakness);
        } else {
            weaknessEntries.push(weakness);
        }
    }

    const toggleResistance = (resist, context) => {
        if (resistanceEntries.includes(resist)) {
            resistanceEntries = resistanceEntries.filter(res => res !== resist);
        } else {
            resistanceEntries.push(resist);
        }
    }

    const submitClick = () => {
        // console.log(`Basic Search: ` + elementEntries)
        // console.log(`Type: ` + typeEntries)
        // console.log(`Rarity: ` + rarityEntries)
        console.log(`HP: ` + hitPointRange)
        // console.log(`Retreat Cost: ` + retreatCostRange)
        // console.log(`Weaknesses: ` + weaknessEntries)
        // console.log(`Resistances: ` + resistanceEntries)

        const url = `https://api.pokemontcg.io/v2/cards/?`

        let elementParam = ''
        let setParam = ''
        let typeParam = ''
        let fetchURLText = ''

        elementEntries.forEach((element, index) => {
            console.log(element)
            elementParam += ` types:${element}`;
            if (index < elementEntries.length - 1) {
                elementParam += ' OR ';
            }
        });

        setEntries.forEach((set, index) => {
            console.log(set)
            setParam += ` set.id:${set}`;
            if (index < setEntries.length - 1) {
                setParam += ' OR ';
            }
        });

        typeEntries.forEach((type, index) => {
            console.log(type)
            typeParam += ` subtypes:"${type}"`;
            if (index < typeEntries.length - 1) {
                typeParam += ' OR ';
            }
        });

        fetchURLText = url + `page=1&pageSize=14&orderBy=set,number&q=`

        if (elementParam !== '') {
            fetchURLText += elementParam
        }
        if (setParam !== '') {
            fetchURLText += setParam
        }
        if (typeParam !== '') {
            fetchURLText += typeParam
        }

        fetch(fetchURLText, {
            headers: {
                "X-Api-Key": "9aac7fc4-dfb9-41eb-ab2f-f30e2976bd08"
            },
        })
            .then(res => res.json())
            .then(response => {
                if (response.count !== 0) {
                    console.log(response)
                } else {
                    console.log('No cards found.')
                }

            }, []);

        console.log(fetchURLText)

        // fetch("https://api.pokemontcg.io/v2/cards/?q=set.id:base1")
        //     .then(res => res.json()) //parse response as json
        //     .then(response => {
        //         const imageUrl = response.data.map((card) => card.images.small); // Explicitly set the type for imageUrls
        //         const limitedCards = imageUrls.slice(0, 5);
        //         setCards(limitedCards);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching data:", error);
        //     });
    }

    const filterHeader = {
        fontSize: '1.35rem',
        textShadow: '1.5px 1.5px 0 black',
    }

    const filterTextBar = {
        backgroundColor: 'white',
        borderRadius: '2.5px',
        border: '1px solid darkGrey',
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            padding: '6px' // Override the padding
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
        },
        boxShadow: 'inset -1.5px -1.5px 0 rgba(255, 255, 255, .75), inset 1.5px 1.5px 0 rgba(0, 0, 0, 0.75)'
    }

    return (
        <Grid container paddingY={7.5} paddingX={0}>
            <Grid marginBottom={2} textAlign="left">
                <Typography variant="h4" color="white"
                    sx={{
                        textShadow: '2px 2px 0 black',
                    }}
                >
                    Search for Cards
                </Typography>
            </Grid>
            <Grid container>
                <Grid item container lg={6}>
                    <Grid item container lg={12} mx="auto" alignItems="flex-end" justifyContent="space-between">
                        <Grid item container gap={4}>
                            <Grid item lg={5.5}>
                                <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                    sx={filterHeader}
                                >
                                    Search by Name
                                </Typography>
                                <Grid>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        name="cardName"
                                        sx={filterTextBar}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item lg={5.5}>
                                <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                    sx={filterHeader}
                                >
                                    Search by Card Text
                                </Typography>
                                <Grid>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        name="cardText"
                                        sx={filterTextBar}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* SEARCH PARAMS - ENERGY TYPE */}
                    <Grid container marginTop={4} gap={0.5}>
                        <Grid item>
                            <Typography variant="h5" marginBottom="0.5vh" color="white"
                                sx={filterHeader}
                            >
                                Energy Type
                            </Typography>
                        </Grid>
                        <Grid container gap={1} className="energy-type">
                            <SearchElement elementName="grass" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="fire" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="water" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="lightning" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="fighting" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="psychic" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="colorless" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="darkness" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="metal" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="fairy" context="basicSearch" toggleElement={toggleElement} />
                            <SearchElement elementName="dragon" context="basicSearch" toggleElement={toggleElement} />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item lg={4} gap={2} justifyContent="start">
                    <Grid item lg={7} marginX="auto">
                        <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                            sx={filterHeader}
                        >
                            Evolves From
                        </Typography>
                        <Grid>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="evolvesFrom"
                                sx={filterTextBar}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid item lg={7} marginX="auto">
                        <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                            sx={filterHeader}
                        >
                            Evolves To
                        </Typography>
                        <Grid>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="evolvesTo"
                                sx={filterTextBar}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container lg={12} gap={2} marginTop={12} justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: 'none',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                borderRadius: '10px',
                                paddingX: 4,
                                bgcolor: 'rgb(25, 118, 210)',
                                boxShadow: '2px 4px 6px black',
                            }}
                        >
                            Reset
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: 'none',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                borderRadius: '10px',
                                paddingX: 4,
                                bgcolor: '#f3ce49',
                                boxShadow: '2px 4px 6px black',
                            }}
                            type="submit"
                            onClick={submitClick}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item lg={12} marginTop={7.5} mx="auto">
                <AdvSearch
                    setData={toggleSet}
                    typeData={toggleType}
                    rarityData={toggleRarity}
                    hitPointData={toggleHitPoints}
                    retreatCostData={toggleRetreatCost}
                    weaknessData={toggleWeakness}
                    resistanceData={toggleResistance}
                />
            </Grid>

            <Grid>
                {/* Display the fetched card images */}
                {cards.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Card ${index}`} />
                ))}
            </Grid>

        </Grid>
    )
}

export default CardSearch
