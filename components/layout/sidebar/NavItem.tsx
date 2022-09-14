/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NavItem = ({
  sidebarStatus,
  menuTitle,
  subMenu,
  subMenuArray,
  hrefLink,
  children,
}: any) => {
  const [subMenuToggleStatus, setSubMenuToggleStatus] =
    useState(false);
  const subMenuToggle = () => {
    setSubMenuToggleStatus(!subMenuToggleStatus);
  };

  useEffect(() => {
    if (!sidebarStatus) {
      setSubMenuToggleStatus(false);
    }
  }, [sidebarStatus]);
  //console.log('submenu', sidebarStatus)
  return (
    <>
      <Link href={hrefLink}>
        <div
          className="inline-flex items-center text-white px-7 w-52 h-12 bg-slate-600 py-3 hover:text-red-600 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg cursor-pointer relative group"
          onClick={subMenuToggle}
        >
          <h4 className="text-center">{menuTitle}</h4>
        </div>
      </Link>
    </>
  );
};

export default NavItem;
