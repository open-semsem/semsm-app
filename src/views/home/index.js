

import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Header} from '../../layout';
const imageUrl =  require('../../assets/pic/Home@2x.png');
const logoUrl =  require('../../assets/pic/logo.png');
export default function index() {
    return (
//         <div>
//             hiiiiiiiiiiiiiii
//              <Grid item xs={6} >
        
//         </Grid>
//         <Grid item xs={6}  className="menu_uj">
//         {/* <Header/> */}
//         </Grid>
//         <Grid item xs={12}  >
//         <div


// style={{ backgroundImage: 'url(' + require('../../assets/pic/Home.png') + ')' ,height:'auto',width:'100%'}}
// > </div>
//          </Grid>
//         </div>

<Grid item xs={12}  >
<div className="App" style={{backgroundImage: `url(${imageUrl}) ` }}>
<Header/> 
{/* <image src={logoUrl}/> */}
            {/* <div className="App-content">
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div> */}
        </div>
        </Grid>
    )
}
