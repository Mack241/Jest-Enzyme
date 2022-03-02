import GuessedWords from './GuessComponent';
import Congrats from './Congrats';
import Input from './InputComponent';

function App() {
  const success = false
  const secretWord = 'party'
  const guessedWords = []

  return (
    <div className="container" data-test='component-app' style={{ marginTop: '50px' }}>
     <h1>Jotto</h1>
     <Congrats success={success} />
     <Input success={success} secretWord={secretWord}/>
     <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
