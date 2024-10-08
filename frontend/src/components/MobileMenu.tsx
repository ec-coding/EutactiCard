import React from 'react';
import { IconButton, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function MobileMenu() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed

    // State for menu anchor
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Open menu function
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // Suppress TypeScript error with type assertion
        setAnchorEl(event.currentTarget as any);
    };

    // Close menu function
    const handleClose = () => {
        setAnchorEl(null);
    };

    const activeLinkStyle = {
        textTransform: 'none',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        transition: 'color 0.3s ease',
        // being implicit just in case
        // mx: 0.5,
        marginLeft: 0.5,
        marginRight: 0.5,
        paddingY: 0.5,
        paddingX: 1.5,
        // py: 0.5,
        // px: 1.5,
        minWidth: 0,
    };

    // Default link style
    const linkStyle = {
        textTransform: 'none',
        color: 'grey',
        fontWeight: 'normal',
        fontSize: 20,
        transition: 'color 0.3s ease',
        // being implicit just in case
        // mx: 0.5,
        marginLeft: 0.5,
        marginRight: 0.5,
        paddingY: 0.5,
        paddingX: 1.5,
        // py: 0.5,
        // px: 1.5,
        minWidth: 0,
    };

    const isActiveLink = (path: string) => location.pathname === path;

    return (
        <>
            {isMobile && (
                <div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <MenuIcon style={{ fontSize: '2.5rem' }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {/* Add menu items here */}
                        <MenuItem onClick={handleClose}>
                            <Link to="/">
                                <Button sx={isActiveLink('/') ? activeLinkStyle : linkStyle}>
                                    Home
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="/AboutUs">
                                <Button
                                    sx={isActiveLink('/AboutUs') ? activeLinkStyle : linkStyle}
                                >
                                    Pokémon
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="/Events">
                                <Button
                                    sx={isActiveLink('/Events') ? activeLinkStyle : linkStyle}
                                >
                                    Magic
                                </Button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            )}
        </>
    );
}

export default MobileMenu;