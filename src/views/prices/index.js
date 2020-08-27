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
   
    "width": "370px",
    "height": "463px",
    "background": "#FFFFFF 0% 0% no-repeat padding-box",
    "borderRadius": "26px",
    "opacity": "1"
  },
control: {
  padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
const offers=[
  {
  title:"Start Version",
  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. ",
  price:"0$",
  isOutlined: false
},
  {
  title:"Mid-Level Package",
  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. ",
  price:"40$",
  isOutlined: true
},
  {
  title:"High-Level Package",
  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. ",
  price:"100$",
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
    <Grid container className={classes.root , `body`} spacing={2}>
   
      <Grid item xs={12}>
      <Header isWhite={true}/>
        <Grid container justify="center" spacing={spacing}>
     <Grid item xs={6} >   <div className="pagTitle">
     Pricing
     </div>
        <div className="pagSubTitle">
   
     Our Pricing
    
     </div></Grid>
     <Grid item xs={6} >
 
     </Grid>
          </Grid>
        <Grid container justify="center" spacing={spacing}>
          {offers.map((value) => (
            <Grid key={value} item >
              <Paper className={classes.paper} >
         <div className="card">
         <p className="title"  >
                    {value.title}
        </p>
         </div>
          <div>
          <p className="details" >
                    {value.message}
        </p>
          </div>
          <div>
          <Typography className="price" display="block" gutterBottom variant="body1">
                    {value.price}
        </Typography>
          </div>
          <div>
          <Button className={value.isOutlined?"detailsBtn":"detailsBtnOutline"} > <Link to="/Chat" className={value.isOutlined?"detailsBtnText":"detailsBtnOutlineText"} >
          See Details</Link>
                    </Button>
          </div>
          
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
 
  );
}

