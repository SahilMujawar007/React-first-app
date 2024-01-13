import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';
import './App.css';

function App() {
  return (
    <div className="App">
        <Person name='name: Sahil' age='age: 22'/>
        <Button text='click' />
        <Header title='Header' />
        <List items='one' />
        <List items='Two' />
        <List items='Three' />
    </div>
  );
}

export default App;
