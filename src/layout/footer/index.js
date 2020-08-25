import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const imageUrl =  require('../../assets/pic/footer@2x.png');

function Copyright() {
  return (

    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Semsm
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" >
        <div  className="footerBase" style={{backgroundImage: `url(${imageUrl}) ` }}>
  <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />

        </div>
      
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};