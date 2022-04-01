import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import CheckOutCard from './CheckoutCard';
import products from '../product-data'
import Product from './Product';
import { useTheme } from '@mui/material/styles';
import Total from './Total';

const useStyle = makeStyles((theme)=>({
    root: {
        flewGrow: 1,
        padding: useTheme().spacing(2)
    }
}))

const CheckOutPage = () => {
    const classes = useStyle();

    function FormRow() {
        return (
            <React.Fragment>
                {products.map((item)=>(
                    <Grid item xs={12} sm={8} md={9} lg={4}>
                        <CheckOutCard key={item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )

}

export default CheckOutPage