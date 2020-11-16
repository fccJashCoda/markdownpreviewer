import marked from 'marked';
import styled from 'styled-components';
import TitleBar from './TitleBar';

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
`;

const Previewer = ({ markdown, status, statusHandler }) => {
  const modifyStatus = () => {
    statusHandler({
      ...status,
      previewerHighlighted: !status.previewerHighlighted,
    });
  };

  console.log('preview editorhighlighted', status.editorHighlighted);

  return (
    <PreviewerBox display={status.editorHighlighted}>
      <TitleBar title={'Previewer'} action={modifyStatus} />
      <ContentBox dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </PreviewerBox>
  );
};

export default Previewer;
