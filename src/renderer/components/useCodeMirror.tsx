import { useCallback, useEffect, useState } from 'react';
import {
  EditorState,
  EditorView,
  basicSetup,
  ViewUpdate,
} from '@codemirror/basic-setup';
import { Extension } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown';
import { gruvboxDark } from 'cm6-theme-gruvbox-dark';

export const useCodeMirror = (
  extensions: Extension[],
  state: string,
  updateData: Function
) => {
  const [initContent, setInitContent] = useState(state);
  const [element, setElement] = useState<HTMLElement>();

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  const refreshPreview = (value: string) => {
    updateData(value);
  };

  useEffect(() => {
    if (!element) return;

    const view = new EditorView({
      state: EditorState.create({
        doc: state,
        extensions: [
          basicSetup,
          markdown(),
          ...extensions,
          EditorView.updateListener.of((v: ViewUpdate) => {
            if (v.docChanged) {
              //refreshPreview(view.state.doc.toString());
            }
          }),
        ],
      }),
      parent: element,
    });
    view.focus();

    return () => view?.destroy();
  });

  return { ref };
};
