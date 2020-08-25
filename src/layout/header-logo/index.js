



import React, { Fragment } from 'react';

 import { Link } from 'react-router-dom';

import { IconButton, Box,Grid } from '@material-ui/core';

 
const HeaderLogo = () => {
  return (
    <Fragment>
  
        <Box
          className="header-logo-wrapper"
          title="Web3 Drive, Your decentralized storage hub<">
         <Grid item xs={12} className="logo">
            <image src={require ('../src/assets/pic/logo.png')}/>
            </Grid>
          <Box className="header-logo-text">Web3 Drive</Box>
        </Box>
   
    </Fragment>
  );
};

export default HeaderLogo;
