import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  textoPie:{
    fontSize:'12px'
  },
  bar:{
    marginTop:'20px',
    color:'#fff',
    backgroundColor:'#222'
  }
});

 function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static" color="default">
        <Toolbar>
          <Typography className={classes.textoPie} color="inherit">
            Uninspirng: No todo es lo que parece....
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer