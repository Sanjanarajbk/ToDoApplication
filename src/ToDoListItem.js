import React from "react";

const ToDoListItem = () =>{
    const listItems =["Read SpringBoot", "Complete assignments", "Prepare breakfast", 
    "Sleep for 2 hours", "Take a shower"]

    return(
        <>
        {
            listItems.map((element,index) => {
             return   <p key={index}>
                    {element}
                </p>
            })
        }
</>
    )
}

export default ToDoListItem;