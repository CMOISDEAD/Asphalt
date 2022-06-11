import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

// Components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { FileTree } from './components/FileTree';
//import { CodeMirror } from './components/CodeMirror';
import { Monaco } from './components/Monaco';
import { Preview } from './components/Preview';
import { Footer } from './components/Footer';

const Container = styled.div`
  display: flex;
`;

const Hello = () => {
  const [doc, setDoc] = useState('');
  const [appState, setAppState] = useState({
    path: '',
    fileName: '',
    extention: '',
    data: '',
  });
  const [config, setConfig] = useState({
    show: 'none',
  });
  const [fileTree, setFileTree] = useState({
    show: 'none',
  });

  useEffect(() => {}, [appState]);

  return (
    <div>
      <Navbar callback={setAppState} />
      <Container>
        <Sidebar
          callback={setAppState}
          fileContent={{ path: appState.path, value: doc }}
          setPreview={setConfig}
          setFileView={setFileTree}
        />
        <FileTree data={fileTree} />
        <Monaco
          content={appState.data}
          refreshPreview={setDoc}
          tabName={appState.fileName}
        />
        <Preview content={doc} preferences={config} />
      </Container>
      <Footer
        title={appState.path ? appState.path : 'No file'}
        lang={'markdown'}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

// <CodeMirror
//   extensions={[vim()]}
//   state={appState.data}
//   updateData={refreshContent}
//   className="pe-1"
//   />
