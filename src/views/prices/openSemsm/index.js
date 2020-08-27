

import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Header } from '../../layout';
import { OpenSemsmBox } from '../../elements';
const imageUrl = require('../../assets/pic/openSemsm.png');
 export default function index() {
    return (

        <Grid item xs={12}  >
            <div className="App" style={{ backgroundImage: `url(${imageUrl}) ` }}>
                <Header />
                <OpenSemsmBox/>
              
            </div>
        </Grid>
    )
}
