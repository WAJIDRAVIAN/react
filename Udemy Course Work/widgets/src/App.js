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
const label = 'Please select a color';
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



const ShowAccordion=()=>{
    if (window.location.pathname==='/') {
        return <Accordion items={items}/>;
    }
}

const ShowList=()=>{
    if (window.location.pathname==='/list') {
        return <Search />
    }
}

const ShowDropdown=()=>{
    const [selected, setSelected] = useState(options[0]);
    if (window.location.pathname==='/dropdown') {
        return (<Dropdown label={label} options={options} 
        selected={selected} onSelectedChange={setSelected}/>);
    }
}
const ShowTranslate=()=>{
    if (window.location.pathname==='/translate') {
        return <Translate />
    }
}
const FunRender=()=>{
    
    return (
        <div>
                { ShowAccordion()
                /* <Translate
                selected={selected}
                onSelectedChange={setSelected} 
                options={options} 
                /> */}
                {ShowList()}
                {ShowDropdown()}
                {ShowTranslate()}
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