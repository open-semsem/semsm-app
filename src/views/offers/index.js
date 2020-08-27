import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import {Paper,Typography,Button,Link} from '@material-ui/core';
import { Header } from '../../layout';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
   
    width: "332px",
    height:" 371px",
    "background": "#FFFFFF 0% 0% no-repeat padding-box",
    "borderRadius": "26px",
    "opacity": "1"
  },
control: {
  padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(6);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
const offers=[
  {
  title:"Start Version",
  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. ",
  src:"001-process.svg",
  isOutlined: false
},
  {
  title:"Mid-Level Package",
  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. ",
  src:"007-analysis.svg",
  isOutlined: true
},
  {
  title:"Mid-Level Package",
  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. ",
  src:"008-computer.svg",
  isOutlined: true
},
  {
  title:"High-Level Package",
  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. ",
  src:"004-social-media-1.svg",
  isOutlined: false
}
]
  return (
    // <div>
    //      <Grid item xs={6} >

    // </Grid>
    // <Grid item xs={6}  calssName="menu_uj">
    // <Header/>
    // </Grid>
    // </div>
    <Grid container className={classes.root } spacing={4}>
   
      <Grid item xs={12}>
      <Header isWhite={true} />
        <Grid container justify="center" spacing={spacing}>
     <Grid item xs={4} >   <div className="pagTitle">
     OUR SERVICES
     </div>
        <div className="pagSubTitle">
   
        What We Offer
    
     </div></Grid>
     <Grid item xs={6} className="" >
 
     </Grid>
          </Grid>
          <div className="cardOffer">

        <Grid container justify="center" spacing={spacing}  >
          {offers.map((value) => (
            <Grid key={value} item  >
              <Paper className={classes.paper} >
         <div >
        <img className="cardIcon" src={require(`../../assets/pic/${value.src}`)}/>
         </div>
          <div>
          <p className="details" >
          {value.title}
        </p>
          </div>
          <div>
          <p className="details" >
                    {value.message}
        </p>
          </div>
        
          <div>
          <Button className="seeMoreOffer" >  See More
                    </Button>
          </div>
          
              </Paper>
            </Grid>
          ))}
        </Grid>
        </div>
      </Grid>
      </Grid>
 
  );
}

