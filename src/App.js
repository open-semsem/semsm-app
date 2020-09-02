import React from 'react';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Footer} from './layout'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >

        <Grid item xs={12}>
          
          <BrowserRouter basename="/">

            <Routes />

          </BrowserRouter>

        </Grid>
        <Grid item xs={12}>
         <Footer/>

        </Grid>



      </Grid>
    </div>
  );
}

export default App;
