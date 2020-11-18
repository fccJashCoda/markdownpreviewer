import logo from './logo.svg';
import './App.css';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import styled from 'styled-components';

const Application = styled.div`
  height: 100vh;
  @media (min-width: 1475px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <Application className="App">
      <MarkdownPreviewer />
    </Application>
  );
}

export default App;
