import { useState } from 'react';
import marked from 'marked';
import Editor from './Editor';
import Previewer from './Previewer';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  const onChange = (input) => {
    setMarkdown(input);
  };

  return (
    <div>
      <h1>Markdown Previewer</h1>
      <Editor action={onChange} value={markdown} />
      <Previewer markdown={markdown} />
    </div>
  );
};

export default MarkdownPreviewer;
