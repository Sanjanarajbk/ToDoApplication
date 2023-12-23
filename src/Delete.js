import React from "react";

const Delete = ({handleClick}) =>{
    return(
        <>
        <button id="delete" 
        style={{width:"150px",border:"none",backgroundColor:"blue",padding:"5px",marginTop:"7px",color:"white"}}
        onClick={handleClick}
        
        >
            
            Remove Completed</button>
        </>
    )
}

export default Delete;