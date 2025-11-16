import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import React from 'react'
import { useEffect, useState } from 'react';

// previous state
// props spreading
// children
// search feature
// manipulating objects and arrays
// button size prop - scrimba video - Advanced react 
// rewatch menu component intro 
// prop drilling 
  // compound components - to avoid prop drilling 

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
  
  // const filteredSearch = arrayObject.filter((users) => {
  //   return users.name.toLowerCase().includes(search.toLocaleLowerCase()) || users.lastName.toLowerCase().includes(search.toLocaleLowerCase())
  // })

  const filteredSearch = array.filter((fruit) => {
    return fruit.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })



  return (
    <div className="App">
      <>
        <input 
          type='text' 
          className='input'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search...'
        />
      </>
      <Home className='Home'>
        <h1>Test App</h1>
        
          {/* This is displaying all the items when we arent searching anything */}
          {/* {console.log(typeof(filteredSearch))} */}
          {filteredSearch.map((user) => {
            return (
              <>
                {/* <p> {`${user.name} ${user.lastName}`} </p> */}
                <p> {user} </p>
              </>
            )
             
          })}
          {/* {Object.values(filteredSearch)} */}
        
          </Home>
    </div>
  );
}


// Problem - displaying all the items in the array instead of just the one
// 

export default App;
