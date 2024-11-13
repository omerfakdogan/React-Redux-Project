
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
