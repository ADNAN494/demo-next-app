"use client";

import { useRouter } from "next/navigation";

const Delete = ({id}) => {

    const handleDelete = async ()=>{
        const data = await fetch(`http://localhost:3000/api/db-data/${id}`,{
            method: "DELETE", 
        });
        const response = await data.json();
        if(response.success){
            alert("Data deleted");
        }else{
            alert("Not Deleted");
        }
    }
  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default Delete
