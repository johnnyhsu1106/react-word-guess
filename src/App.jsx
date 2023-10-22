import Container from './components/Container';
import Drawing from './components/Drawing';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import Message from './components/Message';
import { WordProvider } from './context/WordContext';
import './App.css';



function App() {
  return (
    <WordProvider>
      <Container>
        <Drawing />
        <Word />
        <Keyboard />
        <Message />
      </Container>
    </WordProvider>
  )
}

export default App;
