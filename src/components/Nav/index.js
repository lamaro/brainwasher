import React from 'react';
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import logo from '../../imgs/logoNews.png';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'none',
    }
  },
  menu: {
    flexGrow: 1,
    color:'white',
    margin: 'o auto',
    fontFamily: 'Roboto',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  menuContent:{
    width:'100%'

  },
  link:{
    color:'#fff',
    marginRight: '10px',
    fontSize: '15px',
    lineHeight:'30px',
    verticalAlign:'super'

  },
  logo:{
    width:'220px',
    marginRight:'30px'
  }
}));

function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menuContent}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <img className={classes.logo} src={logo} alt="Logo" />
            <div className={classes.menu}>
              <Link className={classes.link} to={'/'}>Inicio </Link>
              <Link className={classes.link} to={'/category/politica'}>Política </Link>
              <Link className={classes.link} to={'/category/internacionales'}>Internacionales </Link>
              <Link className={classes.link} to={'/category/tecnologia'}>Tecnología </Link>
              <Link className={classes.link} to={'/category/espectaculos'}>Espectáculos </Link>
              <Link className={classes.link} to={'/category/deportes'}>Deportes </Link>
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null}
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Nav);