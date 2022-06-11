import { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import styled from 'styled-components';

interface fileData {
  path: string;
  data: string;
  extention: string;
}

interface fileProps {
  callback: (param: fileData) => any;
}

const Nav = styled.div`
  height: 3vh;
  background: #1d2021;
  color: #fbf1c7;

  .button-close {
    transition: all 0.5s ease;
    color: #c0392b;
    &:hover {
      background: #c0392b;
      color: white;
    }
  }
`;

export const Navbar = ({ callback }: fileProps) => {
  const [title, setTitle] = useState('Operation: Doomsday editor');

  const handleClose = () => {
    window.electron.ipcRenderer.closeApp();
  };

  return (
    <Nav className="d-flex flex-row justify-content-between align-items-center p2">
      <div className="options"></div>
      <div className="title text-center fw-semibold">{title}</div>
      <div className="text-center px-2 button-close" onClick={handleClose}>
        <VscChromeClose />
      </div>
    </Nav>
  );
};
