import { useEffect } from 'react';
import styled from 'styled-components';

const placeholder = `
# To my React Markdown Previewer, welcome, you are!

## A sub-heading, this is...
### And some other cool stuff,\`<div></div>\`, here is:

\`\`\`
// A comment in a function, this is.

function checkPosition(position) {
  if (position === 'high ground') {
    return 'It\\\'s over Anakin';
  }
}
\`\`\`

Making text **bold** in this one too, you can!
And _italic_.
Or **_both!_**
And to ~~cross stuff out~~, free, you are.

[Links](https://www.freecodecamp.com), and
> Block Quotes!

we have.

And if to get really crazy, you want, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, lists, there are.
  - Bulleted, some are.
     - With different indentation levels.
        - That looking like this one, they do.


1. Numbererd lists too, there are.
1. Or if to use just 1s ,you want!
1. And last but not least, forgetting embedded images, let us not:

![FreeCodeCamp Logo](https://en.wikipedia.org/wiki/FreeCodeCamp#/media/File:FreeCodeCamp_logo.png)
`;

const EditorBox = styled.div`
  display: ${(props) => (props.display ? 'none' : 'block')};
  min-width: 570px;
  width: 600px;
  align-self: center;
  box-sizing: border-box;
  @media (max-width: 700px) {
    margin-top: 0;
    min-width: 90%;
    width: 100%;
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
        id="editor"
      />
    </EditorBox>
  );
};

export default Editor;
