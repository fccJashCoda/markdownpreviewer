import { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';

const MarkdownPreview = styled.div`
  display: flex;
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  const onChange = (input) => {
    setMarkdown(input);
  };

  return (
    <>
      <h1>Markdown Previewer</h1>
      <MarkdownPreview>
        <Editor action={onChange} value={markdown} />
        <Previewer markdown={markdown} />
      </MarkdownPreview>
    </>
  );
};

export default MarkdownPreviewer;
