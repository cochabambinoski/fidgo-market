import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, useTheme } from '@mui/material/styles';
import logo from '../assets/logo_white_large.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: 'black',
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1
  },
  button: {
    marginLeft: useTheme().spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "2rem",
  },
  customBadge: {
    backgroundColor: "#00AFD7",
    color: "white"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.appBar}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} className={classes.image}/>
            </IconButton>
            <div className={classes.grow}/>
            <Typography variant="h6" color="inherit" component="p">
              Hello Guest
            </Typography>
            <div className={classes.button}>
              <Button variant='outlined' color="inherit">
                <strong>Sign in</strong>
              </Button>
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} classes={{ badge: classes.customBadge }}>
                  <ShoppingCart fontSize="large" color="inherit"/>
                </Badge>  
              </IconButton>          
            </div>          
          </Toolbar>
        </AppBar>
    </div>
  );
}
