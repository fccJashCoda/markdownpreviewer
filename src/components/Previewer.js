import marked from 'marked';

const Previewer = ({ markdown }) => {
  const handleMarkdown = () => {
    return { __html: marked(markdown) };
  };
  return <div dangerouslySetInnerHTML={handleMarkdown()} />;
};

export default Previewer;
