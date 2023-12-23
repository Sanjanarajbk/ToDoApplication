
import React from 'react';
import { useState } from 'react';
import Delete from './Delete';
import Header from './Header';
import ToDoListItem from './ToDoListItem'; 

function App() {

  const [listItems,setListItems] =useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", 
  "Sleep for 2 hours", "Take a shower"])

  const emptyButton = () =>{
setListItems([]) //set it to empty
  }

  return (
    <>
    <Header/>
    <ToDoListItem listItems={listItems}/>
    <Delete handleClick={emptyButton}/>
    </>
  );
}

export default App;
