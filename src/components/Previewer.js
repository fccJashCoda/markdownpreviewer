import marked from 'marked';

const Previewer = ({ markdown }) => {
  // console.log(marked.Renderer);
  const handleMarkdown = () => {
    return { __html: marked(markdown) };
  };
  return <div dangerouslySetInnerHTML={handleMarkdown()} />;
};

export default Previewer;
