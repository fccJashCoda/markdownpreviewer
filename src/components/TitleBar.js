import styled from 'styled-components';

const TitleBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.5em;
  background: #f0f0f0;
  border: 1px solid #000;
  border-bottom: none;
`;

const Title = styled.h4`
  margin: 0 0 0 0.5em;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  margin-right: 0.5em;
`;

const TitleBar = ({ title }) => {
  return (
    <TitleBarStyle>
      <Title>{title}</Title>
      <Button>
        <i class="fas fa-expand-arrows-alt"></i>
      </Button>
    </TitleBarStyle>
  );
};

export default TitleBar;
