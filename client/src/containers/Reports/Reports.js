import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  mainTitle: {
    marginBottom:20
  },
  title: {
    fontSize: 20
  },
  recIcon: {
    width:40,
    height:40, 
    marginTop:20, 
    marginRight:10
  },
  recommendationSold: {
    color:'green'
  },
  kpi:{
    width:'50%',
    float:'left'
  }
});

export default function Reports() {

  const classes = useStyles();

  return (
  <div>
    <Typography variant="h5" className={classes.mainTitle}>REPORTS</Typography>
    <Card>
      
    </Card>
  </div>);
};
