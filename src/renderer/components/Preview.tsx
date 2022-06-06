import styled from 'styled-components';
import Markdown from 'marked-react';
import { useEffect, useState } from 'react';

const Box = styled.div`
  display: ${(props) => props.show};
  background: #1d2021;
  color: #fbf1c7;
  height: 94.3vh;
  width: 100vw;
  overflow: scroll;
  overflow-x: hidden;
`;

export const Preview = ({ content, preferences }: HTMLElement<any>) => {
  const [previewConfig, setPreviewConfig] = useState({ show: false });

  useEffect(() => {
    setPreviewConfig(preferences);
  });

  return (
    <Box show={previewConfig.show}>
      <Markdown>{content}</Markdown>
    </Box>
  );
};
