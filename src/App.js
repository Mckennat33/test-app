import logo from './logo.svg';
import './App.css';
import Home from './components/Home'


const object = {
  name: "Thomas",
  lastName: "Mckenna", 
  email: "thomasmckenna12@gmail.com",
  age: 33, 
  birthday: "1991-05-31", 
  happy: false
}

const arrayObject = [
  {
    name: "Thomas", lastName: "Mckenna"
  }, 
  {
    name: "Nate", lastName: "Reed"
  }
]

const array = ["apple", "oranges", "bananas", "grapes"]

function App() {
  return (
    <div className="App">
      <Home className='Home'>
        <p>Hello</p>
      </Home>
    </div>
  );
}

export default App;
