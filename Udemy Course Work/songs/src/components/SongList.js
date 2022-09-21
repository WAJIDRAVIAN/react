import React, { Component } from "react";
import {connect} from 'react-redux';

class SongList extends Component{
    
    render(){
        
        return(
            <div>
                Songs List
            </div>
        );
    }
};

const mapStateToProps =(state)=>{
    console.log('Wonderful',  state);
    return {songs:state.songs};
}

export default connect (mapStateToProps)(SongList);