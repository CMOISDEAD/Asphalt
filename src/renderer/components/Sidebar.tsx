import styled from 'styled-components';
import {
  VscFile,
  VscSearch,
  VscDebugAll,
  VscOpenPreview,
} from 'react-icons/vsc';
import { useState } from 'react';

const Container = styled.div`
  width: auto;
  height: 94.3vh;
  background: #1d2021;
  color: #fbf1c7;
  ul {
    font-size: 2rem;
    font-weight: bold;
    list-style: none;
    padding: 0;
  }
`;

interface fileData {
  path: string;
  data: string;
  extention: string;
}

interface fileProps {
  callback: (param: fileData) => any;
}

export const Sidebar = ({
  callback,
  fileContent,
  setPreview,
  setFileView,
}: fileProps) => {
  const [flag, setFlag] = useState(false);

  const handleFile = async (e: React.ChangeEvent<any>) => {
    e.preventDefault;
    const filePath: fileData = await window.electron.ipcRenderer.openFile(); // FIX: Type 'string' is not assignable to type 'fileData'.
    callback(filePath);
  };

  const handleSave = (e: React.ChangeEvent<any>) => {
    e.preventDefault;
    window.electron.ipcRenderer.saveFile(fileContent);
  };

  const handlePreview = (e: React.ChangeEventHandler<any>) => {
    e.preventDefault;
    setPreview({ show: flag ? 'none' : 'block' });
    setFlag(flag ? false : true);
  };

  const handlePreviewFileTree = (e: React.ChangeEventHandler<any>) => {
    e.preventDefault;
    setFileView({ show: flag ? 'none' : 'block' });
    setFlag(flag ? false : true);
  };

  return (
    <Container className="p-2">
      <ul>
        <li>
          <VscFile onClick={handlePreviewFileTree} />
        </li>
        <li>
          <VscSearch onClick={handleFile} />
        </li>
        <li>
          <VscDebugAll onClick={handleSave} />
        </li>
        <li>
          <VscOpenPreview onClick={handlePreview} />
        </li>
      </ul>
    </Container>
  );
};
