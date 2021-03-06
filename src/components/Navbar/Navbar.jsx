import React from 'react'; 
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, FreeBreakfast } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/coffee-mug.jpeg';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles;
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.appBar} color="inherit">
                        <FreeBreakfast fontSize="large"/>
                        {/* <img src={logo} alt="Coffee Mug" height="25px" className={classes.image}/> */}
                        Coffee E-Commerce
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
