import React,{useState} from 'react'
import { data } from './Data'

const Textbox = () => {
   const[value,setValue]=useState("");
   const[suggestion,setSuggestion]=useState(true);

   const handleKeyEvent=(e)=>{
      if(e.key==="Escape"){
        setSuggestion(false)
      }
      else{
        setSuggestion(true)
      }
   }

   const handleChange=(e)=>{
    setValue(e.target.value);
    // console.log(value);
   }
    
  return (
  <>
    <div style={{display:"flex",justifyContent:"center"}}>
        <input onFocus={()=>{setSuggestion(true)}} value={value} onKeyDown={handleKeyEvent} onChange={handleChange} style={{width:"200px",height:"40px"}} type="text" />
    
    </div>

   <div style={{textAlign:"center"}}>
    {data.filter((e)=>{
        const name= e.name.toLowerCase();
        const inputValue=value.toLowerCase();

        return inputValue && name.startsWith(inputValue) && suggestion
    })
    .map((item)=>(
        <div key={item.code}>
           {item.name}
        </div>
    ))}
   </div>
  
  </>
   
  )
}

export default Textbox