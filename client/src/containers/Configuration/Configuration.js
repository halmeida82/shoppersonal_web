import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import PaletteIcon from "@material-ui/icons/Palette";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import TrafficIcon from '@material-ui/icons/Traffic';
import VideocamIcon from '@material-ui/icons/Videocam';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';


import { toggleThemeMode, swapThemeColors, isDarkMode, isColorSwaped } from "./configurationsReducer";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  mainTitle: {
    marginBottom:20
  },
  sliderWrapper: {
    width:300,
    float:'left'
  },
  listItemSlider: {
    marginTop:40    
  },
  priorityDivider: {
    marginTop:40,
    marginBottom:50
  },
  title: {
    fontSize: 20
  },
  integrationSelect: {
    width:300
  }
});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10',
  },
];

const marksDollars = [
  {
    value: 0,
    label: '0$',
  },
  {
    value: 500,
    label: '500$',
  },
];

function valuetextNumbers(value) {
  return `${value}`;
}

function valuetextDollars(value) {
  return `${value}$`;
}

export default function Configuration() {

  const classes = useStyles();

  const darkMode = useSelector(isDarkMode);
  const colorSwaped = useSelector(isColorSwaped);

  const dispatch = useDispatch();

  return (
  <div>
    <Typography variant="h5" className={classes.mainTitle}>CONFIGURATION</Typography>
    
    <Card>
      <CardContent>
        <Typography className={classes.title}>
          General
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <ListItemSecondaryAction>
              <Switch
                onChange={(e, checked) =>  dispatch(toggleThemeMode(checked))}
                checked={darkMode}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CompareArrowsIcon />
            </ListItemIcon>
            <ListItemText primary="Swap Colors" />
            <ListItemSecondaryAction>
              <Switch
                onChange={(e, checked) => dispatch(swapThemeColors(checked))}
                checked={colorSwaped}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>

    <Card style={{marginTop:40}}>
      <CardContent>
        <Typography className={classes.title}>
          Priority definition
        </Typography>
        <List>
          <ListItem className={classes.listItemSlider}>
            <ListItemIcon>
              <LoyaltyIcon style={{color:'green',fontSize:40}}/>
            </ListItemIcon>
            <ListItemText primary="VIP Shopper"/>
            <ListItemSecondaryAction>
            <div style={{float:'left',marginRight:50}}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>Visits / last month (minimum)</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.sliderWrapper}>              
              <Slider
                defaultValue={2}
                getAriaValueText={valuetextNumbers}
                valueLabelFormat={valuetextNumbers}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                max="10"
              />
            </div>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem className={classes.listItemSlider}>
            <ListItemSecondaryAction>
            <div style={{float:'left',marginRight:50}}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>Total spent / last 3 months (minimum)</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.sliderWrapper}>              
              <Slider
                defaultValue={200}
                getAriaValueText={valuetextDollars}
                valueLabelFormat={valuetextDollars}
                aria-labelledby="discrete-slider-always"
                step={5}
                marks={marksDollars}
                valueLabelDisplay="on"
                max="500"
              />
            </div>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider className={classes.priorityDivider}/>

          <ListItem className={classes.listItemSlider}>
            <ListItemIcon>
              <LoyaltyIcon style={{color:'gold',fontSize:40}}/>
            </ListItemIcon>
            <ListItemText primary="Standard Shopper"/>
            <ListItemSecondaryAction>
            <div style={{float:'left',marginRight:50}}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>Visits / last 3 months (minimum)</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.sliderWrapper}>              
              <Slider
                defaultValue={2}
                getAriaValueText={valuetextNumbers}
                valueLabelFormat={valuetextNumbers}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                max="10"
              />
            </div>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem className={classes.listItemSlider}>
            <ListItemSecondaryAction>
            <div style={{float:'left',marginRight:50}}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>Total spent / last 6 months (minimum)</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.sliderWrapper}>              
              <Slider
                defaultValue={60}
                getAriaValueText={valuetextDollars}
                valueLabelFormat={valuetextDollars}
                aria-labelledby="discrete-slider-always"
                step={5}
                marks={marksDollars}
                valueLabelDisplay="on"
                max="500"
              />
            </div>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider className={classes.priorityDivider}/>
          
          <ListItem className={classes.listItemSlider}>
            <ListItemIcon>
              <LoyaltyIcon style={{color:'gray',fontSize:40}}/>
            </ListItemIcon>
            <ListItemText primary="Ocasional Shopper"/>
            <ListItemSecondaryAction>
            <div style={{float:'left',marginRight:50}}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                  disabled
                >
                  <MenuItem value={1}>Visits / last 6 months (minimum)</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.sliderWrapper}>              
              <Slider
                defaultValue={0}
                getAriaValueText={valuetextNumbers}
                valueLabelFormat={valuetextNumbers}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                max="10"
                disabled
              />
            </div>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>

    <Card style={{marginTop:40}}>
      <CardContent>
        <Typography className={classes.title}>
          Integrations
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="POS" />
            <ListItemSecondaryAction>
            <FormControl className={classes.integrationSelect}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>TrueVUE</MenuItem>
                </Select>
              </FormControl>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AllInboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
            <ListItemSecondaryAction>
            <FormControl className={classes.integrationSelect}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>TrueVUE</MenuItem>
                </Select>
              </FormControl>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AlarmOnIcon />
            </ListItemIcon>
            <ListItemText primary="Smart Exit" />
            <ListItemSecondaryAction>
            <FormControl className={classes.integrationSelect}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>TrueVUE</MenuItem>
                </Select>
              </FormControl>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TrafficIcon />
            </ListItemIcon>
            <ListItemText primary="Traffic" />
            <ListItemSecondaryAction>
            <FormControl className={classes.integrationSelect}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>Shoppertrak</MenuItem>
                </Select>
              </FormControl>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText primary="Cameras" />
            <ListItemSecondaryAction>
            <FormControl className={classes.integrationSelect}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="1"
                >
                  <MenuItem value={1}>CCTV</MenuItem>
                </Select>
              </FormControl>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  
  </div>);
};
