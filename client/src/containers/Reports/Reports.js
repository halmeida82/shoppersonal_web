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
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as DressIcon } from  '../../assets/012-dress.svg';
import { ReactComponent as PoloIcon } from  '../../assets/006-polo.svg';
import { ReactComponent as TshirtIcon } from  '../../assets/007-tshirt.svg';
import { ReactComponent as SuitIcon } from  '../../assets/013-suit.svg';
import { ReactComponent as PantsIcon } from  '../../assets/009-pants.svg';
import { ReactComponent as HighHeelsIcon } from  '../../assets/011-high-heels.svg';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { ReactComponent as ManIcon } from  '../../assets/man.svg';
import { ReactComponent as WomanIcon } from  '../../assets/woman.svg';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';

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
  mediumNumber: {
    fontSize:30
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
  },
  recIcon: {
    width:120,
    height:120, 
    marginTop:20, 
    marginLeft:10
  },
});

export const dataByDayWeek = [{
  dayWeek: 'Mon',
  shoppers: 863,
  total: 1492
}, {
  dayWeek: 'Tue',
  shoppers: 621,
  total: 1828
}, {
  dayWeek: 'Wed',
  shoppers: 734,
  total: 1983
}, {
  dayWeek: 'Thu',
  shoppers: 692,
  total: 1378
}, {
  dayWeek: 'Fri',
  shoppers: 724,
  total: 2174
}, {
  dayWeek: 'Sat',
  shoppers: 2193,
  total: 3298
}, {
  dayWeek: 'Sun',
  shoppers: 1278,
  total: 3768
}];

export const dataByHour = [{
  dayWeek: '[09-11]',
  shoppers: 463,
  total: 892
}, {
  dayWeek: '[11-13]',
  shoppers: 621,
  total: 1428
}, {
  dayWeek: '[13-15]',
  shoppers: 734,
  total: 2300
}, {
  dayWeek: '[15-17]',
  shoppers: 692,
  total: 1378
}, {
  dayWeek: '[17-19]',
  shoppers: 924,
  total: 1874
}, {
  dayWeek: '[19-21]',
  shoppers: 1993,
  total: 3198
}, {
  dayWeek: '[21-23]',
  shoppers: 978,
  total: 1768
}];

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);

const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);



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
        <Grid item xs={6}>
          <Card style={{marginTop:0}}>
            <CardContent className={classes.reportCard}>
              <Chart
                data={dataByDayWeek}
              >
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                  name="Loyal Shoppers"
                  valueField="shoppers"
                  argumentField="dayWeek"
                  color="green"
                />
                <BarSeries
                  name="Total Visits"
                  valueField="total"
                  argumentField="dayWeek"
                  color="#3f51b5"
                />
                <Animation />
                <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
                <Title text="Loyal vs Total Shoppers Attendance by Day of the week" />
                <Stack />
              </Chart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{marginTop:0}}>
            <CardContent className={classes.reportCard}>
              <Chart
                data={dataByHour}
              >
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                  name="Loyal Shoppers"
                  valueField="shoppers"
                  argumentField="dayWeek"
                  color="green"
                />
                <BarSeries
                  name="Total Visits"
                  valueField="total"
                  argumentField="dayWeek"
                  color="#3f51b5"
                />
                <Animation />
                <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
                <Title text="Loyal vs Total Shoppers Attendance by Hour of the day" />
                <Stack />
              </Chart>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={4}>
          <Card>
            <CardContent className={classes.reportCard}>
              <Typography className={classes.bigNumber} style={{marginTop:36}}>
                216
              </Typography>

              <div className={classes.trendingUp}>                
                <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;5.3 %</span>
              </div>
              
              <div className={classes.trendingUpText}>                
                <span className={classes.trendingText}>24 % of Total Traffic (</span><ArrowDropUpIcon style={{fontSize:40, color:'green'}}/><span className={classes.trendingText}>1.2 %)</span>
              </div>

              <Typography className={classes.title}>
                Traffic Loyals
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardContent className={classes.reportCard}>
              <Typography className={classes.bigNumber} style={{marginTop:36}}>
                4.5 %
              </Typography>

              <div className={classes.trendingUp}>                
                <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;0.8pp</span>
              </div>
              
              <div className={classes.trendingUpText}>                
                <span className={classes.trendingText}>2.1 % of Total Conversion (</span><ArrowDropUpIcon style={{fontSize:40, color:'green'}}/><span className={classes.trendingText}>0.1pp)</span>
              </div>

              <Typography className={classes.title}>
                Conversion Loyals
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardContent className={classes.reportCard}>
              <Typography style={{marginTop:36,fontSize:67,lineHeight:'120px'}}>
                143.00 $
              </Typography>

              <div className={classes.trendingUp}>                
                <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;3.2 %</span>
              </div>
              
              <div className={classes.trendingUpText}>                
                <span className={classes.trendingText}>85.00 $ Total ATS (</span><ArrowDropUpIcon style={{fontSize:40, color:'green'}}/><span className={classes.trendingText}>2,0 %)</span>
              </div>

              <Typography className={classes.title}>
                ATS Loyals
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>          
          <Card>
            <CardContent className={classes.reportCard}>
              <Typography className={classes.title}>
                % Success on Recommendations by Product Category
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                <Typography className={classes.title}>
                    Dress
                  </Typography>
                  <SvgIcon component={DressIcon} viewBox="0 0 480 480" className={classes.recIcon}/>

                  <Typography className={classes.mediumNumber}>
                    23 %
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;1,44pp</span>
                  </div>
              </Grid>
              <Grid item xs={2}>
                  <Typography className={classes.title}>Suit</Typography>
                  <SvgIcon component={SuitIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                  <Typography className={classes.mediumNumber}>16 %</Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;5,4pp</span>
                  </div>
              </Grid>
              <Grid item xs={2}>
              <Typography className={classes.title}>
                    Polo
                  </Typography>
                  <SvgIcon component={PoloIcon} viewBox="0 0 480 480" className={classes.recIcon}/>

                  <Typography className={classes.mediumNumber}>
                    38 %
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;0,1pp</span>
                  </div>
              </Grid>
              <Grid item xs={2}>
              <Typography className={classes.title}>
                    Tshirt
                  </Typography>
                  <SvgIcon component={TshirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>

                  <Typography className={classes.mediumNumber}>
                    14 %
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;2,3pp</span>
                  </div>
              </Grid>
              <Grid item xs={2}>
              <Typography className={classes.title}>
                    High heels
                  </Typography>
                  <SvgIcon component={HighHeelsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>

                  <Typography className={classes.mediumNumber}>
                    8 %
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;1,0pp</span>
                  </div>
              </Grid>
              <Grid item xs={2}>
                  <Typography className={classes.title}>
                    Pants
                  </Typography>
                  <SvgIcon component={PantsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>

                  <Typography className={classes.mediumNumber}>
                    19 %
                  </Typography>

                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;3,2pp</span>
                  </div>

                  
              </Grid>
            </Grid>
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>          
          <Card>
            <CardContent className={classes.reportCard}>
              <Typography className={classes.title}>
                % Success on Recommendations by Shopper Priority
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Typography className={classes.title}>VIP</Typography>
                  <LoyaltyIcon style={{color:'green',fontSize:140}}/>
                  <Typography className={classes.mediumNumber}>41 %</Typography>
                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;1,0pp</span>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.title}>Standard</Typography>
                  <LoyaltyIcon style={{color:'gold',fontSize:140}}/>
                  <Typography className={classes.mediumNumber}>24 %</Typography>
                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;1,9pp</span>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.title}>Ocasional</Typography>
                  <LoyaltyIcon style={{color:'gray',fontSize:140}}/>
                  <Typography className={classes.mediumNumber}>12 %</Typography>
                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;4,4pp</span>
                  </div>
                </Grid>
            </Grid>
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>          
          <Card>
            <CardContent className={classes.reportCard}>
              <Typography className={classes.title}>
                % Success by Gender
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography className={classes.title}>VIP</Typography>
                  <SvgIcon component={ManIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                  <Typography className={classes.mediumNumber}>28 %</Typography>
                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;0,4pp</span>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.title}>Standard</Typography>
                  <SvgIcon component={WomanIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                  <Typography className={classes.mediumNumber}>16 %</Typography>
                  <div className={classes.trendingUp}>                
                    <TrendingUpIcon style={{fontSize:40}}/><span className={classes.trendingText}>&nbsp;1,1pp</span>
                  </div>
                </Grid>
            </Grid>
          </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>


    

  </div>);
};
