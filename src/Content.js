import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";


export const Content = () => {
const [items,setitems]=useState(   

    [
        {id:1,checked:true,item:"Practice React"},
        {id:2,checked:true,item:"Coding"},
        {id:3,checked:true,item:"Computer Fundamentals"},
        {id:4,checked:true,item:"Aptitude"},

    ]
)
const HandleCheck = (id)=>{
    const list = items.map((item)=> item.id==id ? {...item ,checked:!item.checked}:item)
    setitems(list)
    localStorage.setItem("to-do-app",JSON.stringify(list))
}
const handleDelete = (id)=>{
    const list = items.filter((item)=> item.id!=id)
    setitems(list)
    localStorage.setItem("to-do-app",JSON.stringify(list))

}

  return (
    <main>    
            <ul >
                {items.map((item) => (
            <li className='item' key={item.id}>
                 <input
                 type="checkbox"
                 onClick={()=>HandleCheck(item.id)}
                 checked={item.checked}
                />
               <label>{item.item}</label>
               <FaTrashAlt
               role="button"
               onClick={()=>handleDelete(item.id)}
               
               />
            </li>



                ) )}


            </ul>


    </main>
  )
}
export default Content;