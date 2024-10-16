"use client"

import { useState } from "react";

const UploadImage = () => {
    const [file , setFile] = useState();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!file){
            alert('File Not Selected');
            return;
        }
        let data = new FormData();
        data.append('file', file);
        try {
            let result = await fetch('http://localhost:3000/api/upload-mongo-img',{
                method: "POST",
                body: data
            })
            result = await result.json();
            if(result.success){
                alert("Sucessfully Uplaoded")
            }else{
                alert("Failed Uploaded")
            }
        } catch (error) {
            alert(error);
        }
    }
  return (
    <div>
      <h2>Uplaod Image Next Js</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" name='file' onChange={(e)=> setFile(e.target.files?.[0])}/><br/><br/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default UploadImage
