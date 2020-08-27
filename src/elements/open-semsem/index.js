

import React from 'react'
import { Grid, Typography,Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
  const index = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '120vh' }}
        >
  
            <Grid container item xs={6} spacing={3} >


         
                <Grid item xs={12}>
                    <Typography align="center" className="open-semsm-box-text">
                        you can build your prototype as fast as you can by getting help from Semsm
               </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" className="open-semsm-box-main-text" >
                        Just Say Open Semsm        </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button className="open-semsm-box-btn" > <Link to="/Chat" className="open-semsm-box-btn-txt">
                        open Semsm</Link>
                    </Button>
                </Grid>


            </Grid>
        </Grid>

        // <Grid item >
        //     <div className="open-semsm-box">
        //         <img className="logo"
        //             alt="Semsm"
        //             src={avatar}

        //         />

        //         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        //             you can build your prototype as fast as you can by getting help from Semsm
        //        </Typography>
        //         <Typography variant="subtitle1" align="center"  >
        //             Just Say Open Semsm        </Typography>
        //         <button className="home-data-btn" > <Link to="/Chat" className="hrf">
        //             open Semsm</Link>
        //         </button>

        //     </div>
        // </Grid >



    )
}
export default index;