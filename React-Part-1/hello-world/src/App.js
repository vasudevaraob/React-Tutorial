import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import MessageState from './components/MessageState';

function App() {
  return (
    <div className="App">
      {/* <Greet name='gani'>
        <p>Hello Hero</p>
      </Greet>
      <Greet name='Vasudev'>
        <button>Action</button>
      </Greet>
      <Greet name='Bharathi'>
        <button type='submit'>submit</button>
      </Greet>
      <Welcome></Welcome> */}

      {/* <Message></Message> */}

      <MessageState></MessageState>
    </div>
  );
}

export default App;
