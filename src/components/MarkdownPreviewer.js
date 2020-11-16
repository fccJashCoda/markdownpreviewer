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

  const onChange = (input) => {
    setMarkdown(input);
  };

  return (
    <div>
      <MarkdownPreview>
        <Editor display={'none'} action={onChange} value={markdown} />
        <Previewer markdown={markdown} />
      </MarkdownPreview>
    </div>
  );
};

export default MarkdownPreviewer;
