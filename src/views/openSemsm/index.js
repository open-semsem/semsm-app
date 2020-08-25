

import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Header } from '../../layout';
const imageUrl = require('../../assets/pic/openSemsm.png');
const logoUrl = require('../../assets/pic/openSemsm.png');
export default function index() {
    return (

        <Grid item xs={12}  >
            <div className="App" style={{ backgroundImage: `url(${imageUrl}) ` }}>
                <Header />
                {/* <image src={logoUrl}/> */}
                {/* <div className="App-content">
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div> */}
            </div>
        </Grid>
    )
}
