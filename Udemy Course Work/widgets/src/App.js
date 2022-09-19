import React from 'react';
import Accordion from "./components/Accordion";


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
export default()=>{
return (
    <div>
        <Accordion  items={items}/>
    </div>
);
}