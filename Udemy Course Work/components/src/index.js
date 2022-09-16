// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import ApprovalCard from './approvalCard';
import CommnetDetail from './CommentDetail';
import './style/App.css';
const App=()=>{
return (
<div className='ui container comments' >
    <ApprovalCard><CommnetDetail author='Wajid'/></ApprovalCard>
    <ApprovalCard><CommnetDetail author='Ali'/></ApprovalCard>
    <ApprovalCard><CommnetDetail author='Ahmed'/></ApprovalCard>
    <ApprovalCard><CommnetDetail author='Haneef'/></ApprovalCard>
</div>
);
};

ReactDOM.createRoot(document.querySelector('#root')).render(<App/>);

