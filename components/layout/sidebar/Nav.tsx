import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';

const Nav = ({ sidebarOutsideClick }: any) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [subMenuToggleStatus, setSubMenuToggleStatus] =
    useState(false);

  const sidebarClose = () => {
    setSidebarStatus(false);
  };

  const sidebarOpen = () => {
    setSidebarStatus(true);
  };

  const subMenuToggle = () => {
    setSubMenuToggleStatus(!subMenuToggleStatus);
  };

  //if menu has chile menu then  use separate array
  const childMenu = [
    {
      subMenuTitle: 'Rubik',
      linkHref: '/rubik',
    },
    {
      subMenuTitle: 'Noto Sans',
      linkHref: '/NotoSans',
    },
    {
      subMenuTitle: 'Outfit',
      linkHref: '/Outfit',
    },
  ];

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(false);
    }
  }, [sidebarOutsideClick]);
  return (
    <>
      <nav className="flex flex-col mx-4 my-6 space-y-4">
        <NavItem
          hrefLink="/button"
          sidebarStatus={sidebarStatus}
          menuTitle="Buttons"
          subMenu={false}
          subMenuArray={null}
        >
          <div className="h-10" />
        </NavItem>
        <NavItem
          hrefLink="#"
          sidebarStatus={sidebarStatus}
          menuTitle="Typography"
          subMenu={true}
          subMenuArray={childMenu}
        >
          <div className="h-10" />
        </NavItem>
      </nav>
    </>
  );
};

export default Nav;
