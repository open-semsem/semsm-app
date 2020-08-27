

import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Header } from '../../layout';
import { HomeText } from '../../elements';
const imageUrl = require('../../assets/pic/Home@2x.png');
export default function index() {
    return (
        <div className="App" style={{ backgroundImage: `url(${imageUrl}) ` }}>

<Header />
            <Grid container item xs={8}  className="menu-rec" >

        
            <Grid  item xs={12}  > <HomeText/></Grid>
               
               
                {/* <div className="App-content">
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div> */}

            </Grid>
        </div>
    )
}
