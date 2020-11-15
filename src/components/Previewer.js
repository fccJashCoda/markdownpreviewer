import marked from 'marked';

const Previewer = ({ markdown }) => {
  return <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />;
};

export default Previewer;
