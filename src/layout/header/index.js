import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Link } from '@material-ui/core';


// list of items
const list = [
  { name: 'HOME',url:"Home" },
  { name: 'SEMSM',url:"Semsm" },
  { name: 'SERVICES',url:"Service" },
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
  );
};
export default index;
