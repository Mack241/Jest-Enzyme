import GuessedWords from './GuessComponent';
import Congrats from './Congrats';
import Input from './InputComponent';

function App() {
  return (
    <div className="container" data-test='component-app' style={{ marginTop: '50px' }}>
     <h1>Jotto</h1>
     <Congrats success={true} />
     <Input secretWord={'potray'}/>
     <GuessedWords guessedWords={[
       {
         guessedWord: 'april',
         letterMatchCount: 2
       }
     ]} />
    </div>
  );
}

export default App;
