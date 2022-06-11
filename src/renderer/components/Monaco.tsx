import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import { Tabbar } from './Tabbar';

// CodeMirror Extentions
import { markdown } from '@codemirror/lang-markdown';
import { vim } from '@replit/codemirror-vim';

const Box = styled.div`
  width: 97vw !important;
  min-width: 50vw;
  max-width: 97vw;
`;

export const Monaco = ({ content, refreshPreview, tabName }) => {
  const [value, setValue] = useState(content);

  const tabs = [
    {
      title: tabName ? tabName : 'no files...',
      active: true,
    },
    {
      title: 'Doom.md',
      active: false,
    },
  ];

  useEffect(() => {
    setValue(content);
  });

  return (
    <Box>
      <Tabbar tabs={tabs} />
      <CodeMirror
        value={value}
        height="91.3vh"
        autoFocus="true"
        extensions={[markdown(), vim()]}
        onChange={(value, viewUpdate) => {
          refreshPreview(value);
        }}
      />
    </Box>
  );
};
