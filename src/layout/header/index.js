import React,{Fragment} from 'react'
 import { Grid,  Link } from '@material-ui/core';
const logoUrl = require('../../assets/pic/logo.png');


// list of items
const list = [
  { name: 'HOME',url:"Home" },
  { name: 'SEMSM',url:"Semsm" },
  { name: 'SERVICES',url:'Services' },
  { name: 'PRICES',url:"Prices" },
  { name: 'CONTACT',url:"Subscribe" }
  
];

// One item component
// selected prop will be passed


// All items component
// Important! add unique key
const index = () => {
  return (
    // <nav> <ul> <button> 🞬 </button> <li> <a> About Me </a> </li> <li> <a> Projects </a> </li> <li> <a> CV </a> </li> <li> <a> Contacts </a> </li> </ul> </nav>
<Fragment>


<Grid item>
<nav className="menu-main-rec">
      <ul className="menu-rec"
      >
        {list.map((menuItem, key) =>
          <li  key={key}>
            <Link className="menu-item link" href={menuItem.url}>{menuItem.name}</Link>
          </li>
        )}


      </ul>
    </nav>
</Grid>
<Grid  item >
            <img className="logo"
                    alt="Semsm"
                    src={logoUrl}
                    
                />
            </Grid>
</Fragment>
  );
};
export default index;
