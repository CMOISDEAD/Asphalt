import { useState } from 'react';
import styled from 'styled-components';

const Tab = styled.div`
  border: 0.5px dotted black;
  background: #1d2021;
  color: #ebdbb2;
  &.active {
    background: #282828;
    color: #fbf1c7;
  }
`;

export const TabItem = ({ title, active }) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <Tab className={isActive ? 'px-2 active' : 'px-2'} onClick={handleClick}>
      {title}
    </Tab>
  );
};
