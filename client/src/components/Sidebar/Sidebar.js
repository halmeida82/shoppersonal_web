import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StoreIcon from '@material-ui/icons/Store';
import PeopleIcon from '@material-ui/icons/People';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const drawerWidth = 118;

const styles = theme => ({
  drawerPaper: {
    position: "fixed",
    top: theme.spacing(8),
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    /*overflowX: "hidden",*/
    /*transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),*/
    width: drawerWidth,
    /*[theme.breakpoints.up("sm")]: {
      width: drawerWidth
    }*/
  }, 
  menuIcon:{
    fontSize:'80px'
  },
  menuText:{
    textAlign:'center', 
    fontSize:'12px',
    textTransform:'uppercase', 
    textDecoration:'none'
  }
});

const Sidebar = props => {
  const { open, classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        )
      }}
      open={open}
    >
      <List>
        <img src="/static/images/Shoppersonal.png" alt="logo" width="120px" style={{backgroundColor:'white'}}/>
        <Divider/>
        <Link to="/">
          <ListItem button>
            <ListItemText primary={
              <React.Fragment>
                <ListItemIcon>
                  <StoreIcon className={classes.menuIcon}/>
                </ListItemIcon>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <div className={classes.menuText}>
                  <span>Store</span>
                </div>
              </React.Fragment>
            } />
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/shoppers">
          <ListItem button>
            <ListItemText primary={
              <React.Fragment>
                <ListItemIcon>
                  <PeopleIcon className={classes.menuIcon}/>
                </ListItemIcon>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <div className={classes.menuText}>
                  <span>Shoppers</span>
                </div>
              </React.Fragment>
            } />
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/reports">
          <ListItem button>
            <ListItemText primary={
              <React.Fragment>
                <ListItemIcon>
                  <EqualizerIcon className={classes.menuIcon}/>
                </ListItemIcon>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <div className={classes.menuText}>
                  <span>Reports</span>
                </div>
              </React.Fragment>
            } />
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/configuration">
          <ListItem button>
            <ListItemText primary={
              <React.Fragment>
                <ListItemIcon>
                  <SettingsIcon className={classes.menuIcon}/>
                </ListItemIcon>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <div className={classes.menuText}>
                  <span>Configuration</span>
                </div>
              </React.Fragment>
            } />
          </ListItem>
        </Link>
        <Divider/>        
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
