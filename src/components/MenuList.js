import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menu, btnHandler }) => {
  return (
    <div className="row">
      {menu.map(dish => (
        <MenuItem {...dish} key={dish.name} btnHandler={btnHandler} />
      ))}
    </div>
  );
};

export default MenuList;
