import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import { Tabbar } from './Tabbar';

// CodeMirror Extentions
import { markdown } from '@codemirror/lang-markdown';
import { vim } from '@replit/codemirror-vim';

const tabs = [
  {
    title: 'Main.md',
  },
  {
    title: 'Work.md',
  },
  {
    title: 'Notes.md',
  },
];

const Box = styled.div`
  width: 96.9vw !important;
  min-width: 50vw;
  max-width: 96.9vw;
`;

export const Monaco = ({ content, refreshPreview }) => {
  const [value, setValue] = useState(content);

  useEffect(() => {
    setValue(content);
  });

  return (
    <Box>
      <Tabbar tabs={tabs} />
      <CodeMirror
        value={value}
        height="91vh"
        extensions={[markdown(), vim()]}
        onChange={(value, viewUpdate) => {
          refreshPreview(value);
        }}
      />
    </Box>
  );
};
