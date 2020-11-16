import { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';

const MarkdownPreview = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  const onChange = (input) => {
    setMarkdown(input);
  };

  return (
    <div>
      <MarkdownPreview>
        <Editor action={onChange} value={markdown} />
        <Previewer markdown={markdown} />
      </MarkdownPreview>
    </div>
  );
};

export default MarkdownPreviewer;
