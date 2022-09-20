import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from './components/Search';
import Dropdown from './components/Dropdown';
const items =[
    {title:'react-1',
     content:'it is a js frontend framework'
    },
    {title:'react-2',
     content:'it is a js frontend framework'
    },
    {title:'react-3',
     content:'it is a js frontend framework'
    },
    {title:'react-4',
     content:'it is a js frontend framework'
    },
    {title:'react-5',
     content:'it is a js frontend framework'
    }
];

const options =[
{
    label:'Red color',
    value:'red'
},
{
    label:'Green color',
    value:'green'
},
{
    label:'Blue color',
    value:'blue'
},
{
    label:'White color',
    value:'white'
},
{
    label:'Black color',
    value:'black'
}
];

const FunRender=()=>{
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            <button onClick={()=>setShowDropdown(!showDropdown)} className={`ui toggle button ${showDropdown?'active':''}`}>{`${showDropdown?'Hide Menu':'Show Menu'}`}</button>
            {   showDropdown?
                <Dropdown
                selected={selected}
                onSelectedChange={setSelected} 
                options={options}
            /> : null
         }
        </div>
    );
    }

export default FunRender;
// export default()=>{
// return (
//     <div>
//         <Accordion  items={items}/>
//     </div>
// );
// }