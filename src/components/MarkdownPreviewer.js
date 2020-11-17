import { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';
import TitleBar from './TitleBar';

const MarkdownPreview = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 2em;
  @media (max-width: 1475px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');
  const [applicationState, setApplicationState] = useState({
    editorHighlighted: false,
    previewerHighlighted: false,
    color: 'green',
  });

  const EditorTitleBar = (
    <TitleBar
      title={'Editor'}
      action={() =>
        setApplicationState({
          ...applicationState,
          editorHighlighted: !applicationState.editorHighlighted,
        })
      }
      display={applicationState.editorHighlighted}
    />
  );

  const PreviewerTitleBar = (
    <TitleBar
      title={'Previewer'}
      action={() =>
        setApplicationState({
          ...applicationState,
          previewerHighlighted: !applicationState.previewerHighlighted,
        })
      }
      display={applicationState.previewerHighlighted}
    />
  );

  const onChange = (input) => {
    setMarkdown(input);
  };

  console.log(applicationState.test);

  return (
    <div>
      <MarkdownPreview>
        <Editor
          action={onChange}
          value={markdown}
          status={applicationState}
          color={true}
          display="none"
          titlebar={EditorTitleBar}
        />
        <Previewer
          markdown={markdown}
          status={applicationState}
          titlebar={PreviewerTitleBar}
        />
      </MarkdownPreview>
    </div>
  );
};

export default MarkdownPreviewer;
