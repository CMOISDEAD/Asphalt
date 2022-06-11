import styled from 'styled-components';
import {
  VscFile,
  VscSearch,
  VscSave,
  VscOpenPreview,
  VscFilePdf,
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
  store,
}: fileProps) => {
  const [flag, setFlag] = useState(false);

  const sendNotification = (title: string, message: string, type: string) => {
    store.addNotification({
      title,
      message,
      type,
      insert: 'top',
      container: 'bottom-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  };

  const handleFile = async (e: React.ChangeEvent<any>) => {
    e.preventDefault;
    const filePath: fileData = await window.electron.ipcRenderer.openFile(); // FIX: Type 'string' is not assignable to type 'fileData'.
    if (filePath) callback(filePath);
  };

  const handleSave = (e: React.ChangeEvent<any>) => {
    e.preventDefault;
    if (fileContent) {
      window.electron.ipcRenderer.saveFile(fileContent);
      sendNotification('File saved!', 'File Saved succesfully.', 'success');
    }
  };

  const handlePreview = (e: React.ChangeEventHandler<any>) => {
    e.preventDefault;
    setPreview({ show: flag ? 'none' : 'block' });
    setFlag(flag ? false : true);
  };

  const handlePrint = (e: React.ChangeEvent<any>) => {
    e.preventDefault;
    if (fileContent.path) {
      window.electron.ipcRenderer.handleMdToPdf(fileContent.path);
      sendNotification('Pdf created!', 'Pdf created succesfully.', 'success');
    }
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
          <VscSave onClick={handleSave} />
        </li>
        <li>
          <VscOpenPreview onClick={handlePreview} />
        </li>
        <li>
          <VscFilePdf onClick={handlePrint} />
        </li>
      </ul>
    </Container>
  );
};
