import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsItem from '../../components/NewsItem'
import Slider from '../../components/Slider'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: '20px auto',

  },
  input: {
    display: 'none',
  },
});

const NewsGrid = ({ classes, news }) => {
  const [rollNumer,setrollNumer] = useState(13)
  const destacadas = news.slice(0, 3).map(newsItem => {
    return newsItem
  })

  const secundarias = news.slice(6, 8).map(newsItem => {
    return (
    <Grid item xs={12} sm={6} key={newsItem.url}>
      <NewsItem data={newsItem} height="300" key={newsItem.url} />
    </Grid>
    )
  })

  const grillaRoll = news.slice(9, rollNumer).map(newsItem => {
    return (
    <Grid item xs={6} sm={3} key={newsItem.url}>
      <NewsItem data={newsItem} height="140" />
    </Grid>
    )
  })
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <Slider data={destacadas}/>
        </Grid>
        {secundarias}
        {grillaRoll}
        <Button 
        variant="contained" 
        onClick={()=>setrollNumer(rollNumer+4)}
        color="primary" 
        className={classes.button}>
        Cargar más
      </Button>
      </Grid>
    </div>
  );
}

NewsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsGrid);