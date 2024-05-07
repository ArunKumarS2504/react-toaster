import React,{useState} from 'react'




const Filters = () => {
    const [selectedItem , setSelectedItem] = useState(1)
  return (
    <div>
        <button onClick={()=>setSelectedItem(1)}></button>
    </div>
  )
}

export default Filters