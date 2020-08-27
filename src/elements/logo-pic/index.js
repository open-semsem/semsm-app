import React from 'react'
import { Grid } from '@material-ui/core';

const avatar = require('../../assets/pic/logo.svg');
const index = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '70vh' }}
        >

            <img className="logo"
                alt="Semsm"
                src={avatar}

            />
        </Grid>





    )
}
export default index;