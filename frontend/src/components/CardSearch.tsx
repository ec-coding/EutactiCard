import {
    Container,
    Grid,
    Typography,
    TextField,
} from '@mui/material';
import SearchElement from './SearchElement';
import AdvSearch from './AdvSearch';

const CardSearch = () => {
    const filterHeader = {
        fontSize: '1.35rem',
        textShadow: '1.5px 1.5px 0 black',
    }

    const filterTextBar = {
        backgroundColor: 'white',
        borderRadius: 1.5,
        border: '2px solid darkGrey',
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            padding: '6px' // Override the padding
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
        },
    }

    return (
        <div>
            <Container>

                <Grid container lg={10} mx="auto" alignItems="flex-end" justifyContent="space-between">
                    <Grid xs={8} container gap={3}>
                        <Grid item textAlign="left">
                            <Typography variant="h4" color="white"
                                sx={{
                                    textShadow: '2px 2px 0 black',
                                }}
                            >
                                Search for Cards
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={6} marginRight="2vh">
                                <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                    sx={filterHeader}
                                >
                                    Search by Name
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    name="cardName"
                                    sx={filterTextBar}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                    sx={filterHeader}
                                >
                                    Search by Card Text
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    name="cardText"
                                    sx={filterTextBar}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} container gap={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                sx={filterHeader}
                            >
                                Evolves From
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="evolvesFrom"
                                sx={filterTextBar}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                sx={filterHeader}
                            >
                                Evolves To
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="evolvesTo"
                                sx={filterTextBar}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container lg={10} mx="auto" marginTop={2} gap={0.5}>
                    <Grid item>
                        <Typography variant="h5" marginY="1vh" color="white"
                            sx={filterHeader}
                        >
                            Energy Type
                        </Typography>
                    </Grid>
                    <Grid container columnSpacing={3} rowSpacing={1}>
                        <Grid item>
                            <SearchElement
                                customProp="Grass"
                                uncheckedBg='https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg'
                                checkedBg='https://i.makeagif.com/media/6-26-2021/MdgnaA.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Fire"
                                uncheckedBg='https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-4247.jpg'
                                checkedBg='https://i.makeagif.com/media/2-17-2017/RGo8Bb.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Water"
                                uncheckedBg='https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-99003.jpg'
                                checkedBg='https://64.media.tumblr.com/0e0ca0386f73c41604556382f5519d33/63e33ca5586600e7-ac/s500x750/0a87761df022a3e6cdbd517c2cbd5b517fb7cac8.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Lightning"
                                uncheckedBg='https://static.vecteezy.com/system/resources/thumbnails/001/820/803/small/dark-green-yellow-gradient-blur-drawing-vector.jpg'
                                checkedBg='https://i.makeagif.com/media/12-25-2023/-xBAmU.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Fighting"
                                uncheckedBg='https://www.shutterstock.com/image-vector/dark-brown-vector-colorful-blur-600nw-1569492175.jpg'
                                checkedBg='https://i.makeagif.com/media/12-30-2020/BgI8Xa.gif'
                            // checkedBg='https://i.makeagif.com/media/6-10-2020/K1FTjF.gif' 
                            />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Psychic"
                                uncheckedBg='https://static.vecteezy.com/system/resources/previews/007/114/318/original/abstract-dark-purple-gradient-background-perfect-for-promotion-presentation-wallpaper-design-etc-vector.jpg'
                                checkedBg='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanQwanMxem9kYzU0dHRoY3JncHB6bmpnbDMzZzM4c2JxMGh3ZGx5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cMhglZMLwT8e1jYkfC/giphy.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Colorless"
                                uncheckedBg='https://img.freepik.com/free-vector/winter-light-blue-gradient-background_53876-120755.jpg'
                                checkedBg='https://i.makeagif.com/media/7-13-2022/Vd1lMs.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Darkness"
                                uncheckedBg='https://img.freepik.com/free-vector/dark-blue-blurred-background_1034-589.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais'
                                checkedBg='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXVhY2d1MWlmZ2ZrdGJhNzAwNXE0dDJ4b3JmcnNmeXBqMGRqZXNpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnfPn0zaFf1oEE/giphy.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Metal"
                                uncheckedBg='https://www.shutterstock.com/image-illustration/blue-background-gradient-cold-shades-260nw-1605814120.jpg'
                                checkedBg='https://scitechdaily.com/images/Gears-Concept-Art.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Fairy"
                                uncheckedBg='https://media.istockphoto.com/id/1061782934/photo/defocused-blurred-motion-abstract-background-pink-orange.webp?b=1&s=170667a&w=0&k=20&c=vw66SYeQeD0zwgU29yMNc_5fN50gLGFvhA-g_q5NEvc='
                                checkedBg='https://i.makeagif.com/media/12-23-2023/PReAWG.gif' />
                        </Grid>
                        <Grid item>
                            <SearchElement
                                customProp="Dragon"
                                uncheckedBg='https://t3.ftcdn.net/jpg/03/91/52/00/360_F_391520021_N3PK4GcbwrG8I5jryTt3Jbqfrx3vazfo.jpg'
                                checkedBg='https://i.makeagif.com/media/3-18-2019/tNJ9qM.gif' />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sm={10} mx="auto" my="1.5rem">
                    <Grid item>
                        <Typography variant="h5" marginY="1vh" color="white"
                            sx={filterHeader}
                        >
                            Advanced Search
                        </Typography>
                    </Grid>
                    <Grid sm={12}>
                        <AdvSearch />
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default CardSearch
