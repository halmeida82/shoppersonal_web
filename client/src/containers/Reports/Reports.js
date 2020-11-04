import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import TextField from '@material-ui/core/TextField';
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from '@material-ui/core/Grid';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const useStyles = makeStyles({
  mainTitle: {
    marginBottom:20
  },
  title: {
    fontSize: 24
  },
  textField: {
    width: 200
  },
  root: {
    flexGrow: 1,
    marginTop:40
  },
  bigNumber: {
    fontSize:80
  },
  reportCard: {
    textAlign:"center"
  },
  trendingUp: {
    color:"green",
    fontSize:22
  },
  trendingText: {
    position:'relative',
    top:-12
  }
});

export default function Reports() {

  const classes = useStyles();

  return (
  <div>
    <Typography variant="h5" className={classes.mainTitle}>REPORTS</Typography>
    
    <Card>
      <CardContent>
        <Typography className={classes.title}>
          Filters
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Date" />
            <ListItemSecondaryAction>
            <TextField
              id="date1"
              label="From"
              type="date"
              defaultValue="2020-07-01"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date2"
              label="To"
              type="date"
              defaultValue="2020-09-30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{marginLeft:50}}
            />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent className={classes.reportCard}>
              <Typography className={classes.bigNumber} style={{marginTop:36}}>
                4,5%
              </Typography>

              <div className={classes.trendingUp}>                
                <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;0,8pp</span>
              </div>

              <Typography className={classes.title}>
                Conversion
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          
            <Card>
                <CardContent className={classes.reportCard}>
                <Typography className={classes.title}>
                  % Success on Recommendations
                  </Typography>
                <Grid container spacing={3}>
            <Grid item xs={4}>
              
                  <Typography className={classes.bigNumber}>
                    85%
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;3,2pp</span>
                  </div>

                  <Typography className={classes.title}>
                    Loyals contacted
                  </Typography>
            </Grid>
            <Grid item xs={4}>
                  <Typography className={classes.bigNumber}>
                    15%
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;1,3pp</span>
                  </div>

                  <Typography className={classes.title}>
                    Items
                  </Typography>
            </Grid>
            <Grid item xs={4}>
              
                  <Typography className={classes.bigNumber}>
                    23%
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;2,4pp</span>
                  </div>

                  <Typography className={classes.title}>
                    Spent
                  </Typography>
            </Grid>
          </Grid>
          </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>

  </div>);
};
