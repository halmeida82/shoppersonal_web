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
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SvgIcon from '@material-ui/core/SvgIcon';
import Divider from '@material-ui/core/Divider';

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
    color:'green',
    fontWeight:"bolder"
  }
});

const currentlySalesFloor = 
  [
    {
      priority:'green', userNumber:5700, 
      recommendations:
      [
        {code:123456, desc:'Skinny dark wash Jude jeans', category:'pants',color:'Light Blue', size:'38', zone:'Mens Casual',price:'39.99'},
        {code:789015, desc:'Supersport Chrono',category:'watch', color:'Silver', size:'Unique', zone:'Main Counter',price:'99.99'}
      ], 
      conversion:15,
      ats: 125,
      pastPurchases: 
        [
          {code:514555, desc:'Regular fit checked flannel shirt', category:'shirt',color:'Dark Navy', size:'M', price:'35',when:'yesterday'},
          {code:554595, desc:'Leather penny loafers',category:'shoe', color:'Brown', size:'42', price:'79.99', when:'2 weeks ago'}
        ]
      },
    {
      priority:'gold', userNumber:8394, 
      recommendations: 
      [
        {code:998652, desc:'Metallic strap sandals', category:'high-heels',color:'Silver', size:'6', zone:'Women Shoes',price:'35'},
        {code:484264, desc:'Satin shirt dress',category:'dress', color:'Aqua Green', size:'12', zone:'Women Dress',price:'49,99'}
      ], 
      conversion:5, 
      ats:10,
      pastPurchases: 
        [
          {code:541575, desc:'Boat neck knit dress', category:'dress',color:'White', size:'12',price:'59.99',when:'45 days ago'}
        ]
    }
  ];

const lastVisits = 
  [
    {
      priority:'gold', 
      userNumber:2687, 
      recommendations:
      [
        {code:954134, desc:'Skinny dark wash Jude jeans', category:'pants',color:'Light Blue', size:'38',sold:false, price:'39.99'},
        {code:132785, desc:'Supersport Chrono',category:'watch', color:'Silver', size:'Unique',sold:false, price:'99.99'}
      ], 
      conversion:false, 
      ats:0, 
      contact:false, 
      boughtPerc:0,
      purchase:[]
  },
  {
    priority:'green',
    userNumber: 1256, 
    recommendations:
    [
      {code:564642, desc:'Leather strass straps sandals', category:'high-heels',color:'Black', size:'6',sold:false, price:'49,99'},
      {code:687626, desc:'Belted cupro dress',category:'dress', color:'Aqua Green', size:'12',sold:true,price:'70'}
    ],
    conversion: true,
    ats: 117,
    contact:true, 
    boughtPerc:65,
    purchase: 
    [
      {code:687626, desc:'Belted cupro dress',category:'dress', color:'Aqua Green', size:'12',price:'70'}    
    ]
  }
];

function formatDollars(amount) {
  return `${parseFloat(amount).toFixed(2)} $`;
}

export default function Store() {

  const classes = useStyles();

  return (
  <div>
    <Typography variant="h5" className={classes.mainTitle}>STORE</Typography>
    <Card>
      <CardContent>
        <Typography className={classes.title}>
          Currently at the sales floor ({currentlySalesFloor.length})
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Priority</TableCell>
                <TableCell align="center">User</TableCell>
                <TableCell align="center">Past Purchases</TableCell>
                <TableCell align="center">Key Facts</TableCell>
                <TableCell align="center">Recommendations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentlySalesFloor.map((row) => (
                <TableRow key={row.userNumber}>
                  <TableCell component="th" scope="row" align="center">
                    <div>
                      <LoyaltyIcon style={{color:row.priority,fontSize:40}}/>                    
                    </div>
                    </TableCell>
                  <TableCell align="center">
                    Card Nr. {row.userNumber}
                    <div style={{marginTop:10}}>
                      <img src={'/static/images/shopper'+row.userNumber+'.png'} alt="shopper1" width="80px"/>
                    </div>
                    </TableCell>
                    <TableCell align="center">
                  <div style={{display:'table'}}>
                      {row.pastPurchases.map((purchase) => (
                        <div style={{width:'100%',display:'table-row', marginBottom:5,height:100}} align="center">
                          
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
                  <TableCell align="center">Conversion {row.conversion} %
                  <Divider style={{margin:10}}/>
                  ATS {formatDollars(row.ats)}</TableCell>
                  <TableCell align="center" >
                    <div style={{display:'table'}}>
                      {row.recommendations.map((recommendation) => (
                        <div style={{width:'100%',display:'table-row', marginBottom:10,height:100}} align="center">
                          <div style={{float:'left'}}>
                            {recommendation.category==='slippers' &&
                              <SvgIcon component={SlippersIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='sleeveless' &&
                            <SvgIcon component={SleevelessIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='skirt' &&
                              <SvgIcon component={SkirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='shorts' &&
                              <SvgIcon component={ShortsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }                            
                            {recommendation.category==='shoe' &&
                              <SvgIcon component={ShoeIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='polo' &&
                              <SvgIcon component={PoloIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='tshirt' &&
                              <SvgIcon component={TshirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='shirt-1' &&
                              <SvgIcon component={Shirt1Icon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='pants' &&
                              <SvgIcon component={PantsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='hoodie' &&
                              <SvgIcon component={HoodieIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='high-heels' &&
                              <SvgIcon component={HighHeelsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='dress' &&
                              <SvgIcon component={DressIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='suit' &&
                              <SvgIcon component={SuitIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='shirt' &&
                              <SvgIcon component={ShirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='watch' &&
                              <SvgIcon component={WatchIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='cap' &&
                              <SvgIcon component={CapIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                          </div>
                          <div style={{float:'left',textAlign:'left'}}>
                            <div>Ref. {recommendation.code}</div>
                            <div>{recommendation.desc}</div>
                            <div>{recommendation.color} | {recommendation.size} | {formatDollars(recommendation.price)} </div>
                            <div>Available @ {recommendation.zone}</div>
                          </div>
                        </div>                      
                      ))}
                    </div>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>

    <Card style= {{marginTop:40}}>
      <CardContent>
        <Typography className={classes.title}>
          Last Visits
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Priority</TableCell>
                <TableCell align="center">User</TableCell>
                <TableCell align="center">Recommendations</TableCell>
                <TableCell align="center">Success</TableCell>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">Purchase</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lastVisits.map((row) => (
                <TableRow key={row.userNumber}>
                  <TableCell component="th" scope="row" align="center">
                    <div>
                      <LoyaltyIcon style={{color:row.priority,fontSize:40}}/>                    
                    </div>
                    </TableCell>
                  <TableCell align="center">
                    Card Nr. {row.userNumber}
                    <div style={{marginTop:10}}>
                      <img src={'/static/images/shopper'+row.userNumber+'.png'} alt="shopper1" width="80px"/>
                    </div>
                    </TableCell>
                    <TableCell align="center">
                  <div style={{display:'table'}}>
                      {row.recommendations.map((recommendation) => (
                        <div style={{width:'100%',display:'table-row', marginBottom:10,height:100,color:recommendation.sold ?'green':'',fontWeight:recommendation.sold?'bold':'normal'}} align="center">
                          <div style={{float:'left'}}>
                            {recommendation.category==='slippers' &&
                              <SvgIcon component={SlippersIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='sleeveless' &&
                            <SvgIcon component={SleevelessIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='skirt' &&
                              <SvgIcon component={SkirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='shorts' &&
                              <SvgIcon component={ShortsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }                            
                            {recommendation.category==='shoe' &&
                              <SvgIcon component={ShoeIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='polo' &&
                              <SvgIcon component={PoloIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='tshirt' &&
                              <SvgIcon component={TshirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='shirt-1' &&
                              <SvgIcon component={Shirt1Icon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='pants' &&
                              <SvgIcon component={PantsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='hoodie' &&
                              <SvgIcon component={HoodieIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='high-heels' &&
                              <SvgIcon component={HighHeelsIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='dress' &&
                              <SvgIcon component={DressIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='suit' &&
                              <SvgIcon component={SuitIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='shirt' &&
                              <SvgIcon component={ShirtIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='watch' &&
                              <SvgIcon component={WatchIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                            {recommendation.category==='cap' &&
                              <SvgIcon component={CapIcon} viewBox="0 0 480 480" className={classes.recIcon}/>
                            }
                          </div>
                          <div style={{float:'left',textAlign:'left'}}>
                            <div>Ref. {recommendation.code}</div>
                            <div>{recommendation.desc}</div>
                            <div>{recommendation.color} | {recommendation.size} | {formatDollars(recommendation.price)}</div>
                          </div>
                        </div>                      
                      ))}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>Conversion</div>
                    <div>{row.conversion && 
                      <span>Yes</span>
                    }
                    {!row.conversion && 
                      <span>No</span>
                    }
                    </div>
                    <Divider style={{margin:10}}/>
                    <div>ATS</div>
                    <div>{row.ats > 0 && 
                      <span>{formatDollars(row.ats)}</span>
                    }
                    {!row.ats && 
                      <span>-</span>
                    }
                    </div>
                  </TableCell>
                  <TableCell align="center" >
                    {row.contact && 
                      <span>Yes</span>
                    }
                    {!row.contact && 
                      <span>No</span>
                    }
                  </TableCell>
                  <TableCell align="center" >
                        
                          {row.boughtPerc >0 && 
                          <div>
                            <div>Success</div>
                            <span>{row.boughtPerc}%</span>
                          </div>
                          }
                        <Divider style={{margin:10}}/>
                    <div style={{display:'table'}}>
                      
                      {row.purchase.map((purchase) => (
                        <div style={{width:'100%',display:'table-row', marginBottom:10,height:100}} align="center">
                          
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
                          </div>
                        </div>                      
                      ))}
                    </div>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  
    
  </div>);
};
