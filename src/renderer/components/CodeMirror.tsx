import styled from 'styled-components';
import { useCodeMirror } from './useCodeMirror';
import { Extension } from '@codemirror/state';

import { Tabbar } from './Tabbar';

type CodeMirrorProps = {
  extensions: Extension[];
};

const Box = styled.div`
  width: 96.9vw !important;
  min-width: 50vw;
  max-width: 96.9vw;
`;

const Editor = styled.div`
  .cm-editor {
    height: 91.3vh;
  }

  .cm-scroller {
    overflow: auto;
  }

  .cm-gutter {
    height: 91.3vh;
  }
`;

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

export const CodeMirror = ({ extensions, state, updateData }) => {
  const { ref } = useCodeMirror(extensions, state, updateData);

  return (
    <Box>
      <Tabbar tabs={tabs} />
      <Editor ref={ref} />
    </Box>
  );
};
