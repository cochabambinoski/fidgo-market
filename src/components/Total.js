import React from "react";
import { accounting } from "accounting";
import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { spacing } from '@mui/system';

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh"
    },
    button:{
        paddingTop: "100px"
    }
}))

const Total = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
            <h5>Total: 3</h5>
            <h5> {accounting.formatMoney(50, "Bs ")}</h5>       
            </div>
            <Button className={classes.button} variant="contained">Check Out</Button>
        </div>
        
    )
}

export default Total