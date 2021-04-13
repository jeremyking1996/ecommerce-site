import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id : 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/55d64ae6-806b-48f5-9f4c-46265717889a/renew-run-mens-running-shoe-xdx3PD.png'},
    { id : 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://media.wired.com/photos/59e952e4f572231fe56c3937/master/w_2560%2Cc_limit/rosegold-macbook-1.jpg'}
]

const Products = () => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                 <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                     <Product product={product} />
                     </Grid>   
            ))}
        </Grid>
    </main>
    ) 
}

export default Products;