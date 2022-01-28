import { Container, Content } from './RootStyles';

const Root = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Root;
