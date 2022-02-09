import React from 'react';
import styled from 'styled-components';

const Active = styled.div`
  font-weight: 800;
`

function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <Active>
      <p>{menu.name}</p>
    </Active>
  ) : (
    <div>
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;
