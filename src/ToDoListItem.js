import React from "react";

const ToDoListItem = ({listItems,togglebetween}) =>{


    return(
        <>  
        <div className="items" style={{border:"2px solid black",marginLeft:"100px",marginRight:"100px",height:"300px"}}>
            {listItems.length === 0 ? (
                 <p style={{fontStyle:"italic",marginTop:"100px",cursor:"pointer"}}>Nothing to do buddy. Sleep!</p>
            )
            :
           
            (
               
                listItems.map((element,index) => {
                    return   <p key={index} style={{textDecoration: element.completed ? "line-through":"none",cursor:"pointer"}} onClick={() => togglebetween(index)}>
                            {element.text}
                            </p>
                         
            })
            )
          
            }

        </div>
</>
    )
}

export default ToDoListItem;