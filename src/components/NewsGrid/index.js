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
    height:'10px'
  },
  button: {
    margin: '30px auto 40px auto',
    display:'block'

  },
  input: {
    display: 'none',
  },
  loadEnd:{
    margin: '30px auto 40px auto',
    display:'block',
    fontFamily:'Roboto',
    textAlign:'center'
  },
});

const NewsGrid = ({ classes, news, referido }) => {
  const [rollNumer,setrollNumer] = useState(13)
  const [rollNumerMax] = useState(news.length - 9)
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
    <Grid item xs={12} sm={3} key={newsItem.url}>
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
        
      </Grid>
      {rollNumer < rollNumerMax ?
      <Button 
        variant="contained" 
        onClick={()=>setrollNumer(rollNumer+4)}
        color="primary" 
        className={classes.button}>
        Cargar más
      </Button>
      :
      <p className={classes.loadEnd}>Se cargaron todas las noticias de {referido}</p>
      }
    </div>
    
  );
}

NewsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsGrid);