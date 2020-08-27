import React, { Fragment } from 'react';
import { Grid, Paper, Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
const twitter = require('../../assets/pic/twitter.svg');
const facebook = require('../../assets/pic/facebook.svg');


function index() {

    return (
        <Grid container spacing={3} >

            <Grid container item xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={6}>
                    <h1 className="home-data-h1">
                        Build Blockchain Prototype
        </h1>
                </Grid>

            </Grid>
            <Grid container item xs={12}>
                <Grid   item xs={1}>
                  <div>
                  <IconButton>
                        <img
                    className=""
                    alt="facebook"
                    src={facebook}
                  />
                    </IconButton>
                  </div>
                  <div>
                  <IconButton>
                        <img
                    className=""
                    alt="twitter"
                    src={twitter}
                  />
                    </IconButton>
                  </div>
                   
                   
                    {/* <IconButton>test</IconButton>
                    <IconButton>test</IconButton> */}
                </Grid>
                <Grid item xs={6} zeroMinWidth className="home-text">
                    <Typography variant="subtitle1" align="left" color="textSecondary" component="p"> Semsm is an AI assistant for fast prototyping your business idea into a blockchain application.</Typography>
                    <button className="home-data-btn" > <Link to="/Semsm" className="hrf">
                        GET A FREE PROTOTYPE </Link></button>
                </Grid>

            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={6}>
                </Grid>

            </Grid>





        </Grid>

    );
}

export default index;
