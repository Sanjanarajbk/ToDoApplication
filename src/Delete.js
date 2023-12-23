import React from "react";

const Delete = ({handleClick}) =>{
    return(
        <>
        <button id="delete" 
        style={{width:"60px",border:"none",backgroundColor:"blue",padding:"5px",marginTop:"7px",color:"white"}}
        onClick={handleClick}
        
        >
            
            Empty</button>
        </>
    )
}

export default Delete;