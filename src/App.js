import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Learning REDUX</h1>
      <h2>Counter {counter}</h2>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Too valuable data to show</h3> : ''}
    </div>
  );
}

export default App;
