import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import MessageState from './components/MessageState';
import StatePropExampleBase from './components/StatePropExampleBase';
import Count from './components/Count';
import PropsValidation from './components/PropsValidation';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">

      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      {/* <Greet name='gani'>
        <p>Hello Hero</p>
      </Greet>
      <Greet name='Vasudev'>
        <button>Action</button>
      </Greet>
      <Greet name='Bharathi'>
        <button type='submit'>submit</button>
      </Greet>
      <Welcome></Welcome>

      <PropsValidation></PropsValidation> */}

      {/* <Message></Message> */}

      {/* <MessageState></MessageState> */}

      {/* <StatePropExampleBase></StatePropExampleBase> */}

      {/* <Count></Count> */}
    </div>
  );
}

export default App;
