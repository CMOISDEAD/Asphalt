import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { VscMarkdown } from 'react-icons/vsc';

const Container = styled.div`
  display: ${(props) => props.show};
  height: 94.3vh;
  min-width: 10vw;
  background: #282828;
  color: #ebdbb2;
  ul {
    list-style: none;
    padding: 0;
    li {
      padding-left: 0.5vw;
      font-size: 0.9rem;
      .file {
        font-size: 1.6rem;
      }
    }
    .active {
      background: #3c3836;
      color: #fbf1c7;
    }
  }
  .small {
    font-size: 0.8rem;
  }
`;

export const FileTree = ({ data }) => {
  const [fileTreeConfig, setFileTreeConfig] = useState({ show: false });

  useEffect(() => {
    setFileTreeConfig(data);
  });

  return (
    <Container show={fileTreeConfig.show}>
      <ul>
        <p className="fw-bold fs-6 p-1 text-center">Local</p>
        <li className="active">
          <VscMarkdown className="file" />
          Notes.md
        </li>
        <li>
          <VscMarkdown className="file" />
          Home.md
        </li>
        <li>
          <VscMarkdown className="file" />
          Work.md
        </li>
      </ul>
      <p className="fw-bold fs-6 p-1 text-center">Server</p>
      <p className="text-center small fst-italic">
        Please connect to database...
      </p>
    </Container>
  );
};
