

import React from 'react'
import { Grid, Typography,Button } from '@material-ui/core';
import Chatbot from 'react-chatbot-kit'
import ChatConfig from '../chat-bot-data'
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


        
        <Chatbot config={ChatConfig.config} actionProvider={ChatConfig.ActionProvider} 	    messageParser={ChatConfig.MessageParser} />
    

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