import logo from './logo.svg';
import './App.css';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import styled from 'styled-components';

const Application = styled.div`
  background: #00a2ed;
  height: 100vh;
`;

function App() {
  return (
    <Application className="App">
      <MarkdownPreviewer />
    </Application>
  );
}

export default App;
