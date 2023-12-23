import ToDoListItem from "./ToDoListItem";
import React, { useState } from "react";
import Delete from "./Delete";
import Header from "./Header"

function App() {

  const intialItems = [
    {
      text:"Read SpringBoot",
      completed:false
    },
    {
      text:"Complete assignments",
      completed:false
    },
    {
      text:"Prepare breakfast",
      completed:false
    },
    {
      text:"Sleep for 2 hours",
      completed:false
    },
    {
      text:"Take a shower",
      completed:false
    }
  ]

  const [listItems,setListItems] =useState(intialItems)

  const emptyButton = () =>{
//setListItems([]) //set it to empty

const newlistItems = [...listItems] //or listItems.slice(); to create a copy of the original 
const leftOutTasks = newlistItems.filter((element)=>{ 
           return  (!element.completed)
  })
    setListItems(leftOutTasks)
  }

  const togglebetween = (index) =>{
    const newlistItems = listItems.slice();
    newlistItems[index].completed = ! newlistItems[index].completed
    setListItems(newlistItems)

  }

  return (
    <>
    <Header/>
    <ToDoListItem listItems={listItems} togglebetween={togglebetween}/>
    <Delete handleClick={emptyButton}/>
    </>
  );
}

export default App;
