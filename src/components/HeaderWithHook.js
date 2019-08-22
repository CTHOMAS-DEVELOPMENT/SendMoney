import React, { useState } from 'react';

const Header =({menuclick}) => {
  const menuItems=["Full View","Form Only","Transactions"];
  const [selected, setSelected] = useState("Full View");
  const setCurrent=(val)=>{
    setSelected(val);
    menuclick(val);
  }
  return(
    <div className='item detaildiv'>
      <ul className="choicebuttons">
        {
          menuItems.map((item, index) =>
            <li key={index}>
              <a className={selected === item ? 'active' : 'dormant'} style={{padding: '5px'}} onClick={() => setCurrent(item)}>{item}</a>
            </li>
          )
        }
      </ul>
    </div>
  );
}
export default Header;
