import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import React from 'react'
import { useEffect, useState } from 'react';


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

const array = ["Apple", "Orange", "Banana", "Grape"]

const objectOfArrays = {
  fruits: ["apple", "banana", "orange"],
  vegetables: ["carrot", "spinach", "broccoli"],
  dairy: ["milk", "cheese", "yogurt"]
};

function App() {
  const [ search, setSearch ] = useState('')
  
  const filteredSearch = array.filter((fruit) => {
    const searchFruit = fruit.toLowerCase().includes(search.toLocaleLowerCase())
    return searchFruit
  })

  // console.log(filteredSearch)

  return (
    <div className="App">
      <>
        <input 
          type='text' 
          className='input'
          onSubmit={(e) => setSearch(e.target.value)}
          placeholder='Search...'
        />
      </>
      <Home className='Home'>
        <h1>Test App</h1>
        {/* {filteredSearch.map((e) => {
          <p>{e}</p>
        })} */}
        <p>{filteredSearch}</p>
      </Home>
    </div>
  );
}

export default App;
