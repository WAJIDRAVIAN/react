import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
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
    return (
        <div>
                <Translate
                selected={selected}
                onSelectedChange={setSelected} 
                options={options}
            /> 
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