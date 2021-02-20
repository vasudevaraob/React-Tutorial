import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import FormStrap from './components/FormStrap';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import RefDemo from './components/RefDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     {/* <Form></Form> */}
     {/* <FormStrap></FormStrap> */}
     {/* <LifeCycleA></LifeCycleA> */}
     {/* <FragmentDemo></FragmentDemo> */}
     {/* <PureComp></PureComp> */}

     {/* <RefDemo></RefDemo> */}
     {/* <Hero heroName='Gani'></Hero>
     <ErrorBoundry>
     <Hero heroName='Joker'></Hero>
     </ErrorBoundry> */}
     <ClickCounter></ClickCounter>
     <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
