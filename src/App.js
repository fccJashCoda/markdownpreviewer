import logo from './logo.svg';
import './App.css';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import styled from 'styled-components';

const Application = styled.div`
  background: #00a2ed;
  padding-top: 1em;
`;

function App() {
  return (
    <Application className="App">
      <div>
        <h1>Markdown Previewer</h1>
      </div>
      <MarkdownPreviewer />
    </Application>
  );
}

export default App;
