import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

const useStyles = makeStyles({
  card: {
    //maxWidth: 345,
    minHeight: '300px',
    fontSize:'10px'
  },
});

function ImgMediaCard({data, height}) {
  const classes = useStyles();
  const {title, img_url, url, date} = data
  const dateFormatted = dayjs.unix(date).format('DD[/]MM[/]YYYY')

  return (
    <Card className={classes.card}>
      <Link href={url}>
        <CardActionArea> 
            <CardMedia
              component="img"
              alt={title}
              height={height}
              image={img_url}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title.replace(/^(.{100}[^\s]*).*/, "$1")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {dateFormatted}
              </Typography>
            </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default ImgMediaCard;