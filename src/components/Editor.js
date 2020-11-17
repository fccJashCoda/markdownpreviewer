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
  display: ${(props) => (props.display ? 'none' : 'block')};
  // margin-left: 2em;
  min-width: 570px;
  width: 600px;
  min-height: 400px;
  align-self: center;
  box-sizing: border-box;
  @media (max-width: 700px) {
    min-width: 90%;
    width: auto;
  }
`;

const TextArea = styled.textarea`
  outline: none;
  resize: vertical;
  min-height: 250px;
  width: 99%;
  background: #000;
  color: #fff;
  border-top: none;
`;

const Editor = ({ action, value, status, titlebar }) => {
  useEffect(() => {
    const data = value ? value : placeholder;
    action(data);
  }, []);

  return (
    <EditorBox display={status.previewerHighlighted}>
      {titlebar}
      <TextArea
        value={value ? value : placeholder}
        onChange={(e) => action(e.target.value)}
      />
    </EditorBox>
  );
};

export default Editor;
