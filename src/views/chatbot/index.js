

import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Header } from '../../layout';
import { SemsmChat } from '../../elements';
const imageUrl = require('../../assets/pic/semsm-chat.png');
 export default function index() {
    return (

        <Grid item xs={12}  >
            <div className="App" style={{ backgroundImage: `url(${imageUrl}) ` }}>
                <Header />
                <SemsmChat/>
              
            </div>
        </Grid>
    )
}
