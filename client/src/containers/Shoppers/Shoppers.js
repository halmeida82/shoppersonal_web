import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ReactComponent as SlippersIcon } from  '../../assets/001-slippers.svg';
import { ReactComponent as SleevelessIcon } from  '../../assets/002-sleeveless.svg';
import { ReactComponent as SkirtIcon } from  '../../assets/003-skirt.svg';
import { ReactComponent as ShortsIcon } from  '../../assets/004-shorts.svg';
import { ReactComponent as ShoeIcon } from  '../../assets/005-shoe.svg';
import { ReactComponent as PoloIcon } from  '../../assets/006-polo.svg';
import { ReactComponent as TshirtIcon } from  '../../assets/007-tshirt.svg';
import { ReactComponent as Shirt1Icon } from  '../../assets/008-shirt-1.svg';
import { ReactComponent as PantsIcon } from  '../../assets/009-pants.svg';
import { ReactComponent as HoodieIcon } from  '../../assets/010-hoodie.svg';
import { ReactComponent as HighHeelsIcon } from  '../../assets/011-high-heels.svg';
import { ReactComponent as DressIcon } from  '../../assets/012-dress.svg';
import { ReactComponent as SuitIcon } from  '../../assets/013-suit.svg';
import { ReactComponent as ShirtIcon } from  '../../assets/014-shirt.svg';
import { ReactComponent as WatchIcon } from  '../../assets/015-watch.svg';
import { ReactComponent as CapIcon } from  '../../assets/016-cap.svg';
import { ReactComponent as ManIcon } from  '../../assets/man.svg';
import { ReactComponent as WomanIcon } from  '../../assets/woman.svg';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import EventIcon from '@material-ui/icons/Event';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';



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

const rows = 
  [
    {
      priority:'gold', 
      userNumber:45789, 
      gender:'male',
      category:'generationX',
      lastPurchase: 
        [
          {code:514555, desc:'Regular fit checked flannel shirt', category:'shirt',color:'Dark Navy', size:'M',rec:true,price:'35',when:'15 minutes ago'},
          {code:554595, desc:'Leather penny loafers',category:'shoe', color:'Brown', size:'42',rec:false,price:'79.99',when:'2 days ago'}
        ]
      ,
      lastMonthKPI: {
        numVisits:2,
        conversion:50,
        ats:64,
        categoryATS: [
          { category: 'Tshirt', value: 20},
          { category: 'Pants', value: 44}
        ]
      },
      last3MonthsKPI: {
        numVisits:6,
        conversion:33.3,
        ats:198,
        categoryATS: [
          { category: 'Tshirt', value: 19.99},
          { category: 'Pants', value: 44},
          { category: 'Tie', value: 35},
          { category: 'Watch', value: 99.99}
        ]
      }
    },
    {
      priority:'green', 
      userNumber:54581, 
      gender:'female',
      category:'generationX',
      lastPurchase: 
        []
      ,
      lastMonthKPI: {
        numVisits:3,
        conversion:66,
        ats:174,
        categoryATS: [
          { category: 'Earrings', value: 10},
          { category: 'Skirt', value: 34.99},
          { category: 'Dress', value: 114}
        ]
      },
      last3MonthsKPI: {
        numVisits:5,
        conversion:33.3,
        ats:234,
        categoryATS: [
          { category: 'Earrings', value: 9.99},
          { category: 'Skirt', value: 46},
          { category: 'Dress', value: 114},
          { category: 'Tshirt', value: 40.99},
          { category: 'Pants', value: 40}
        ]
      }
    },
    {
      priority:'gold', 
      userNumber:56544, 
      gender:'male',
      category:'generationX',
      lastPurchase: 
        [
          {code:514555, desc:'Regular fit checked flannel shirt', category:'shirt',color:'Dark Navy', size:'M',rec:false,price:'35',when:'22 minutes ago'},
          {code:554595, desc:'Leather penny loafers',category:'shoe', color:'Brown', size:'42',rec:true,price:'79.99',when:'3 weeks ago'}
        ]
      ,
      lastMonthKPI: {
        numVisits:2,
        conversion:50,
        ats:64,
        categoryATS: [
          { category: 'Tshirt', value: 20},
          { category: 'Pants', value: 44}
        ]
      },
      last3MonthsKPI: {
        numVisits:6,
        conversion:33.3,
        ats:198,
        categoryATS: [
          { category: 'Tshirt', value: 19.99},
          { category: 'Pants', value: 44},
          { category: 'Tie', value: 35},
          { category: 'Watch', value: 99.99}
        ]
      }
    },
    {
      priority:'gold', 
      userNumber:95652, 
      gender:'male',
      category:'generationX',
      lastPurchase: 
        [
          {code:514555, desc:'Regular fit checked flannel shirt', category:'shirt',color:'Dark Navy', size:'M',rec:true,price:'35',when:'43 minutes ago'},
          {code:554595, desc:'Leather penny loafers',category:'shoe', color:'Brown', size:'42',rec:true,price:'79.99',when:'43 minutes ago'}
        ]
      ,
      lastMonthKPI: {
        numVisits:2,
        conversion:50,
        ats:64,
        categoryATS: [
          { category: 'Tshirt', value: 20},
          { category: 'Pants', value: 44}
        ]
      },
      last3MonthsKPI: {
        numVisits:6,
        conversion:33.3,
        ats:198,
        categoryATS: [
          { category: 'Tshirt', value: 19.99},
          { category: 'Pants', value: 44},
          { category: 'Tie', value: 35},
          { category: 'Watch', value: 99.99}
        ]
      }
    },
    {
      priority:'gold', 
      userNumber:48448, 
      gender:'male',
      category:'generationX',
      lastPurchase: 
        [
          {code:514555, desc:'Regular fit checked flannel shirt', category:'shirt',color:'Dark Navy', size:'M',rec:false,price:'35',when:'1 hour ago'},
          {code:554595, desc:'Leather penny loafers',category:'shoe', color:'Brown', size:'42',rec:false,price:'79.99',when:'2 weeks ago'}
        ]
      ,
      lastMonthKPI: {
        numVisits:2,
        conversion:50,
        ats:64,
        categoryATS: [
          { category: 'Tshirt', value: 20},
          { category: 'Pants', value: 44}
        ]
      },
      last3MonthsKPI: {
        numVisits:6,
        conversion:33.3,
        ats:198,
        categoryATS: [
          { category: 'Tshirt', value: 19.99},
          { category: 'Pants', value: 44},
          { category: 'Tie', value: 35},
          { category: 'Watch', value: 99.99}
        ]
      }
    }
  ];

  function formatDollars(amount) {
    return `${parseFloat(amount).toFixed(2)} $`;
  }

  function handleDelete(){}

export default function Shoppers() {

  const classes = useStyles();

  return (
  <div>
    <Typography variant="h5" className={classes.mainTitle}>SHOPPERS <Button startIcon={<AddIcon />}variant="outlined" color="primary" style={{position:'absolute',right:20}}>Add new Shopper</Button></Typography>
    
    <Card>
      <CardContent>
        <Typography className={classes.title}>
          Filters
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <LoyaltyIcon/>
            </ListItemIcon>
            <ListItemText primary="Priority" />
            <ListItemSecondaryAction>
              <Chip variant="outlined" color="primary" icon={<FaceIcon style={{color:'green'}}/>} label="VIP" deleteIcon={<DoneIcon />} onDelete={handleDelete}/>
              <Chip variant="outlined" color="primary" icon={<FaceIcon style={{color:'gold'}}/>} label="Standard" style={{marginLeft:20,marginRight:20}} deleteIcon={<DoneIcon />} onDelete={handleDelete}/>
              <Chip variant="outlined" color="primary" icon={<FaceIcon style={{color:'gray'}}/>} label="Ocasional" deleteIcon={<CloseIcon />} onDelete={handleDelete}/>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="With purchases" />
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

    <Card style={{marginTop:40}}>
      <CardContent>
        <Typography className={classes.title}>
          Shoppers
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Priority</TableCell>
                <TableCell align="center">User</TableCell>
                <TableCell align="center">Last Purchase</TableCell>
                <TableCell align="center">KPIs Last Month</TableCell>
                <TableCell align="center">KPIs Last 3 Months</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.userNumber}>
                  <TableCell component="th" scope="row" align="center">
                    <div>
                      <LoyaltyIcon style={{color:row.priority,fontSize:40}}/>                    
                    </div>
                    </TableCell>
                  <TableCell align="center">
                    Card Nr. {row.userNumber}
                    <div style={{marginTop:10}}>
                      {row.gender==='male' &&
                        <SvgIcon component={ManIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                      }
                      {row.gender==='female' &&
                        <SvgIcon component={WomanIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                      }
                    </div>
                    </TableCell>
                  <TableCell align="center">
                    {row.lastPurchase.length===0 &&
                        <div style={{textAlign:'center'}}>-</div>
                      }
                    <div style={{display:'table'}}>                      
                      {row.lastPurchase.map((purchase) => (
                        <div style={{width:'100%',display:'table-row', marginBottom:10,height:100,color:purchase.rec ?'green':'',fontWeight:purchase.rec ?'bold':'normal'}} align="center">
                          <div style={{float:'left'}}>
                            {purchase.category==='slippers' &&
                              <SvgIcon component={SlippersIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='sleeveless' &&
                            <SvgIcon component={SleevelessIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='skirt' &&
                              <SvgIcon component={SkirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='shorts' &&
                              <SvgIcon component={ShortsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }                            
                            {purchase.category==='shoe' &&
                              <SvgIcon component={ShoeIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='polo' &&
                              <SvgIcon component={PoloIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='tshirt' &&
                              <SvgIcon component={TshirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='shirt-1' &&
                              <SvgIcon component={Shirt1Icon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='pants' &&
                              <SvgIcon component={PantsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='hoodie' &&
                              <SvgIcon component={HoodieIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='high-heels' &&
                              <SvgIcon component={HighHeelsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='dress' &&
                              <SvgIcon component={DressIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='suit' &&
                              <SvgIcon component={SuitIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='shirt' &&
                              <SvgIcon component={ShirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='watch' &&
                              <SvgIcon component={WatchIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {purchase.category==='cap' &&
                              <SvgIcon component={CapIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                          </div>
                          <div style={{float:'left',textAlign:'left'}}>
                            <div>Ref. {purchase.code}</div>
                            <div>{purchase.desc}</div>
                            <div>{purchase.color} | {purchase.size} | {formatDollars(purchase.price)}</div>
                            <div>Purchased {purchase.when}</div>
                          </div>
                        </div>                      
                      ))}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      Nº Visits
                    </div>
                    <div>
                      {row.lastMonthKPI.numVisits}
                    </div>
                    <Divider style={{margin:10}}/>
                    <div className={classes.kpi}>
                      <div>Conversion</div>
                      <div>{row.lastMonthKPI.conversion} %</div>
                    </div>
                    <div className={classes.kpi}>
                      <div>ATS</div>
                      <div>{formatDollars(row.lastMonthKPI.ats)}</div>
                    </div>
                    <div style={{clear:'both'}}></div>
                    <Divider style={{margin:10,clear:'both'}}/>
                    <div>
                      {row.lastMonthKPI.categoryATS.map((categoryATS) => (
                        <div>
                          <span>{categoryATS.category} - {formatDollars(categoryATS.value)}</span>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      Nº Visits
                    </div>
                    <div>
                      {row.last3MonthsKPI.numVisits}
                    </div>
                    <Divider style={{margin:10}}/>
                    <div className={classes.kpi}>
                      <div>Conversion</div>
                      <div>{row.last3MonthsKPI.conversion} %</div>
                    </div>
                    <div className={classes.kpi}>
                      <div>ATS</div>
                      <div>{formatDollars(row.last3MonthsKPI.ats)}</div>
                    </div>
                    <div style={{clear:'both'}}></div>
                    <Divider style={{margin:10,clear:'both'}}/>
                    <div>
                      {row.last3MonthsKPI.categoryATS.map((categoryATS) => (
                        <div>
                          <span>{categoryATS.category} - {formatDollars(categoryATS.value)}</span>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link>
                    <EditIcon/>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={91567}
          rowsPerPage={5}
          page={0}
        />
      </CardContent>
    </Card>
  </div>);
};
