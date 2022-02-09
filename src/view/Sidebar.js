import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const Side = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 15%;
  float: left;
  padding: 15px;
  border: 0.5em solid #017865;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 0.5em;
    height: 10%;
    border: 0.2em solid #017865;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

const Sidebar = () => {
  const pathName = useLocation().pathname;

  const menus = [
    { name: 'Toggle', path: '/toggle' },
    { name: 'Modal', path: '/Modal' },
    { name: 'Tab', path: '/Tab' },
    { name: 'Tag', path: '/Tag' },
    { name: 'AutoComplete', path: '/AutoComplete' },
    { name: 'ClickToEdit', path: '/ClickToEdit' },
  ];
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{
                color: '#004225',
                fontSize: '1.3rem',
                textDecoration: 'none',
              }}
              to={menu.path}
              key={index}
            >
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
};

export default Sidebar;
