import { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';

const MarkdownPreview = styled.div`
  display: flex;
  justify-content: space-around;
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

  const onChange = (input) => {
    setMarkdown(input);
  };

  const handleApplicationState = (obj) => {
    setApplicationState({
      ...applicationState,
      ...obj,
    });
  };

  console.log('editor state', applicationState);
  return (
    <div>
      <MarkdownPreview>
        <Editor
          action={onChange}
          value={markdown}
          status={applicationState}
          statusHandler={handleApplicationState}
          color={true}
          display="none"
        />
        <Previewer
          markdown={markdown}
          status={applicationState}
          statusHandler={handleApplicationState}
        />
      </MarkdownPreview>
    </div>
  );
};

export default MarkdownPreviewer;
