import React, { useState } from 'react';
import Toolbar from '@components/layout/header/Toolbar';
import Drawer from '@components/layout/header/Drawer';

function Header() {
  const [isShow, setIsShow] = useState(false);

  const toggleDrawer = () => {
    setIsShow(false);
  };

  const openDrawer = () => {
    setIsShow(true);
  };

  return (
    <>
      <Toolbar openDrawerHandler={openDrawer} />
      <Drawer isShow={isShow} toggleDrawerHandler={toggleDrawer} />
    </>
  );
}

export default Header;
