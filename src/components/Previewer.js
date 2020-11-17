import marked from 'marked';
import styled from 'styled-components';

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
});

const PreviewerBox = styled.div`
  display: ${(props) => (props.display ? 'none' : 'block')};
  // margin-right: 2em;
  width: 800px;
  align-self: center;
  @media (max-width: 900px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: auto;
  }
`;

const ContentBox = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-top: none;
  padding: 0.5em;

  & code {
    display: inline-block;
    background: #282c34;
    color: orange;
  }

  & pre {
    padding: 0.5em;
    background: #282c34;
    border-radius: 10px;
  }

  & table {
    border-collapse: collapse;
  }

  & th,
  td,
  tr {
    border: 2px solid #000;
    padding: 0 5px;
  }
`;

const Previewer = ({ markdown, status, titlebar }) => {
  return (
    <PreviewerBox display={status.editorHighlighted}>
      {titlebar}
      <ContentBox
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        id="preview"
      />
    </PreviewerBox>
  );
};

export default Previewer;
