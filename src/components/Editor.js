import { useEffect } from 'react';
import styled from 'styled-components';

const placeholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const EditorBox = styled.div`
  display: ${(props) => props.display || 'block'};
  margin-left: 2em;
  min-width: 570px;
  width: 600px;

  box-sizing: border-box;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.5em;
  background: #f0f0f0;
  border: 1px solid #000;
  border-bottom: none;
`;

const TextArea = styled.textarea`
  outline: none;
  resize: vertical;
  min-height: 30%;
  width: 99%;
  background: #000;
  color: #fff;
  border-top: none;
`;

const Editor = ({ action, value }) => {
  useEffect(() => {
    const data = value ? value : placeholder;
    action(data);
  }, []);

  return (
    <EditorBox>
      <TitleBar>
        <h2 style={{ margin: 0, padding: 0 }}>editor</h2>
        <button>
          <i class="fas fa-expand-arrows-alt"></i>
        </button>
      </TitleBar>
      <TextArea
        value={value ? value : placeholder}
        onChange={(e) => action(e.target.value)}
      />
    </EditorBox>
  );
};

export default Editor;
